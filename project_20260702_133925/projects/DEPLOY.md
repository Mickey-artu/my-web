# 单词花园 - 部署指南

## 快速部署到 Vercel（推荐）

### 步骤 1：下载代码
```bash
# 在沙箱中，代码位于 /workspace/projects
# 你可以下载整个项目文件夹到本地
```

### 步骤 2：推送到 GitHub
```bash
cd projects
git init
git add .
git commit -m "feat: 单词花园英语背诵应用"
git remote add origin https://github.com/你的用户名/word-garden.git
git push -u origin main
```

### 步骤 3：部署到 Vercel
1. 打开 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择你的 `word-garden` 仓库
5. Vercel 会自动检测 Next.js 项目
6. 点击 "Deploy"

部署完成后，你会得到一个永久链接，如：`https://word-garden-xxx.vercel.app`

---

## 备选方案：部署到 Netlify

### 步骤 1-2：同上（下载代码并推送到 GitHub）

### 步骤 3：部署到 Netlify
1. 打开 [netlify.com](https://netlify.com)
2. 使用 GitHub 账号登录
3. 点击 "Add new site" → "Import an existing project"
4. 选择 GitHub，授权访问你的仓库
5. 选择 `word-garden` 仓库
6. 配置构建设置：
   - Build command: `pnpm run build`
   - Publish directory: `.next`
7. 点击 "Deploy site"

---

## 本地运行

如果你想在自己的电脑上运行：

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 启动生产服务器
pnpm run start
```

访问 http://localhost:5000

---

## 注意事项

- 本项目使用 localStorage 存储学习数据，数据保存在用户浏览器中
- 不同设备/浏览器的数据不互通
- 清除浏览器缓存会丢失学习记录
- 语音朗读功能需要浏览器支持 Web Speech API
