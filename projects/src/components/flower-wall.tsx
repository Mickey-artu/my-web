'use client';

import React from 'react';
import { useLearning } from '@/components/learning-provider';
import { FlowerIcon, FlowerIconSmall } from '@/components/icons';
import { Card } from '@/components/ui/card';

export function FlowerWall() {
  const { state } = useLearning();
  const totalFlowers = state.totalFlowers;

  // 成就等级
  const getAchievementLevel = (count: number) => {
    if (count >= 30) return { name: '花园守护者', color: '#9C6ADE', bg: '#F5F0FF' };
    if (count >= 20) return { name: '花艺达人', color: '#E8564A', bg: '#FFF0EE' };
    if (count >= 10) return { name: '小园丁', color: '#4CAF7D', bg: '#F0FFF6' };
    if (count >= 5) return { name: '花苗培育员', color: '#F5A623', bg: '#FFF8E1' };
    if (count >= 1) return { name: '种子播撒者', color: '#8C8680', bg: '#F5F0EB' };
    return { name: '等待绽放', color: '#C8BEB4', bg: '#F5F0EB' };
  };

  const achievement = getAchievementLevel(totalFlowers);

  // 计算花墙显示 - 每行7朵
  const maxDisplay = 35; // 5行7列
  const flowerSlots = Math.max(maxDisplay, totalFlowers);

  // 里程碑数据
  const milestones = [
    { target: 1, label: '第一朵花', emoji: '🌱' },
    { target: 5, label: '花苗培育员', emoji: '🌿' },
    { target: 10, label: '小园丁', emoji: '🌻' },
    { target: 20, label: '花艺达人', emoji: '💐' },
    { target: 30, label: '花园守护者', emoji: '🏰' },
  ];

  const nextMilestone = milestones.find(m => m.target > totalFlowers);

  return (
    <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
      {/* 头部展示 */}
      <Card className="p-6 rounded-3xl border-[#F0EBE5] text-center">
        <div className="flex justify-center mb-4">
          {totalFlowers > 0 ? (
            <FlowerIcon size={56} blooming />
          ) : (
            <div className="w-14 h-14 rounded-full bg-[#F5F0EB] flex items-center justify-center">
              <FlowerIcon size={32} className="opacity-30" />
            </div>
          )}
        </div>
        <h2 className="text-2xl font-bold text-[#2D2A26] mb-1">{totalFlowers}</h2>
        <p className="text-[#8C8680] text-sm mb-3">朵小红花</p>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
          style={{ backgroundColor: achievement.bg, color: achievement.color }}
        >
          {achievement.name}
        </div>

        {/* 到下一个里程碑的进度 */}
        {nextMilestone && (
          <div className="mt-4 pt-4 border-t border-[#F0EBE5]">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-[#8C8680]">
                距离「{nextMilestone.label}」
              </span>
              <span className="font-medium text-[#2D2A26]">
                {nextMilestone.target - totalFlowers} 朵
              </span>
            </div>
            <div className="h-2 bg-[#F5F0EB] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#E8564A] rounded-full transition-all duration-500"
                style={{ width: `${(totalFlowers / nextMilestone.target) * 100}%` }}
              />
            </div>
          </div>
        )}
      </Card>

      {/* 小红花墙 */}
      <Card className="p-5 rounded-3xl border-[#F0EBE5]">
        <h3 className="font-medium text-[#2D2A26] mb-4">小红花墙</h3>
        <div className="grid grid-cols-7 gap-2 justify-items-center">
          {Array.from({ length: Math.min(flowerSlots, maxDisplay) }).map((_, i) => (
            <div
              key={i}
              className={`w-8 h-8 flex items-center justify-center ${
                i < totalFlowers ? 'animate-flower-bloom' : ''
              }`}
              style={{ animationDelay: i < totalFlowers ? `${i * 50}ms` : '0ms' }}
            >
              {i < totalFlowers ? (
                <FlowerIconSmall size={26} />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#F0EBE5]" />
              )}
            </div>
          ))}
        </div>
        {totalFlowers > maxDisplay && (
          <p className="text-center text-sm text-[#8C8680] mt-3">
            还有 {totalFlowers - maxDisplay} 朵在墙外...
          </p>
        )}
      </Card>

      {/* 里程碑时间线 */}
      <Card className="p-5 rounded-3xl border-[#F0EBE5]">
        <h3 className="font-medium text-[#2D2A26] mb-4">成就之路</h3>
        <div className="space-y-4">
          {milestones.map((milestone, i) => {
            const achieved = totalFlowers >= milestone.target;
            const isCurrent = nextMilestone?.target === milestone.target;

            return (
              <div key={milestone.target} className="flex items-start gap-3">
                {/* 时间线 */}
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    achieved ? 'bg-[#E8564A] shadow-sm' : isCurrent ? 'bg-[#FFF8E1] border-2 border-[#F5A623]' : 'bg-[#F5F0EB]'
                  }`}>
                    <span className={achieved ? 'text-white' : ''}>
                      {achieved ? '✓' : milestone.emoji}
                    </span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className={`w-0.5 h-6 ${achieved ? 'bg-[#E8564A]' : 'bg-[#F0EBE5]'}`} />
                  )}
                </div>

                {/* 内容 */}
                <div className="pt-1">
                  <p className={`text-sm ${achieved ? 'text-[#2D2A26] font-medium' : isCurrent ? 'text-[#F5A623]' : 'text-[#8C8680]'}`}>
                    {milestone.label}
                  </p>
                  <p className="text-xs text-[#8C8680]">{milestone.target} 朵小红花</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* 花语激励 */}
      <Card className="p-5 rounded-3xl border-[#F0EBE5] bg-[#FFF8E1]">
        <div className="text-center">
          <p className="text-sm text-[#7A6340] italic">
            {totalFlowers === 0
              ? '每一朵花都始于一颗种子，今天就开始吧！'
              : totalFlowers < 5
              ? '你的花园正在萌芽，继续浇灌吧！'
              : totalFlowers < 10
              ? '花开渐盛，你已走在成长的路上。'
              : totalFlowers < 20
              ? '满园芬芳，坚持就是最好的花匠。'
              : '你的花园已是一片花海，了不起！'}
          </p>
        </div>
      </Card>
    </div>
  );
}
