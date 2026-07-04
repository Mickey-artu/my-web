// 盲盒奖励系统
// 阶梯：50 / 100 / 150 / 200 朵小红花

export interface BlindBoxPrize {
  id: string;
  name: string;
  emoji: string;
  category: "snack" | "drink" | "fruit" | "dessert";
  rarity: "common" | "rare" | "epic";
}

export interface BlindBoxMilestone {
  threshold: number; // 需要的小红花数
  label: string;
  boxColor: string;
  prizes: BlindBoxPrize[];
}

// 奖品池
const SNACK_PRIZES: BlindBoxPrize[] = [
  { id: "s1", name: "薯片", emoji: "🍟", category: "snack", rarity: "common" },
  { id: "s2", name: "巧克力", emoji: "🍫", category: "snack", rarity: "common" },
  { id: "s3", name: "饼干", emoji: "🍪", category: "snack", rarity: "common" },
  { id: "s4", name: "棒棒糖", emoji: "🍭", category: "snack", rarity: "common" },
  { id: "s5", name: "果冻", emoji: "🍮", category: "snack", rarity: "common" },
  { id: "s6", name: "坚果", emoji: "🥜", category: "snack", rarity: "common" },
  { id: "s7", name: "蛋糕", emoji: "🍰", category: "dessert", rarity: "rare" },
  { id: "s8", name: "马卡龙", emoji: "🧁", category: "dessert", rarity: "rare" },
  { id: "s9", name: "冰淇淋", emoji: "🍦", category: "dessert", rarity: "rare" },
  { id: "s10", name: "甜甜圈", emoji: "🍩", category: "dessert", rarity: "rare" },
];

const DRINK_PRIZES: BlindBoxPrize[] = [
  { id: "d1", name: "珍珠奶茶", emoji: "🧋", category: "drink", rarity: "common" },
  { id: "d2", name: "果汁", emoji: "🧃", category: "drink", rarity: "common" },
  { id: "d3", name: "可乐", emoji: "🥤", category: "drink", rarity: "common" },
  { id: "d4", name: "柠檬水", emoji: "🍋", category: "drink", rarity: "common" },
  { id: "d5", name: "热可可", emoji: "☕", category: "drink", rarity: "rare" },
  { id: "d6", name: "奶昔", emoji: "🥛", category: "drink", rarity: "rare" },
  { id: "d7", name: "水果茶", emoji: "🍵", category: "drink", rarity: "rare" },
];

const FRUIT_PRIZES: BlindBoxPrize[] = [
  { id: "f1", name: "苹果", emoji: "🍎", category: "fruit", rarity: "common" },
  { id: "f2", name: "香蕉", emoji: "🍌", category: "fruit", rarity: "common" },
  { id: "f3", name: "橙子", emoji: "🍊", category: "fruit", rarity: "common" },
  { id: "f4", name: "葡萄", emoji: "🍇", category: "fruit", rarity: "common" },
  { id: "f5", name: "西瓜", emoji: "🍉", category: "fruit", rarity: "common" },
  { id: "f6", name: "草莓", emoji: "🍓", category: "fruit", rarity: "rare" },
  { id: "f7", name: "樱桃", emoji: "🍒", category: "fruit", rarity: "rare" },
  { id: "f8", name: "芒果", emoji: "🥭", category: "fruit", rarity: "rare" },
  { id: "f9", name: "蓝莓", emoji: "🫐", category: "fruit", rarity: "epic" },
  { id: "f10", name: "榴莲", emoji: "🥝", category: "fruit", rarity: "epic" },
];

// 各阶梯奖品池（越高阶梯奖品越丰富）
export const MILESTONES: BlindBoxMilestone[] = [
  {
    threshold: 50,
    label: "初露锋芒",
    boxColor: "#F5A623",
    prizes: [...SNACK_PRIZES.slice(0, 6), ...FRUIT_PRIZES.slice(0, 5)],
  },
  {
    threshold: 100,
    label: "学有所成",
    boxColor: "#E8564A",
    prizes: [...SNACK_PRIZES, ...DRINK_PRIZES.slice(0, 4), ...FRUIT_PRIZES.slice(0, 6)],
  },
  {
    threshold: 150,
    label: "词汇达人",
    boxColor: "#9B59B6",
    prizes: [...SNACK_PRIZES, ...DRINK_PRIZES, ...FRUIT_PRIZES],
  },
  {
    threshold: 200,
    label: "花园守护者",
    boxColor: "#2ECC71",
    prizes: [...SNACK_PRIZES, ...DRINK_PRIZES, ...FRUIT_PRIZES],
  },
];

// 根据稀有度获取概率权重
function getRarityWeight(rarity: BlindBoxPrize["rarity"]): number {
  switch (rarity) {
    case "common": return 60;
    case "rare": return 30;
    case "epic": return 10;
  }
}

// 从奖品池中随机抽取一个奖品（按稀有度加权）
export function drawPrize(milestone: BlindBoxMilestone): BlindBoxPrize {
  const prizes = milestone.prizes;
  const totalWeight = prizes.reduce((sum, p) => sum + getRarityWeight(p.rarity), 0);
  let random = Math.random() * totalWeight;
  for (const prize of prizes) {
    random -= getRarityWeight(prize.rarity);
    if (random <= 0) return prize;
  }
  return prizes[0];
}

// 获取稀有度标签
export function getRarityLabel(rarity: BlindBoxPrize["rarity"]): string {
  switch (rarity) {
    case "common": return "普通";
    case "rare": return "稀有";
    case "epic": return "史诗";
  }
}

// 获取稀有度颜色
export function getRarityColor(rarity: BlindBoxPrize["rarity"]): string {
  switch (rarity) {
    case "common": return "#8C8680";
    case "rare": return "#3B82F6";
    case "epic": return "#A855F7";
  }
}

// 获取已解锁的里程碑
export function getUnlockedMilestones(flowerCount: number): BlindBoxMilestone[] {
  return MILESTONES.filter(m => flowerCount >= m.threshold);
}

// 获取下一个里程碑
export function getNextMilestone(flowerCount: number): BlindBoxMilestone | null {
  return MILESTONES.find(m => flowerCount < m.threshold) ?? null;
}

// 检查是否刚好达到某个里程碑（用于触发弹窗）
export function getNewlyReachedMilestone(
  prevFlowerCount: number,
  currentFlowerCount: number,
  openedMilestones: number[]
): BlindBoxMilestone | null {
  for (const m of MILESTONES) {
    if (
      prevFlowerCount < m.threshold &&
      currentFlowerCount >= m.threshold &&
      !openedMilestones.includes(m.threshold)
    ) {
      return m;
    }
  }
  return null;
}
