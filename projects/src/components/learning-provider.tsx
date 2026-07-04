'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useLearningStore } from '@/lib/store';
import type { DayRecord, WordRecord, LearningState } from '@/lib/store';

interface LearningContextType {
  state: LearningState;
  getTodayRecord: () => DayRecord | undefined;
  getTodayWordIds: () => string[];
  startTodayLearning: (wordIds: string[]) => void;
  markWordLearned: (wordId: string) => void;
  markWordCorrect: (wordId: string) => void;
  markWordWrong: (wordId: string) => void;
  completeTodayLearning: () => void;
  toggleFavorite: (wordId: string) => void;
  getWrongWords: () => WordRecord[];
  getFavoriteWords: () => WordRecord[];
  getMasteredCount: () => number;
  getTotalLearnedCount: () => number;
  isWordFavorite: (wordId: string) => boolean;
  getWordRecord: (wordId: string) => WordRecord | undefined;
  isTodayCompleted: () => boolean;
  resetAll: () => void;
}

const LearningContext = createContext<LearningContextType | null>(null);

export function useLearning(): LearningContextType {
  const ctx = useContext(LearningContext);
  if (!ctx) throw new Error('useLearning must be used within LearningProvider');
  return ctx;
}

export function LearningProvider({ children }: { children: ReactNode }) {
  const store = useLearningStore();

  return (
    <LearningContext.Provider value={store}>
      {children}
    </LearningContext.Provider>
  );
}
