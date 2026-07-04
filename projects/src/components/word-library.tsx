'use client';

import { useState } from 'react';
import { WORDS, PHRASES, type Word, type Phrase } from '@/lib/words';
import { useLearning } from './learning-provider';
import { SpeakerIcon, StarIcon } from './icons';

type TabType = 'words' | 'phrases';
type FilterType = 'all' | 'learned' | 'unlearned' | 'favorited';

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

export function WordLibrary() {
  const [activeTab, setActiveTab] = useState<TabType>('words');
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const { state } = useLearning();
  const learnedWords = Object.keys(state.wordRecords);
  const favorites = learnedWords.filter(id => state.wordRecords[id]?.isFavorite);

  const filteredWords = WORDS.filter((word) => {
    if (searchQuery && !word.word.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !word.meaning.includes(searchQuery)) return false;
    if (selectedLevel && word.difficulty !== selectedLevel) return false;
    if (filter === 'learned' && !learnedWords.includes(word.id)) return false;
    if (filter === 'unlearned' && learnedWords.includes(word.id)) return false;
    if (filter === 'favorited' && !favorites.includes(word.id)) return false;
    return true;
  });

  const filteredPhrases = PHRASES.filter((phrase) => {
    if (searchQuery && !phrase.phrase.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !phrase.meaning.includes(searchQuery)) return false;
    if (selectedLevel && phrase.difficulty !== selectedLevel) return false;
    if (filter === 'learned' && !learnedWords.includes(phrase.id)) return false;
    if (filter === 'unlearned' && learnedWords.includes(phrase.id)) return false;
    if (filter === 'favorited' && !favorites.includes(phrase.id)) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-text-primary">单词库</h2>
        <p className="text-sm text-text-secondary mt-1">
          共 {WORDS.length} 个单词 + {PHRASES.length} 条短语
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('words')}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'words'
              ? 'bg-primary text-white'
              : 'bg-bg-card text-text-secondary'
          }`}
        >
          单词 ({WORDS.length})
        </button>
        <button
          onClick={() => setActiveTab('phrases')}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'phrases'
              ? 'bg-primary text-white'
              : 'bg-bg-card text-text-secondary'
          }`}
        >
          短语 ({PHRASES.length})
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="搜索单词或中文..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-card text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {(['all', 'learned', 'unlearned', 'favorited'] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              filter === f
                ? 'bg-accent-warm text-white'
                : 'bg-bg-card text-text-secondary border border-border'
            }`}
          >
            {f === 'all' ? '全部' : f === 'learned' ? '已学' : f === 'unlearned' ? '未学' : '收藏'}
          </button>
        ))}
      </div>

      {/* Level Filter */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        <button
          onClick={() => setSelectedLevel(null)}
          className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap ${
            !selectedLevel ? 'bg-success text-white' : 'bg-bg-card text-text-secondary'
          }`}
        >
          全部难度
        </button>
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
            className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap ${
              selectedLevel === level ? 'bg-success text-white' : 'bg-bg-card text-text-secondary'
            }`}
          >
            Lv.{level}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'words' ? (
        <WordList words={filteredWords} learnedWords={learnedWords} favorites={favorites} />
      ) : (
        <PhraseList phrases={filteredPhrases} learnedWords={learnedWords} favorites={favorites} />
      )}
    </div>
  );
}

function WordList({ words, learnedWords, favorites }: { words: Word[]; learnedWords: string[]; favorites: string[] }) {
  if (words.length === 0) {
    return <div className="text-center py-12 text-text-secondary">没有找到匹配的单词</div>;
  }

  return (
    <div className="space-y-2">
      {words.map((word) => (
        <WordCard key={word.id} word={word} isLearned={learnedWords.includes(word.id)} isFavorite={favorites.includes(word.id)} />
      ))}
    </div>
  );
}

function WordCard({ word, isLearned, isFavorite }: { word: Word; isLearned: boolean; isFavorite: boolean }) {
  return (
    <div className="bg-bg-card rounded-xl p-3 border border-border">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg font-serif font-bold text-text-primary">{word.word}</span>
            <span className="text-xs text-text-secondary">{word.phonetic}</span>
            {isLearned && <span className="text-xs px-1.5 py-0.5 bg-success/10 text-success rounded">已学</span>}
            {isFavorite && <StarIcon size={14} className="text-accent-warm fill-accent-warm" />}
          </div>
          <div className="text-sm text-text-secondary mt-0.5">
            <span className="text-primary/70 italic">{word.partOfSpeech}</span> {word.meaning}
          </div>
          <div className="text-xs text-text-secondary mt-1 italic">{word.example}</div>
        </div>
        <button
          onClick={() => speak(word.word)}
          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors shrink-0"
          title="发音"
        >
          <SpeakerIcon size={16} />
        </button>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <span className="text-[10px] px-1.5 py-0.5 bg-bg-body rounded text-text-secondary">Lv.{word.difficulty}</span>
      </div>
    </div>
  );
}

function PhraseList({ phrases, learnedWords, favorites }: { phrases: Phrase[]; learnedWords: string[]; favorites: string[] }) {
  if (phrases.length === 0) {
    return <div className="text-center py-12 text-text-secondary">没有找到匹配的短语</div>;
  }

  return (
    <div className="space-y-2">
      {phrases.map((phrase) => (
        <PhraseCard key={phrase.id} phrase={phrase} isLearned={learnedWords.includes(phrase.id)} isFavorite={favorites.includes(phrase.id)} />
      ))}
    </div>
  );
}

function PhraseCard({ phrase, isLearned, isFavorite }: { phrase: Phrase; isLearned: boolean; isFavorite: boolean }) {
  return (
    <div className="bg-bg-card rounded-xl p-3 border border-border">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base font-bold text-text-primary">{phrase.phrase}</span>
            {isLearned && <span className="text-xs px-1.5 py-0.5 bg-success/10 text-success rounded">已学</span>}
            {isFavorite && <StarIcon size={14} className="text-accent-warm fill-accent-warm" />}
          </div>
          <div className="text-sm text-text-secondary mt-0.5">{phrase.meaning}</div>
          <div className="text-xs text-text-secondary mt-1">
            <span className="italic">"{phrase.example}"</span>
            <span className="block mt-0.5 text-text-secondary/70">{phrase.exampleCn}</span>
          </div>
        </div>
        <button
          onClick={() => speak(phrase.phrase)}
          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors shrink-0"
          title="发音"
        >
          <SpeakerIcon size={16} />
        </button>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <span className="text-[10px] px-1.5 py-0.5 bg-bg-body rounded text-text-secondary">Lv.{phrase.difficulty}</span>
      </div>
    </div>
  );
}
