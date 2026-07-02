// 学习数据持久化与状态管理
import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'vocab-learner-data';

export interface DayRecord {
  date: string; // YYYY-MM-DD
  wordIds: string[];
  completed: boolean;
  earnedFlower: boolean;
}

export interface WordRecord {
  wordId: string;
  learned: boolean;
  mastered: boolean;
  correctCount: number;
  wrongCount: number;
  lastReviewed: string | null;
  isFavorite: boolean;
}

export interface LearningState {
  currentDayIndex: number;
  dayRecords: DayRecord[];
  wordRecords: Record<string, WordRecord>;
  totalFlowers: number;
  streakDays: number;
  lastStudyDate: string | null;
  openedMilestones: number[]; // 已开过盲盒的里程碑阈值
}

const initialState: LearningState = {
  currentDayIndex: 0,
  dayRecords: [],
  wordRecords: {},
  totalFlowers: 0,
  streakDays: 0,
  lastStudyDate: null,
  openedMilestones: [],
};

function loadState(): LearningState {
  if (typeof window === 'undefined') return initialState;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return { ...initialState, ...JSON.parse(data) };
    }
  } catch {
    // ignore parse errors
  }
  return initialState;
}

function saveState(state: LearningState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
}

function getTodayStr(): string {
  return new Date().toISOString().split('T')[0];
}

export function useLearningStore() {
  const [state, setState] = useState<LearningState>(initialState);

  useEffect(() => {
    setState(loadState());
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      saveState(state);
    }
  }, [state]);

  const getTodayRecord = useCallback((): DayRecord | undefined => {
    const today = getTodayStr();
    return state.dayRecords.find(r => r.date === today);
  }, [state.dayRecords]);

  const getTodayWordIds = useCallback((): string[] => {
    const today = getTodayStr();
    const todayRecord = state.dayRecords.find(r => r.date === today);
    if (todayRecord) return todayRecord.wordIds;
    // 如果今天没有记录，返回空（需要在开始学习时初始化）
    return [];
  }, [state.dayRecords]);

  const startTodayLearning = useCallback((wordIds: string[]): void => {
    const today = getTodayStr();
    setState(prev => {
      const existing = prev.dayRecords.find(r => r.date === today);
      if (existing) return prev; // 已存在则不重复创建

      const newRecord: DayRecord = {
        date: today,
        wordIds,
        completed: false,
        earnedFlower: false,
      };

      // 计算连续打卡
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      const hasYesterdayRecord = prev.dayRecords.some(r => r.date === yesterdayStr && r.completed);

      let newStreak = 1;
      if (prev.lastStudyDate) {
        const lastDate = prev.lastStudyDate;
        if (lastDate === yesterdayStr || lastDate === today) {
          newStreak = prev.streakDays + (lastDate === today ? 0 : 1);
        }
      } else if (hasYesterdayRecord) {
        newStreak = prev.streakDays + 1;
      }

      return {
        ...prev,
        dayRecords: [...prev.dayRecords, newRecord],
        lastStudyDate: today,
        streakDays: newStreak,
      };
    });
  }, []);

  const markWordLearned = useCallback((wordId: string): void => {
    setState(prev => {
      const existing = prev.wordRecords[wordId];
      const updated: WordRecord = existing
        ? { ...existing, learned: true, lastReviewed: getTodayStr() }
        : { wordId, learned: true, mastered: false, correctCount: 0, wrongCount: 0, lastReviewed: getTodayStr(), isFavorite: false };

      return {
        ...prev,
        wordRecords: { ...prev.wordRecords, [wordId]: updated },
      };
    });
  }, []);

  const markWordCorrect = useCallback((wordId: string): void => {
    setState(prev => {
      const existing = prev.wordRecords[wordId] || {
        wordId, learned: true, mastered: false, correctCount: 0, wrongCount: 0, lastReviewed: null, isFavorite: false,
      };
      const newCorrectCount = existing.correctCount + 1;
      const updated: WordRecord = {
        ...existing,
        correctCount: newCorrectCount,
        mastered: newCorrectCount >= 2,
        lastReviewed: getTodayStr(),
      };

      return {
        ...prev,
        wordRecords: { ...prev.wordRecords, [wordId]: updated },
      };
    });
  }, []);

  const markWordWrong = useCallback((wordId: string): void => {
    setState(prev => {
      const existing = prev.wordRecords[wordId] || {
        wordId, learned: true, mastered: false, correctCount: 0, wrongCount: 0, lastReviewed: null, isFavorite: false,
      };
      const updated: WordRecord = {
        ...existing,
        wrongCount: existing.wrongCount + 1,
        mastered: false,
        lastReviewed: getTodayStr(),
      };

      return {
        ...prev,
        wordRecords: { ...prev.wordRecords, [wordId]: updated },
      };
    });
  }, []);

  const completeTodayLearning = useCallback((): void => {
    const today = getTodayStr();
    setState(prev => {
      const dayRecords = prev.dayRecords.map(r =>
        r.date === today ? { ...r, completed: true, earnedFlower: true } : r
      );

      return {
        ...prev,
        dayRecords,
        totalFlowers: prev.totalFlowers + 1,
      };
    });
  }, []);

  const toggleFavorite = useCallback((wordId: string): void => {
    setState(prev => {
      const existing = prev.wordRecords[wordId] || {
        wordId, learned: false, mastered: false, correctCount: 0, wrongCount: 0, lastReviewed: null, isFavorite: false,
      };
      const updated: WordRecord = { ...existing, isFavorite: !existing.isFavorite };

      return {
        ...prev,
        wordRecords: { ...prev.wordRecords, [wordId]: updated },
      };
    });
  }, []);

  const getWrongWords = useCallback((): WordRecord[] => {
    return Object.values(state.wordRecords).filter(r => r.wrongCount > 0);
  }, [state.wordRecords]);

  const getFavoriteWords = useCallback((): WordRecord[] => {
    return Object.values(state.wordRecords).filter(r => r.isFavorite);
  }, [state.wordRecords]);

  const getMasteredCount = useCallback((): number => {
    return Object.values(state.wordRecords).filter(r => r.mastered).length;
  }, [state.wordRecords]);

  const getTotalLearnedCount = useCallback((): number => {
    return Object.values(state.wordRecords).filter(r => r.learned).length;
  }, [state.wordRecords]);

  const isWordFavorite = useCallback((wordId: string): boolean => {
    return state.wordRecords[wordId]?.isFavorite ?? false;
  }, [state.wordRecords]);

  const getWordRecord = useCallback((wordId: string): WordRecord | undefined => {
    return state.wordRecords[wordId];
  }, [state.wordRecords]);

  const isTodayCompleted = useCallback((): boolean => {
    const today = getTodayStr();
    return state.dayRecords.some(r => r.date === today && r.completed);
  }, [state.dayRecords]);

  const markMilestoneOpened = useCallback((threshold: number): void => {
    setState(prev => {
      if (prev.openedMilestones.includes(threshold)) return prev;
      const next = { ...prev, openedMilestones: [...prev.openedMilestones, threshold] };
      saveState(next);
      return next;
    });
  }, []);

  const resetAll = useCallback((): void => {
    setState(initialState);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    state,
    getTodayRecord,
    getTodayWordIds,
    startTodayLearning,
    markWordLearned,
    markWordCorrect,
    markWordWrong,
    completeTodayLearning,
    toggleFavorite,
    getWrongWords,
    getFavoriteWords,
    getMasteredCount,
    getTotalLearnedCount,
    isWordFavorite,
    getWordRecord,
    isTodayCompleted,
    markMilestoneOpened,
    resetAll,
  };
}
