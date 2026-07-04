import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '单词花园 | 每日英语单词学习',
  description: '从初中单词开始，每日5个，用小红花记录你的成长之路',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
