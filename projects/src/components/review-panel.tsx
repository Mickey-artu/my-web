'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { getAllItems, getDistractors, speak, type LearningItem, type Word, type Phrase } from '@/lib/words';
import { useLearning } from '@/components/learning-provider';
import { HeartIcon, BookIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ReviewMode = 'list' | 'test';

function isWord(item: LearningItem): item is Word {
  return item.type === 'word';
}

function getItemLabel(item: LearningItem): string {
  return isWord(item) ? item.word : (item as Phrase).phrase;
}

function getItemMeaning(item: LearningItem): string {
  return isWord(item) ? `${item.partOfSpeech} ${item.meaning}` : item.meaning;
}

export function ReviewPanel() {
  const {
    getWrongWords,
    getFavoriteWords,
    toggleFavorite,
    isWordFavorite,
    markWordCorrect,
    markWordWrong,
  } = useLearning();

  const allItems = useMemo(() => getAllItems(), []);

  const [mode, setMode] = useState<ReviewMode>('list');
  const [reviewType, setReviewType] = useState<'wrong' | 'favorite'>('wrong');
  const [testIndex, setTestIndex] = useState(0);
  const [testItems, setTestItems] = useState<LearningItem[]>([]);
  const [testOptions, setTestOptions] = useState<LearningItem[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [spellInput, setSpellInput] = useState('');
  const [spellSubmitted, setSpellSubmitted] = useState(false);
  const [testType, setTestType] = useState<'select' | 'spell'>('select');
  const [showMeaning, setShowMeaning] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const wrongItems = useMemo(() => {
    const records = getWrongWords();
    return records
      .map(r => allItems.find(w => w.id === r.wordId))
      .filter((w): w is LearningItem => w !== undefined);
  }, [getWrongWords, allItems]);

  const favoriteItems = useMemo(() => {
    const records = getFavoriteWords();
    return records
      .map(r => allItems.find(w => w.id === r.wordId))
      .filter((w): w is LearningItem => w !== undefined);
  }, [getFavoriteWords, allItems]);

  const currentList = reviewType === 'wrong' ? wrongItems : favoriteItems;
  const currentTestItem = testItems[testIndex] || null;

  const handleSpeak = useCallback((text: string) => {
    setIsSpeaking(true);
    speak(text);
    setTimeout(() => setIsSpeaking(false), 1500);
  }, []);

  const startReviewTest = useCallback((type: 'wrong' | 'favorite') => {
    const items = type === 'wrong' ? wrongItems : favoriteItems;
    const shuffled = [...items].sort(() => Math.random() - 0.5).slice(0, 5);
    setTestItems(shuffled);
    setTestIndex(0);
    setMode('test');
    setSelectedOption(null);
    setIsCorrect(null);
    setSpellInput('');
    setSpellSubmitted(false);
    setShowMeaning(false);

    if (shuffled.length > 0) {
      // 短语只做选择题
      const tType = isWord(shuffled[0]) && Math.random() > 0.5 ? 'spell' : 'select';
      setTestType(tType);
      if (tType === 'select') {
        const distractors = getDistractors(shuffled[0], 3);
        setTestOptions([shuffled[0], ...distractors].sort(() => Math.random() - 0.5));
      }
    }
  }, [wrongItems, favoriteItems]);

  const handleSelectAnswer = useCallback((itemId: string) => {
    if (!currentTestItem || isCorrect !== null) return;
    setSelectedOption(itemId);
    const correct = itemId === currentTestItem.id;
    setIsCorrect(correct);
    if (correct) {
      markWordCorrect(currentTestItem.id);
    } else {
      markWordWrong(currentTestItem.id);
    }
  }, [currentTestItem, isCorrect, markWordCorrect, markWordWrong]);

  const handleSpellSubmit = useCallback(() => {
    if (!currentTestItem || spellSubmitted || !isWord(currentTestItem)) return;
    setSpellSubmitted(true);
    const correct = spellInput.trim().toLowerCase() === currentTestItem.word.toLowerCase();
    setIsCorrect(correct);
    if (correct) {
      markWordCorrect(currentTestItem.id);
    } else {
      markWordWrong(currentTestItem.id);
    }
  }, [currentTestItem, spellInput, spellSubmitted, markWordCorrect, markWordWrong]);

  const goNextTest = useCallback(() => {
    if (testIndex >= testItems.length - 1) {
      setMode('list');
      return;
    }
    const nextIdx = testIndex + 1;
    setTestIndex(nextIdx);
    setSelectedOption(null);
    setIsCorrect(null);
    setSpellInput('');
    setSpellSubmitted(false);
    setShowMeaning(false);

    const nextItem = testItems[nextIdx];
    if (nextItem) {
      const tType = isWord(nextItem) && Math.random() > 0.5 ? 'spell' : 'select';
      setTestType(tType);
      if (tType === 'select') {
        const distractors = getDistractors(nextItem, 3);
        setTestOptions([nextItem, ...distractors].sort(() => Math.random() - 0.5));
      }
    }
  }, [testIndex, testItems]);

  // 列表模式
  if (mode === 'list') {
    return (
      <div className="px-4 py-4 max-w-lg mx-auto">
        <Tabs value={reviewType} onValueChange={(v) => setReviewType(v as 'wrong' | 'favorite')}>
          <TabsList className="w-full bg-[#F5F0EB] rounded-2xl p-1 mb-4">
            <TabsTrigger
              value="wrong"
              className="flex-1 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm"
            >
              错题本 ({wrongItems.length})
            </TabsTrigger>
            <TabsTrigger
              value="favorite"
              className="flex-1 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm"
            >
              收藏夹 ({favoriteItems.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wrong">
            {wrongItems.length === 0 ? (
              <div className="text-center py-12">
                <BookIcon size={48} className="mx-auto text-[#F0EBE5] mb-4" />
                <p className="text-[#8C8680]">暂无错题，继续保持！</p>
              </div>
            ) : (
              <>
                <div className="space-y-2 mb-4">
                  {wrongItems.map(item => (
                    <Card key={item.id} className="p-4 rounded-2xl border-[#F0EBE5] flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-lg text-[#2D2A26]">{getItemLabel(item)}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFF8E1] text-[#7A6340]">
                            {isWord(item) ? '单词' : '短语'}
                          </span>
                          <button
                            onClick={() => handleSpeak(getItemLabel(item))}
                            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FFF0EE] hover:bg-[#FFE0DD] transition-all"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8564A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                            </svg>
                          </button>
                        </div>
                        {isWord(item) && (
                          <span className="text-[#8C8680] text-sm ml-0">{item.phonetic}</span>
                        )}
                        <p className="text-sm text-[#8C8680] mt-0.5">
                          {getItemMeaning(item)}
                        </p>
                      </div>
                      <button onClick={() => toggleFavorite(item.id)} className="ml-2">
                        <HeartIcon size={18} filled={isWordFavorite(item.id)} />
                      </button>
                    </Card>
                  ))}
                </div>
                <Button
                  onClick={() => startReviewTest('wrong')}
                  className="w-full bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full py-3 font-medium"
                >
                  开始复习错题
                </Button>
              </>
            )}
          </TabsContent>

          <TabsContent value="favorite">
            {favoriteItems.length === 0 ? (
              <div className="text-center py-12">
                <HeartIcon size={48} className="mx-auto text-[#F0EBE5] mb-4" />
                <p className="text-[#8C8680]">暂无收藏</p>
                <p className="text-[#8C8680] text-sm mt-1">学习时点击爱心即可收藏</p>
              </div>
            ) : (
              <>
                <div className="space-y-2 mb-4">
                  {favoriteItems.map(item => (
                    <Card key={item.id} className="p-4 rounded-2xl border-[#F0EBE5] flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-lg text-[#2D2A26]">{getItemLabel(item)}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFF8E1] text-[#7A6340]">
                            {isWord(item) ? '单词' : '短语'}
                          </span>
                          <button
                            onClick={() => handleSpeak(getItemLabel(item))}
                            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FFF0EE] hover:bg-[#FFE0DD] transition-all"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8564A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                            </svg>
                          </button>
                        </div>
                        {isWord(item) && (
                          <span className="text-[#8C8680] text-sm">{item.phonetic}</span>
                        )}
                        <p className="text-sm text-[#8C8680] mt-0.5">
                          {getItemMeaning(item)}
                        </p>
                      </div>
                      <button onClick={() => toggleFavorite(item.id)} className="ml-2">
                        <HeartIcon size={18} filled />
                      </button>
                    </Card>
                  ))}
                </div>
                <Button
                  onClick={() => startReviewTest('favorite')}
                  className="w-full bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full py-3 font-medium"
                >
                  开始复习收藏
                </Button>
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  // 测试模式
  return (
    <div className="flex flex-col px-4 py-6 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setMode('list')}
          className="text-[#8C8680] hover:text-[#2D2A26] text-sm"
        >
          ← 返回
        </button>
        <span className="text-sm text-[#8C8680]">{testIndex + 1} / {testItems.length}</span>
      </div>

      {currentTestItem && testType === 'select' && (
        <>
          <div className="text-center mb-6">
            <h2 className="text-lg font-medium text-[#2D2A26] mb-2">选择正确的释义</h2>
            <div className="flex items-center justify-center gap-2">
              <p className="text-3xl font-serif text-[#2D2A26]">{getItemLabel(currentTestItem)}</p>
              <button
                onClick={() => handleSpeak(getItemLabel(currentTestItem))}
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF0EE] hover:bg-[#FFE0DD] transition-all ${isSpeaking ? 'animate-pulse-soft' : ''}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8564A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {testOptions.map(option => {
              let btnClass = 'w-full text-left p-4 rounded-2xl border-2 transition-all font-medium ';
              if (selectedOption === option.id && isCorrect === true) {
                btnClass += 'border-[#4CAF7D] bg-[#F0FFF6] text-[#4CAF7D]';
              } else if (selectedOption === option.id && isCorrect === false) {
                btnClass += 'border-[#E8564A] bg-[#FFF0EE] text-[#E8564A]';
              } else if (isCorrect !== null && option.id === currentTestItem.id) {
                btnClass += 'border-[#4CAF7D] bg-[#F0FFF6] text-[#4CAF7D]';
              } else {
                btnClass += 'border-[#F0EBE5] bg-white text-[#2D2A26] hover:border-[#E8564A]';
              }
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectAnswer(option.id)}
                  disabled={isCorrect !== null}
                  className={btnClass}
                >
                  {isWord(option) && (
                    <span className="text-[#8C8680] text-sm mr-2">{option.partOfSpeech}</span>
                  )}
                  {option.type === 'phrase' && (
                    <span className="text-[#8C8680] text-sm mr-2">短语</span>
                  )}
                  {option.meaning}
                </button>
              );
            })}
          </div>
          {isCorrect !== null && (
            <div className="mt-6 animate-fade-in-up">
              {!isCorrect && (
                <div className="bg-[#FFFDF9] rounded-2xl p-3 text-sm text-[#8C8680] mb-4">
                  <p className="text-[#2D2A26]">{currentTestItem.example}</p>
                  <p>{currentTestItem.exampleCn}</p>
                </div>
              )}
              <Button onClick={goNextTest} className="w-full bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full py-3">
                {testIndex < testItems.length - 1 ? '下一题' : '完成复习'}
              </Button>
            </div>
          )}
        </>
      )}

      {currentTestItem && testType === 'spell' && isWord(currentTestItem) && (
        <>
          <div className="text-center mb-6">
            <h2 className="text-lg font-medium text-[#2D2A26] mb-2">拼写单词</h2>
            <p className="text-xl text-[#2D2A26]">
              <span className="text-[#8C8680] text-sm mr-2">{currentTestItem.partOfSpeech}</span>
              {currentTestItem.meaning}
            </p>
            <button
              onClick={() => handleSpeak(currentTestItem.word)}
              className="inline-flex items-center gap-1.5 text-xs text-[#E8564A] hover:underline mt-2"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              听一听发音
            </button>
            {spellSubmitted && !isCorrect && (
              <p className="text-base text-[#E8564A] mt-2 font-serif">正确拼写: {currentTestItem.word}</p>
            )}
          </div>
          <div className="space-y-4">
            <Input
              value={spellInput}
              onChange={(e) => setSpellInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && spellInput.trim()) handleSpellSubmit(); }}
              disabled={spellSubmitted}
              placeholder="请输入英文单词..."
              className="text-center text-xl font-serif rounded-2xl border-2 border-[#F0EBE5] focus:border-[#E8564A] h-14"
            />
            {!spellSubmitted ? (
              <Button onClick={handleSpellSubmit} disabled={!spellInput.trim()} className="w-full bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full py-3 disabled:opacity-40">
                提交答案
              </Button>
            ) : (
              <div className="animate-fade-in-up">
                <div className={`text-center mb-3 text-sm font-medium ${isCorrect ? 'text-[#4CAF7D]' : 'text-[#E8564A]'}`}>
                  {isCorrect ? '拼写正确！' : '再接再厉！'}
                </div>
                <Button onClick={goNextTest} className="w-full bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full py-3">
                  {testIndex < testItems.length - 1 ? '下一题' : '完成复习'}
                </Button>
              </div>
            )}
          </div>
        </>
      )}

      {!currentTestItem && (
        <div className="text-center py-12">
          <p className="text-[#8C8680]">没有可复习的内容</p>
          <Button onClick={() => setMode('list')} className="mt-4 bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full">
            返回
          </Button>
        </div>
      )}
    </div>
  );
}
