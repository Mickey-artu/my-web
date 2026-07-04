"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import {
  MILESTONES,
  drawPrize,
  getRarityLabel,
  getRarityColor,
  getNextMilestone,
  getNewlyReachedMilestone,
  type BlindBoxMilestone,
  type BlindBoxPrize,
} from "@/lib/blindbox";
import { useLearningStore } from "@/lib/store";
import { cn } from "@/lib/utils";

// ===== 盲盒卡片组件 =====
function BlindBoxCard({
  milestone,
  isOpened,
  flowerCount,
  onOpen,
}: {
  milestone: BlindBoxMilestone;
  isOpened: boolean;
  flowerCount: number;
  onOpen: (m: BlindBoxMilestone) => void;
}) {
  const isReachable = flowerCount >= milestone.threshold;
  const progress = Math.min((flowerCount / milestone.threshold) * 100, 100);

  return (
    <div className="relative">
      <button
        onClick={() => isReachable && !isOpened && onOpen(milestone)}
        disabled={!isReachable || isOpened}
        className={cn(
          "w-full rounded-2xl border-2 p-4 text-center transition-all",
          isOpened
            ? "border-gray-200 bg-gray-50 opacity-60"
            : isReachable
              ? "border-amber-300 bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer animate-gentle-pulse"
              : "border-gray-100 bg-gray-50 opacity-70"
        )}
      >
        {/* 盲盒图标 */}
        <div
          className={cn(
            "mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-transform",
            isReachable && !isOpened && "scale-110"
          )}
          style={{
            backgroundColor: isOpened ? "#f3f4f6" : `${milestone.boxColor}20`,
          }}
        >
          {isOpened ? "🎁" : "📦"}
        </div>

        {/* 里程碑标签 */}
        <div className="text-sm font-bold" style={{ color: isOpened ? "#9ca3af" : milestone.boxColor }}>
          {milestone.threshold} 朵
        </div>
        <div className="text-xs text-gray-500">{milestone.label}</div>

        {/* 状态 */}
        {isOpened ? (
          <div className="mt-1 text-xs text-gray-400">已开启</div>
        ) : isReachable ? (
          <div className="mt-1 text-xs font-medium text-amber-600">点击开启</div>
        ) : (
          <div className="mt-1">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  backgroundColor: milestone.boxColor,
                }}
              />
            </div>
            <div className="mt-0.5 text-[10px] text-gray-400">
              {flowerCount}/{milestone.threshold}
            </div>
          </div>
        )}
      </button>
    </div>
  );
}

// ===== 开箱弹窗 =====
function BlindBoxModal({
  milestone,
  onClose,
}: {
  milestone: BlindBoxMilestone;
  onClose: () => void;
}) {
  const [phase, setPhase] = useState<"shake" | "open" | "reveal">("shake");
  const [prize, setPrize] = useState<BlindBoxPrize | null>(null);

  useEffect(() => {
    // 摇晃 1.5s 后打开
    const t1 = setTimeout(() => {
      const p = drawPrize(milestone);
      setPrize(p);
      setPhase("open");
    }, 1500);

    // 打开后 0.6s 展示奖品
    const t2 = setTimeout(() => {
      setPhase("reveal");
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [milestone]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">
        {/* 标题 */}
        <div className="mb-2 text-lg font-bold text-gray-800">
          恭喜达成 <span style={{ color: milestone.boxColor }}>{milestone.label}</span>！
        </div>
        <div className="mb-4 text-sm text-gray-500">
          获得 {milestone.threshold} 朵小红花，解锁奖励盲盒
        </div>

        {/* 盲盒动画区域 */}
        <div className="relative mx-auto mb-4 flex h-48 w-48 items-center justify-center">
          {phase === "shake" && (
            <div className="animate-[boxShake_0.3s_ease-in-out_infinite] text-7xl">📦</div>
          )}
          {phase === "open" && (
            <div className="animate-[boxOpen_0.5s_ease-out_forwards] text-7xl">🎁</div>
          )}
          {phase === "reveal" && prize && (
            <div className="animate-[prizeReveal_0.5s_ease-out_forwards] flex flex-col items-center">
              <div className="mb-2 text-6xl">{prize.emoji}</div>
              <div
                className="rounded-full px-3 py-0.5 text-xs font-bold text-white"
                style={{ backgroundColor: getRarityColor(prize.rarity) }}
              >
                {getRarityLabel(prize.rarity)}
              </div>
            </div>
          )}
        </div>

        {/* 奖品信息 */}
        {phase === "reveal" && prize && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="text-xl font-bold text-gray-800">{prize.name}</div>
            <div className="mt-1 text-sm text-gray-500">
              快去领取你的 {prize.name} 吧！
            </div>
          </div>
        )}

        {/* 关闭按钮 */}
        {phase === "reveal" && (
          <button
            onClick={onClose}
            className="mt-4 w-full rounded-full py-2.5 text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: milestone.boxColor }}
          >
            太棒了！
          </button>
        )}
      </div>
    </div>
  );
}

// ===== 盲盒面板（嵌入花墙页面） =====
export function BlindBoxPanel() {
  const { state, markMilestoneOpened } = useLearningStore();
  const [activeMilestone, setActiveMilestone] = useState<BlindBoxMilestone | null>(null);
  const [autoOpenMilestone, setAutoOpenMilestone] = useState<BlindBoxMilestone | null>(null);
  const prevFlowerCount = useMemo(() => state.totalFlowers, [state.totalFlowers]);

  // 检查是否有新解锁的里程碑
  useEffect(() => {
    const newlyReached = getNewlyReachedMilestone(
      prevFlowerCount - 1, // 上一轮
      state.totalFlowers,
      state.openedMilestones
    );
    if (newlyReached) {
      setAutoOpenMilestone(newlyReached);
    }
  }, [state.totalFlowers, state.openedMilestones, prevFlowerCount]);

  const handleOpen = useCallback((m: BlindBoxMilestone) => {
    setActiveMilestone(m);
  }, []);

  const handleClose = useCallback(() => {
    if (activeMilestone) {
      markMilestoneOpened(activeMilestone.threshold);
    }
    setActiveMilestone(null);
    setAutoOpenMilestone(null);
  }, [activeMilestone, markMilestoneOpened]);

  const nextMilestone = getNextMilestone(state.totalFlowers);

  return (
    <>
      <div className="space-y-4">
        {/* 标题 */}
        <div>
          <h2 className="text-lg font-bold text-gray-800">奖励盲盒</h2>
          <p className="text-sm text-gray-500">
            集齐小红花，解锁惊喜奖品
          </p>
        </div>

        {/* 当前进度提示 */}
        {nextMilestone && (
          <div
            className="rounded-xl p-3"
            style={{ backgroundColor: `${nextMilestone.boxColor}10` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                距离下一个盲盒还需{" "}
                <strong style={{ color: nextMilestone.boxColor }}>
                  {nextMilestone.threshold - state.totalFlowers}
                </strong>{" "}
                朵
              </span>
              <span className="text-lg">{nextMilestone.threshold === 50 ? "📦" : "🎁"}</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min((state.totalFlowers / nextMilestone.threshold) * 100, 100)}%`,
                  backgroundColor: nextMilestone.boxColor,
                }}
              />
            </div>
          </div>
        )}

        {/* 里程碑卡片网格 */}
        <div className="grid grid-cols-2 gap-3">
          {MILESTONES.map((m) => (
            <BlindBoxCard
              key={m.threshold}
              milestone={m}
              isOpened={state.openedMilestones.includes(m.threshold)}
              flowerCount={state.totalFlowers}
              onOpen={handleOpen}
            />
          ))}
        </div>

        {/* 奖品说明 */}
        <div className="rounded-xl bg-gray-50 p-3">
          <div className="mb-2 text-xs font-bold text-gray-600">奖品池包含</div>
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <span>🍟 零食</span>
            <span>🧋 奶茶</span>
            <span>🍎 水果</span>
            <span>🍰 甜点</span>
          </div>
          <div className="mt-2 flex gap-3 text-xs text-gray-400">
            <span>
              <span className="inline-block h-2 w-2 rounded-full bg-gray-400" /> 普通
            </span>
            <span>
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> 稀有
            </span>
            <span>
              <span className="inline-block h-2 w-2 rounded-full bg-purple-500" /> 史诗
            </span>
          </div>
        </div>
      </div>

      {/* 手动开启弹窗 */}
      {activeMilestone && !autoOpenMilestone && (
        <BlindBoxModal milestone={activeMilestone} onClose={handleClose} />
      )}

      {/* 自动触发弹窗 */}
      {autoOpenMilestone && (
        <BlindBoxModal milestone={autoOpenMilestone} onClose={handleClose} />
      )}
    </>
  );
}
