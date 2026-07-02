# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **数据持久化**: localStorage（客户端本地存储）

## 项目概述

单词花园 — 英语单词背诵网页应用。从初中单词开始，按难度递增，每日学习5个单词，支持小红花奖励机制。

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── globals.css     # 全局样式（含自定义色彩与动画）
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 主页面（含底部导航与各Tab视图）
│   ├── components/         # 业务组件
│   │   ├── ui/             # Shadcn UI 组件库
│   │   ├── learning-provider.tsx  # 学习状态上下文
│   │   ├── daily-lesson.tsx       # 每日学习流程（查看→测试→完成）
│   │   ├── review-panel.tsx       # 复习面板（错题本+收藏夹）
│   │   ├── stats-panel.tsx        # 学习统计面板
│   │   ├── flower-wall.tsx        # 小红花墙与成就展示
│   │   └── icons.tsx              # 自定义SVG图标（花朵、叶子等）
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   ├── utils.ts        # 通用工具函数 (cn)
│   │   ├── words.ts        # 单词库（150词，5级难度）
│   │   └── store.ts        # 学习数据状态管理 (localStorage)
│   └── server.ts           # 自定义服务端入口
├── DESIGN.md               # 设计规范文件
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

## 核心功能模块

### 单词库 (`src/lib/words.ts`)
- 150个初中英语单词，按5个难度等级分类
- Level 1-2: 七年级词汇，Level 3: 八年级上册，Level 4: 八年级下册，Level 5: 九年级
- 提供 `getDistractors()` 生成选择题干扰项

### 学习数据 (`src/lib/store.ts`)
- 使用 localStorage 持久化所有学习数据
- 核心状态：每日记录、单词掌握度、小红花数、连续打卡天数
- 通过 `useLearningStore` Hook 提供完整的CRUD操作

### 学习流程 (`src/components/daily-lesson.tsx`)
- 阶段：intro → view → test(select/spell) → result → complete
- 查看单词：展示英文、音标、词性释义、例句
- 测试类型：词义选择 + 拼写测试，随机切换
- 完成后：庆祝动画 + 小红花奖励

### 复习系统 (`src/components/review-panel.tsx`)
- 错题本：记录答错的单词，支持二次巩固
- 收藏夹：用户手动收藏的重点单词
- 支持对错题/收藏进行选择题或拼写测试

### 小红花墙 (`src/components/flower-wall.tsx`)
- 花朵网格可视化展示累计小红花
- 成就等级系统（种子播撒者→花苗培育员→小园丁→花艺达人→花园守护者）
- 里程碑进度条与激励文案

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。

## 开发规范

### 编码规范
- 默认按 TypeScript `strict` 心智写代码
- 禁止隐式 `any` 和 `as any`
- 严禁在 JSX 渲染逻辑中使用 `Math.random()`、`Date.now()` 等不纯函数，必须用 `useState(() => ...)` 预生成
- 禁止在 JSX 中直接使用 `typeof window`，使用 `useEffect` + `useState` 确保客户端挂载

### Hydration 问题防范
1. 所有客户端组件标记 `'use client'`
2. 动态数据（如 localStorage 读取）通过 `useEffect` + `useState` 延迟初始化
3. 禁止使用 `<head>` 标签，优先使用 `metadata`

## UI 设计与组件规范

- 采用 shadcn/ui 组件库，位于 `src/components/ui/`
- 自定义暖色系主题：主色 `#E8564A`（朱红），辅助色 `#F5A623`（暖金），背景色 `#FFFDF9`
- 详见 `DESIGN.md` 中的完整设计规范

## 测试与验证

- 静态检查：`pnpm ts-check` + `pnpm lint --quiet`
- 本项目为纯客户端应用，无后端 API，无需接口冒烟测试
- 可通过 `curl -s http://localhost:5000` 验证页面正常加载
