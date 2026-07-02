'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { getAllItems, getDistractors, speak, type LearningItem, type Word, type Phrase } from '@/lib/words';
import { useLearning } from '@/components/learning-provider';
import { FlowerIcon, HeartIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type LessonPhase = 'intro' | 'view' | 'test-select' | 'test-spell' | 'result' | 'complete';

interface DailyLessonProps {
  onBack: () => void;
}

function isWord(item: LearningItem): item is Word {
  return item.type === 'word';
}

function isPhrase(item: LearningItem): item is Phrase {
  return item.type === 'phrase';
}

export function DailyLesson({ onBack }: DailyLessonProps) {
  const {
    state,
    getTodayWordIds,
    startTodayLearning,
    markWordLearned,
    markWordCorrect,
    markWordWrong,
    completeTodayLearning,
    toggleFavorite,
    isWordFavorite,
    isTodayCompleted,
  } = useLearning();

  const [phase, setPhase] = useState<LessonPhase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [todayItems, setTodayItems] = useState<LearningItem[]>([]);
  const [showMeaning, setShowMeaning] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [spellInput, setSpellInput] = useState('');
  const [spellSubmitted, setSpellSubmitted] = useState(false);
  const [testOptions, setTestOptions] = useState<LearningItem[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [correctInSession, setCorrectInSession] = useState(0);
  const [confettiData] = useState(() =>
    Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 30,
      duration: 1 + Math.random() * 2,
      delay: Math.random() * 0.5,
      size: 20 + Math.random() * 16,
      dotWidth: 6 + Math.random() * 8,
      dotHeight: 6 + Math.random() * 8,
    }))
  );
  const [isSpeaking, setIsSpeaking] = useState(false);

  const todayWordIds = getTodayWordIds();
  const todayCompleted = isTodayCompleted();

  // 确定当前学习项
  const currentItem = useMemo(() => {
    if (todayItems.length === 0) return null;
    return todayItems[currentIndex] || null;
  }, [todayItems, currentIndex]);

  // 如果今天已完成，显示完成状态
  useEffect(() => {
    if (todayCompleted && todayWordIds.length > 0) {
      const allItems = getAllItems();
      const items = todayWordIds
        .map(id => allItems.find(w => w.id === id))
        .filter((w): w is LearningItem => w !== undefined);
      setTodayItems(items);
      setPhase('complete');
      setCorrectInSession(5);
    }
  }, [todayCompleted, todayWordIds]);

  // 朗读功能
  const handleSpeak = useCallback((text: string) => {
    setIsSpeaking(true);
    speak(text);
    // 语音结束后重置状态（大约估算时长）
    setTimeout(() => setIsSpeaking(false), 1500);
  }, []);

  // 开始今日学习
  const startLearning = useCallback(() => {
    const allItems = getAllItems();
    const learnedIds = Object.keys(state.wordRecords);
    // 按当前难度梯度选择5个新学习项
    // 混合单词和短语，优先选择未学过的
    const difficulties: Array<1 | 2 | 3 | 4 | 5> = [1, 2, 3, 4, 5];
    let selectedItems: LearningItem[] = [];

    for (const diff of difficulties) {
      if (selectedItems.length >= 5) break;
      const available = allItems.filter(
        w => w.difficulty === diff && !learnedIds.includes(w.id)
      );
      // 打乱顺序
      const shuffled = [...available].sort(() => Math.random() - 0.5);
      selectedItems = [...selectedItems, ...shuffled.slice(0, 5 - selectedItems.length)];
    }

    // 如果可用项不够，从未掌握的项中补充
    if (selectedItems.length < 5) {
      const unmastered = allItems.filter(
        w => !selectedItems.find(s => s.id === w.id) &&
          (!learnedIds.includes(w.id) || (state.wordRecords[w.id] && !state.wordRecords[w.id].mastered))
      );
      const shuffled = [...unmastered].sort(() => Math.random() - 0.5);
      selectedItems = [...selectedItems, ...shuffled.slice(0, 5 - selectedItems.length)];
    }

    const itemIds = selectedItems.map(w => w.id);
    startTodayLearning(itemIds);
    setTodayItems(selectedItems);
    setCurrentIndex(0);
    setPhase('view');
    setShowMeaning(false);
    setCorrectInSession(0);
  }, [state.wordRecords, startTodayLearning]);

  // 进入测试阶段
  const goToTest = useCallback(() => {
    if (!currentItem) return;
    markWordLearned(currentItem.id);

    // 短语不做拼写测试，只做选择题
    const willSpell = isWord(currentItem) && Math.random() > 0.5;

    if (!willSpell) {
      const distractors = getDistractors(currentItem, 3);
      const options = [currentItem, ...distractors].sort(() => Math.random() - 0.5);
      setTestOptions(options);
      setPhase('test-select');
    } else {
      setPhase('test-spell');
    }
    setSelectedOption(null);
    setIsCorrect(null);
    setSpellInput('');
    setSpellSubmitted(false);
  }, [currentItem, markWordLearned]);

  // 选择题提交
  const handleSelectAnswer = useCallback((itemId: string) => {
    if (!currentItem || isCorrect !== null) return;
    setSelectedOption(itemId);
    const correct = itemId === currentItem.id;
    setIsCorrect(correct);

    if (correct) {
      markWordCorrect(currentItem.id);
      setCorrectInSession(prev => prev + 1);
    } else {
      markWordWrong(currentItem.id);
    }
  }, [currentItem, isCorrect, markWordCorrect, markWordWrong]);

  // 拼写测试提交
  const handleSpellSubmit = useCallback(() => {
    if (!currentItem || spellSubmitted || !isWord(currentItem)) return;
    setSpellSubmitted(true);
    const correct = spellInput.trim().toLowerCase() === currentItem.word.toLowerCase();
    setIsCorrect(correct);

    if (correct) {
      markWordCorrect(currentItem.id);
      setCorrectInSession(prev => prev + 1);
    } else {
      markWordWrong(currentItem.id);
    }
  }, [currentItem, spellInput, spellSubmitted, markWordCorrect, markWordWrong]);

  // 下一个
  const goNext = useCallback(() => {
    if (currentIndex >= todayItems.length - 1) {
      completeTodayLearning();
      setPhase('complete');
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    } else {
      setCurrentIndex(prev => prev + 1);
      setPhase('view');
      setShowMeaning(false);
      setSelectedOption(null);
      setIsCorrect(null);
      setSpellInput('');
      setSpellSubmitted(false);
    }
  }, [currentIndex, todayItems.length, completeTodayLearning]);

  const progress = todayItems.length > 0 ? ((currentIndex + (phase === 'complete' ? 1 : 0)) / todayItems.length) * 100 : 0;

  // 获取显示文本
  const getItemLabel = (item: LearningItem): string => {
    if (isWord(item)) return item.word;
    return item.phrase;
  };

  const getItemMeaning = (item: LearningItem): string => {
    if (isWord(item)) return `${item.partOfSpeech} ${item.meaning}`;
    return item.meaning;
  };

  // ===== 渲染: 介绍页 =====
  if (phase === 'intro') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 animate-fade-in-up">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <FlowerIcon size={64} />
          </div>
          <h2 className="text-2xl font-bold text-[#2D2A26]">今日学习</h2>
          <p className="text-[#8C8680] text-base">
            每天学习5个新词汇（含短语），完成即可获得小红花
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-[#8C8680]">
            <span>已连续学习</span>
            <span className="text-[#F5A623] font-bold text-lg">{state.streakDays}</span>
            <span>天</span>
          </div>
          <Button
            onClick={startLearning}
            className="bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full px-8 py-3 text-base font-medium shadow-md hover:shadow-lg transition-all"
            size="lg"
          >
            开始学习
          </Button>
          <button
            onClick={onBack}
            className="block mx-auto text-sm text-[#8C8680] hover:text-[#2D2A26] transition-colors mt-2"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  // ===== 渲染: 完成页 =====
  if (phase === 'complete') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 animate-fade-in-up">
        {showCelebration && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {confettiData.map((item, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${item.left}%`,
                  top: `${item.top}%`,
                  animation: `confettiDrop ${item.duration}s ease-out forwards`,
                  animationDelay: `${item.delay}s`,
                }}
              >
                {i % 3 === 0 ? (
                  <FlowerIcon size={item.size} blooming />
                ) : (
                  <div
                    className="rounded-full"
                    style={{
                      width: item.dotWidth,
                      height: item.dotHeight,
                      backgroundColor: ['#E8564A', '#F5A623', '#4CAF7D', '#FBBF24'][i % 4],
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
        <div className="text-center space-y-6">
          <div className="flex justify-center animate-flower-bloom">
            <FlowerIcon size={80} blooming />
          </div>
          <h2 className="text-2xl font-bold text-[#2D2A26]">太棒了！</h2>
          <p className="text-[#8C8680]">
            你已完成今日5个词汇的学习
          </p>
          <div className="inline-flex items-center gap-2 bg-[#FFF0EE] text-[#E8564A] rounded-full px-5 py-2 font-medium">
            <FlowerIcon size={20} />
            <span>+1 小红花</span>
          </div>
          <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
            <div className="bg-[#F0FFF6] rounded-2xl p-3 text-center">
              <p className="text-2xl font-bold text-[#4CAF7D]">{correctInSession}</p>
              <p className="text-xs text-[#4CAF7D]/70 mt-1">答对数</p>
            </div>
            <div className="bg-[#FFF8E1] rounded-2xl p-3 text-center">
              <p className="text-2xl font-bold text-[#F5A623]">{5 - correctInSession}</p>
              <p className="text-xs text-[#7A6340]/70 mt-1">需巩固</p>
            </div>
          </div>
          <Button
            onClick={onBack}
            className="bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full px-8 py-3 font-medium shadow-md"
          >
            返回首页
          </Button>
        </div>
      </div>
    );
  }

  // ===== 渲染: 查看单词/短语 =====
  if (phase === 'view' && currentItem) {
    const wordItem = isWord(currentItem) ? currentItem : null;
    const phraseItem = isPhrase(currentItem) ? currentItem : null;

    return (
      <div className="flex flex-col px-4 py-6 max-w-lg mx-auto">
        {/* 进度条 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <button onClick={onBack} className="text-[#8C8680] hover:text-[#2D2A26] transition-colors text-sm">
              ✕ 退出
            </button>
            <span className="text-sm text-[#8C8680]">{currentIndex + 1} / {todayItems.length}</span>
          </div>
          <Progress value={progress} className="h-2 bg-[#F0EBE5]" />
        </div>

        {/* 学习项卡片 */}
        <Card className="relative p-8 rounded-3xl border-[#F0EBE5] shadow-sm bg-white text-center">
          {/* 收藏按钮 */}
          <button
            onClick={() => toggleFavorite(currentItem.id)}
            className="absolute top-4 right-4 p-1 hover:scale-110 transition-transform"
          >
            <HeartIcon size={22} filled={isWordFavorite(currentItem.id)} />
          </button>

          {/* 类型标签 */}
          <div className="flex justify-center mb-4">
            <span className="text-xs px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7A6340]">
              {phraseItem ? '短语' : '单词'} · Level {currentItem.difficulty}
            </span>
          </div>

          {/* 英文单词/短语 */}
          <h1 className="text-4xl font-serif text-[#2D2A26] mb-3 tracking-wide">
            {getItemLabel(currentItem)}
          </h1>

          {/* 音标（仅单词） + 发音按钮 */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {wordItem && (
              <p className="text-base text-[#8C8680] font-mono">
                {wordItem.phonetic}
              </p>
            )}
            <button
              onClick={() => handleSpeak(getItemLabel(currentItem))}
              className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#FFF0EE] hover:bg-[#FFE0DD] transition-all ${isSpeaking ? 'animate-pulse-soft scale-110' : ''}`}
              title="点击朗读"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8564A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            </button>
          </div>

          {/* 释义区域 - 可翻转 */}
          {!showMeaning ? (
            <button
              onClick={() => setShowMeaning(true)}
              className="mt-4 text-sm text-[#E8564A] hover:underline flex items-center gap-1 mx-auto"
            >
              点击查看释义
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M7 7h10v10" />
              </svg>
            </button>
          ) : (
            <div className="mt-4 space-y-3 animate-fade-in-up">
              <div className="text-lg font-medium text-[#2D2A26]">
                {getItemMeaning(currentItem)}
              </div>
              <div className="bg-[#FFFDF9] rounded-2xl p-4 text-sm text-[#8C8680]">
                <p className="text-[#2D2A26] mb-1">{currentItem.example}</p>
                <p>{currentItem.exampleCn}</p>
              </div>
              {/* 例句朗读 */}
              <button
                onClick={() => handleSpeak(currentItem.example)}
                className="inline-flex items-center gap-1.5 text-xs text-[#E8564A] hover:underline mt-1"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
                朗读例句
              </button>
            </div>
          )}
        </Card>

        {/* 下一步按钮 */}
        <div className="mt-6">
          <Button
            onClick={goToTest}
            disabled={!showMeaning}
            className="w-full bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full py-3 font-medium shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            size="lg"
          >
            开始测试
          </Button>
        </div>
      </div>
    );
  }

  // ===== 渲染: 选择题测试 =====
  if (phase === 'test-select' && currentItem) {
    return (
      <div className="flex flex-col px-4 py-6 max-w-lg mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <button onClick={onBack} className="text-[#8C8680] hover:text-[#2D2A26] transition-colors text-sm">
              ✕ 退出
            </button>
            <span className="text-sm text-[#8C8680]">{currentIndex + 1} / {todayItems.length}</span>
          </div>
          <Progress value={progress} className="h-2 bg-[#F0EBE5]" />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-lg font-medium text-[#2D2A26] mb-2">选择正确的释义</h2>
          <div className="flex items-center justify-center gap-2">
            <p className="text-3xl font-serif text-[#2D2A26]">{getItemLabel(currentItem)}</p>
            <button
              onClick={() => handleSpeak(getItemLabel(currentItem))}
              className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF0EE] hover:bg-[#FFE0DD] transition-all ${isSpeaking ? 'animate-pulse-soft' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8564A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            </button>
          </div>
          {isWord(currentItem) && (
            <p className="text-sm text-[#8C8680] font-mono mt-1">{currentItem.phonetic}</p>
          )}
        </div>

        <div className="space-y-3">
          {testOptions.map((option) => {
            let btnClass = 'w-full text-left p-4 rounded-2xl border-2 transition-all font-medium ';
            if (selectedOption === option.id && isCorrect === true) {
              btnClass += 'border-[#4CAF7D] bg-[#F0FFF6] text-[#4CAF7D]';
            } else if (selectedOption === option.id && isCorrect === false) {
              btnClass += 'border-[#E8564A] bg-[#FFF0EE] text-[#E8564A]';
            } else if (isCorrect !== null && option.id === currentItem.id) {
              btnClass += 'border-[#4CAF7D] bg-[#F0FFF6] text-[#4CAF7D]';
            } else {
              btnClass += 'border-[#F0EBE5] bg-white text-[#2D2A26] hover:border-[#E8564A] hover:bg-[#FFF8F7]';
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
                {isPhrase(option) && (
                  <span className="text-[#8C8680] text-sm mr-2">短语</span>
                )}
                {option.meaning}
              </button>
            );
          })}
        </div>

        {isCorrect !== null && (
          <div className="mt-6 animate-fade-in-up">
            <div className={`text-center mb-4 text-sm font-medium ${isCorrect ? 'text-[#4CAF7D]' : 'text-[#E8564A]'}`}>
              {isCorrect ? '回答正确！' : `正确答案是: ${getItemMeaning(currentItem)}`}
            </div>
            {/* 显示例句作为补充 */}
            {!isCorrect && (
              <div className="bg-[#FFFDF9] rounded-2xl p-3 text-sm text-[#8C8680] mb-4">
                <p className="text-[#2D2A26]">{currentItem.example}</p>
                <p>{currentItem.exampleCn}</p>
              </div>
            )}
            <Button
              onClick={goNext}
              className="w-full bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full py-3 font-medium shadow-md"
            >
              {currentIndex < todayItems.length - 1 ? '下一个' : '完成今日学习'}
            </Button>
          </div>
        )}
      </div>
    );
  }

  // ===== 渲染: 拼写测试（仅单词） =====
  if (phase === 'test-spell' && currentItem && isWord(currentItem)) {
    return (
      <div className="flex flex-col px-4 py-6 max-w-lg mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <button onClick={onBack} className="text-[#8C8680] hover:text-[#2D2A26] transition-colors text-sm">
              ✕ 退出
            </button>
            <span className="text-sm text-[#8C8680]">{currentIndex + 1} / {todayItems.length}</span>
          </div>
          <Progress value={progress} className="h-2 bg-[#F0EBE5]" />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-lg font-medium text-[#2D2A26] mb-2">拼写单词</h2>
          <p className="text-xl text-[#2D2A26] mb-1">
            <span className="text-[#8C8680] text-sm mr-2">{currentItem.partOfSpeech}</span>
            {currentItem.meaning}
          </p>
          <p className="text-sm text-[#8C8680] font-mono mt-2">{currentItem.phonetic}</p>
          <button
            onClick={() => handleSpeak(currentItem.word)}
            className="inline-flex items-center gap-1.5 text-xs text-[#E8564A] hover:underline mt-2"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
            听一听发音
          </button>
          {spellSubmitted && !isCorrect && (
            <p className="text-base text-[#E8564A] mt-2 font-serif">
              正确拼写: {currentItem.word}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <Input
            value={spellInput}
            onChange={(e) => setSpellInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && spellInput.trim()) handleSpellSubmit();
            }}
            disabled={spellSubmitted}
            placeholder="请输入英文单词..."
            className="text-center text-xl font-serif rounded-2xl border-2 border-[#F0EBE5] focus:border-[#E8564A] h-14 px-4"
          />

          {!spellSubmitted ? (
            <Button
              onClick={handleSpellSubmit}
              disabled={!spellInput.trim()}
              className="w-full bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full py-3 font-medium shadow-md disabled:opacity-40"
            >
              提交答案
            </Button>
          ) : (
            <div className="animate-fade-in-up">
              <div className={`text-center mb-4 text-sm font-medium ${isCorrect ? 'text-[#4CAF7D]' : 'text-[#E8564A]'}`}>
                {isCorrect ? '拼写正确！' : '再接再厉！'}
              </div>
              <Button
                onClick={goNext}
                className="w-full bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full py-3 font-medium shadow-md"
              >
                {currentIndex < todayItems.length - 1 ? '下一个' : '完成今日学习'}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ===== 渲染: 结果 =====
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <p className="text-[#8C8680]">加载中...</p>
    </div>
  );
}
