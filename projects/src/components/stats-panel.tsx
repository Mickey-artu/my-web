'use client';

import React from 'react';
import { useLearning } from '@/components/learning-provider';
import { getAllItems, getTotalWordCount, getTotalPhraseCount, getTotalItemCount, getDifficultyStats } from '@/lib/words';
import { FlowerIcon, FireIcon, BookIcon, LeafIcon, StarIcon } from '@/components/icons';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function StatsPanel() {
  const { state, getMasteredCount, getTotalLearnedCount } = useLearning();

  const totalWords = getTotalWordCount();
  const totalPhrases = getTotalPhraseCount();
  const totalItems = getTotalItemCount();
  const learnedCount = getTotalLearnedCount();
  const masteredCount = getMasteredCount();
  const diffStats = getDifficultyStats();

  const learnedPercentage = totalItems > 0 ? (learnedCount / totalItems) * 100 : 0;
  const masteredPercentage = totalItems > 0 ? (masteredCount / totalItems) * 100 : 0;

  return (
    <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
      {/* 核心数据 */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-4 rounded-2xl border-[#F0EBE5] text-center">
          <div className="flex justify-center mb-2">
            <BookIcon size={24} className="text-[#E8564A]" />
          </div>
          <div className="text-2xl font-bold text-[#2D2A26]">{learnedCount}</div>
          <div className="text-xs text-[#8C8680] mt-1">已学词汇</div>
        </Card>
        <Card className="p-4 rounded-2xl border-[#F0EBE5] text-center">
          <div className="flex justify-center mb-2">
            <FireIcon size={24} />
          </div>
          <div className="text-2xl font-bold text-[#F5A623]">{state.streakDays}</div>
          <div className="text-xs text-[#8C8680] mt-1">连续天数</div>
        </Card>
        <Card className="p-4 rounded-2xl border-[#F0EBE5] text-center">
          <div className="flex justify-center mb-2">
            <FlowerIcon size={24} />
          </div>
          <div className="text-2xl font-bold text-[#E8564A]">{state.totalFlowers}</div>
          <div className="text-xs text-[#8C8680] mt-1">小红花</div>
        </Card>
      </div>

      {/* 词库概览 */}
      <Card className="p-5 rounded-2xl border-[#F0EBE5]">
        <h3 className="font-medium text-[#2D2A26] mb-3">词库概览</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#FFF0EE] rounded-2xl p-3 text-center">
            <div className="text-xl font-bold text-[#E8564A]">{totalWords}</div>
            <div className="text-xs text-[#8C8680] mt-1">单词</div>
          </div>
          <div className="bg-[#FFF8E1] rounded-2xl p-3 text-center">
            <div className="text-xl font-bold text-[#F5A623]">{totalPhrases}</div>
            <div className="text-xs text-[#8C8680] mt-1">短语</div>
          </div>
        </div>
      </Card>

      {/* 总体进度 */}
      <Card className="p-5 rounded-2xl border-[#F0EBE5]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-[#2D2A26]">学习进度</h3>
          <span className="text-sm text-[#8C8680]">{learnedCount} / {totalItems}</span>
        </div>
        <Progress value={learnedPercentage} className="h-3 bg-[#F0EBE5] mb-2" />
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#8C8680]">已学习</span>
          <span className="text-xs font-medium text-[#E8564A]">{learnedPercentage.toFixed(1)}%</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-[#8C8680]">已掌握</span>
          <span className="text-xs font-medium text-[#4CAF7D]">{masteredPercentage.toFixed(1)}%</span>
        </div>
        <Progress value={masteredPercentage} className="h-2 bg-[#F0EBE5] mt-1" />
      </Card>

      {/* 各难度等级进度 */}
      <Card className="p-5 rounded-2xl border-[#F0EBE5]">
        <h3 className="font-medium text-[#2D2A26] mb-4">难度等级</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map(level => {
            const total = diffStats[level] || 0;
            const allItems = getAllItems();
            const learned = Object.values(state.wordRecords).filter(
              r => allItems.find(w => w.id === r.wordId)?.difficulty === level && r.learned
            ).length;
            const percentage = total > 0 ? (learned / total) * 100 : 0;
            const labels = ['', '入门', '基础', '进阶', '提高', '挑战'];
            const colors = ['', '#4CAF7D', '#F5A623', '#E8564A', '#9C6ADE', '#E991B0'];

            return (
              <div key={level}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colors[level] }}
                    />
                    <span className="text-sm text-[#2D2A26]">{labels[level]}</span>
                  </div>
                  <span className="text-xs text-[#8C8680]">{learned}/{total}</span>
                </div>
                <div className="h-2 bg-[#F5F0EB] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%`, backgroundColor: colors[level] }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* 学习天数统计 */}
      <Card className="p-5 rounded-2xl border-[#F0EBE5]">
        <h3 className="font-medium text-[#2D2A26] mb-4">学习记录</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#FFF0EE] rounded-2xl p-3 text-center">
            <div className="text-xl font-bold text-[#E8564A]">{state.dayRecords.length}</div>
            <div className="text-xs text-[#8C8680] mt-1">累计学习天数</div>
          </div>
          <div className="bg-[#FFF8E1] rounded-2xl p-3 text-center">
            <div className="text-xl font-bold text-[#F5A623]">{masteredCount}</div>
            <div className="text-xs text-[#8C8680] mt-1">已掌握词汇</div>
          </div>
        </div>

        {/* 最近7天打卡 */}
        <div className="mt-4">
          <p className="text-sm text-[#8C8680] mb-2">最近7天</p>
          <div className="flex gap-2 justify-center">
            {Array.from({ length: 7 }).map((_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - (6 - i));
              const dateStr = date.toISOString().split('T')[0];
              const hasRecord = state.dayRecords.some(r => r.date === dateStr && r.completed);
              const dayNames = ['日', '一', '二', '三', '四', '五', '六'];

              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                      hasRecord
                        ? 'bg-[#E8564A] text-white shadow-sm'
                        : 'bg-[#F5F0EB] text-[#8C8680]'
                    }`}
                  >
                    {hasRecord ? '✓' : ''}
                  </div>
                  <span className="text-[10px] text-[#8C8680]">{dayNames[date.getDay()]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* 成就里程碑 */}
      <Card className="p-5 rounded-2xl border-[#F0EBE5]">
        <h3 className="font-medium text-[#2D2A26] mb-4">里程碑</h3>
        <div className="space-y-3">
          {[
            { target: 10, label: '初学者', icon: <LeafIcon size={16} /> },
            { target: 50, label: '小有成就', icon: <StarIcon size={16} filled={learnedCount >= 50} /> },
            { target: 100, label: '词汇达人', icon: <FlowerIcon size={16} /> },
            { target: 200, label: '词汇大师', icon: <BookIcon size={16} className="text-[#F5A623]" /> },
          ].map(m => {
            const achieved = learnedCount >= m.target;
            const progress = Math.min((learnedCount / m.target) * 100, 100);

            return (
              <div key={m.target} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  achieved ? 'bg-[#FFF8E1]' : 'bg-[#F5F0EB]'
                }`}>
                  {m.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm ${achieved ? 'text-[#2D2A26] font-medium' : 'text-[#8C8680]'}`}>
                      {m.label}
                    </span>
                    <span className="text-xs text-[#8C8680]">{m.target}词</span>
                  </div>
                  <div className="h-1.5 bg-[#F5F0EB] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: achieved ? '#4CAF7D' : '#E8564A',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
