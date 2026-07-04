'use client';

import React, { useState, useEffect } from 'react';
import { LearningProvider, useLearning } from '@/components/learning-provider';
import { DailyLesson } from '@/components/daily-lesson';
import { ReviewPanel } from '@/components/review-panel';
import { StatsPanel } from '@/components/stats-panel';
import { FlowerWall } from '@/components/flower-wall';
import { BlindBoxPanel } from '@/components/blindbox-panel';
import { WordLibrary } from '@/components/word-library';
import { DialogueLearning } from '@/components/dialogue-learning';
import { FlowerIcon, BookIcon, HeartIcon, FireIcon, LibraryIcon, ChatIcon } from '@/components/icons';
import { Progress } from '@/components/ui/progress';

type TabType = 'home' | 'learn' | 'review' | 'stats' | 'rewards' | 'library' | 'dialogue';

function MainApp() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [mounted, setMounted] = useState(false);
  const { state, isTodayCompleted, getTodayWordIds } = useLearning();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FFFDF9] flex items-center justify-center">
        <div className="animate-pulse-soft">
          <FlowerIcon size={40} />
        </div>
      </div>
    );
  }

  const todayCompleted = isTodayCompleted();
  const todayWordIds = getTodayWordIds();
  const todayStarted = todayWordIds.length > 0;

  // 首页
  if (activeTab === 'home') {
    return (
      <div className="min-h-screen bg-[#FFFDF9] pb-24">
        {/* 头部 */}
        <div className="bg-gradient-to-b from-[#FFF0EE] to-[#FFFDF9] pt-12 pb-8 px-6">
          <div className="max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-[#2D2A26]">单词花园</h1>
                <p className="text-sm text-[#8C8680] mt-1">每天5个词，单词+短语，让花开满园</p>
              </div>
              <FlowerIcon size={44} />
            </div>

            {/* 今日状态卡 */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F0EBE5]">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-medium text-[#2D2A26]">今日任务</h2>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  todayCompleted
                    ? 'bg-[#F0FFF6] text-[#4CAF7D]'
                    : todayStarted
                    ? 'bg-[#FFF8E1] text-[#7A6340]'
                    : 'bg-[#FFF0EE] text-[#E8564A]'
                }`}>
                  {todayCompleted ? '已完成 ✓' : todayStarted ? '进行中' : '待开始'}
                </span>
              </div>

              {todayCompleted ? (
                <div className="text-center py-3">
                  <div className="flex justify-center mb-2">
                    <FlowerIcon size={40} blooming />
                  </div>
                  <p className="text-[#2D2A26] font-medium">今日学习已完成</p>
                  <p className="text-sm text-[#8C8680] mt-1">明天继续加油！</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1">
                      <Progress
                        value={0}
                        className="h-2 bg-[#F5F0EB]"
                      />
                    </div>
                    <span className="text-sm text-[#8C8680]">0/5</span>
                  </div>
                  <button
                    onClick={() => setActiveTab('learn')}
                    className="w-full bg-[#E8564A] hover:bg-[#D04A3E] text-white rounded-full py-3 font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    {todayStarted ? '继续学习' : '开始今日学习'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 数据概览 */}
        <div className="max-w-lg mx-auto px-6 mt-6 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setActiveTab('stats')}
              className="bg-white rounded-2xl p-4 border border-[#F0EBE5] text-center hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-center mb-2">
                <BookIcon size={22} className="text-[#E8564A]" />
              </div>
              <div className="text-xl font-bold text-[#2D2A26]">
                {Object.values(state.wordRecords).filter(r => r.learned).length}
              </div>
              <div className="text-xs text-[#8C8680] mt-1">已学词汇</div>
            </button>

            <button
              onClick={() => setActiveTab('rewards')}
              className="bg-white rounded-2xl p-4 border border-[#F0EBE5] text-center hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-center mb-2">
                <FlowerIcon size={22} />
              </div>
              <div className="text-xl font-bold text-[#E8564A]">{state.totalFlowers}</div>
              <div className="text-xs text-[#8C8680] mt-1">小红花</div>
            </button>

            <button
              onClick={() => setActiveTab('stats')}
              className="bg-white rounded-2xl p-4 border border-[#F0EBE5] text-center hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-center mb-2">
                <FireIcon size={22} />
              </div>
              <div className="text-xl font-bold text-[#F5A623]">{state.streakDays}</div>
              <div className="text-xs text-[#8C8680] mt-1">连续天数</div>
            </button>
          </div>

          {/* 快捷入口 */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setActiveTab('review')}
              className="bg-[#FFF8E1] rounded-2xl p-4 text-left hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <HeartIcon size={18} className="text-[#F5A623]" />
                <span className="font-medium text-[#7A6340]">错题</span>
              </div>
              <p className="text-sm text-[#7A6340]/70">
                {Object.values(state.wordRecords).filter(r => r.wrongCount > 0).length} 个待复习
              </p>
            </button>

            <button
              onClick={() => setActiveTab('rewards')}
              className="bg-[#FFF0EE] rounded-2xl p-4 text-left hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <FlowerIcon size={18} />
                <span className="font-medium text-[#E8564A]">花墙</span>
              </div>
              <p className="text-sm text-[#E8564A]/70">
                查看花园
              </p>
            </button>

            <button
              onClick={() => setActiveTab('library')}
              className="bg-[#E8F5E9] rounded-2xl p-4 text-left hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <LibraryIcon size={18} className="text-[#4CAF7D]" />
                <span className="font-medium text-[#2E7D32]">词库</span>
              </div>
              <p className="text-sm text-[#2E7D32]/70">
                浏览单词
              </p>
            </button>

            <button
              onClick={() => setActiveTab('dialogue')}
              className="bg-[#E3F2FD] rounded-2xl p-4 text-left hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <ChatIcon size={18} className="text-[#1976D2]" />
                <span className="font-medium text-[#1565C0]">对话</span>
              </div>
              <p className="text-sm text-[#1565C0]/70">
                情景学习
              </p>
            </button>

            <button
              onClick={() => setActiveTab('rewards')}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 text-left hover:shadow-sm transition-shadow border border-amber-100 col-span-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📦</span>
                <span className="font-medium text-[#B8860B]">奖励盲盒</span>
              </div>
              <p className="text-sm text-[#B8860B]/70">
                集齐小红花开奖品
              </p>
            </button>
          </div>

          {/* 学习提示 */}
          <div className="bg-white rounded-2xl p-4 border border-[#F0EBE5]">
            <p className="text-sm text-[#8C8680] text-center italic">
              {state.dayRecords.length === 0
                ? '种下第一颗种子，开始你的单词花园之旅'
                : state.streakDays < 3
                ? '坚持3天，你就会发现变化'
                : state.streakDays < 7
                ? '连续学习一周，习惯正在养成'
                : '你的花园越来越美了，继续保持！'}
            </p>
          </div>
        </div>

        {/* 底部导航 */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  // 学习页
  if (activeTab === 'learn') {
    return (
      <div className="min-h-screen bg-[#FFFDF9] pb-24">
        <DailyLesson onBack={() => setActiveTab('home')} />
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  // 复习页
  if (activeTab === 'review') {
    return (
      <div className="min-h-screen bg-[#FFFDF9] pb-24">
        <div className="pt-8 pb-4 px-6">
          <h1 className="text-xl font-bold text-[#2D2A26]">复习巩固</h1>
          <p className="text-sm text-[#8C8680] mt-1">错题和收藏的词汇在这里</p>
        </div>
        <ReviewPanel />
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  // 统计页
  if (activeTab === 'stats') {
    return (
      <div className="min-h-screen bg-[#FFFDF9] pb-24">
        <div className="pt-8 pb-4 px-6">
          <h1 className="text-xl font-bold text-[#2D2A26]">学习统计</h1>
          <p className="text-sm text-[#8C8680] mt-1">你的学习足迹</p>
        </div>
        <StatsPanel />
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  // 单词库页
  if (activeTab === 'library') {
    return (
      <div className="min-h-screen bg-[#FFFDF9] pb-24">
        <div className="pt-8 pb-4 px-6">
          <h1 className="text-xl font-bold text-[#2D2A26]">单词库</h1>
          <p className="text-sm text-[#8C8680] mt-1">浏览所有单词和短语</p>
        </div>
        <div className="px-6">
          <WordLibrary />
        </div>
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  // 情景对话页
  if (activeTab === 'dialogue') {
    return (
      <div className="min-h-screen bg-[#FFFDF9] pb-24">
        <div className="pt-8 pb-4 px-6">
          <h1 className="text-xl font-bold text-[#2D2A26]">情景对话</h1>
          <p className="text-sm text-[#8C8680] mt-1">在真实场景中学习</p>
        </div>
        <div className="px-6">
          <DialogueLearning />
        </div>
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  // 奖励页
  return (
    <div className="min-h-screen bg-[#FFFDF9] pb-24">
      <div className="pt-8 pb-4 px-6">
        <h1 className="text-xl font-bold text-[#2D2A26]">小红花园</h1>
        <p className="text-sm text-[#8C8680] mt-1">每完成一天学习，收获一朵花</p>
      </div>
      <div className="px-6 space-y-6">
        <BlindBoxPanel />
        <FlowerWall />
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

function BottomNav({ activeTab, onTabChange }: { activeTab: TabType; onTabChange: (tab: TabType) => void }) {
  const tabs: { key: TabType; label: string; icon: React.ReactNode; activeIcon: React.ReactNode }[] = [
    {
      key: 'home',
      label: '首页',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      activeIcon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#E8564A" stroke="#E8564A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      key: 'learn',
      label: '学习',
      icon: <BookIcon size={22} className="text-[#8C8680]" />,
      activeIcon: <BookIcon size={22} className="text-[#E8564A]" />,
    },
    {
      key: 'review',
      label: '复习',
      icon: <HeartIcon size={22} />,
      activeIcon: <HeartIcon size={22} filled />,
    },
    {
      key: 'stats',
      label: '统计',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      activeIcon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8564A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      key: 'rewards',
      label: '花园',
      icon: <FlowerIcon size={22} className="opacity-40" />,
      activeIcon: <FlowerIcon size={22} />,
    },
    {
      key: 'library',
      label: '词库',
      icon: <LibraryIcon size={22} className="text-[#8C8680]" />,
      activeIcon: <LibraryIcon size={22} className="text-[#E8564A]" />,
    },
    {
      key: 'dialogue',
      label: '对话',
      icon: <ChatIcon size={22} className="text-[#8C8680]" />,
      activeIcon: <ChatIcon size={22} className="text-[#E8564A]" />,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#F0EBE5] z-40">
      <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-4">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className="flex flex-col items-center gap-0.5 py-1 px-3 transition-all"
          >
            {activeTab === tab.key ? tab.activeIcon : tab.icon}
            <span className={`text-[10px] ${
              activeTab === tab.key ? 'text-[#E8564A] font-medium' : 'text-[#8C8680]'
            }`}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <LearningProvider>
      <MainApp />
    </LearningProvider>
  );
}
