// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAaaXIE Studio",
  description: "专业的工作空间",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
        elements: {
          // 弹窗整体背景 - 毛玻璃
          modalContent: "bg-zinc-900/90 backdrop-blur-3xl border border-zinc-700/60 rounded-3xl shadow-2xl",
          card: "bg-transparent border-0 shadow-none",

          // 标题和副标题 → 改成蓝色
          headerTitle: "text-blue-400 text-2xl font-bold tracking-tight",
          headerSubtitle: "text-blue-300",

          // 输入框标签（Email address、Password）→ 蓝色
          formFieldLabel: "text-blue-300 font-medium",

          // 输入框内部文字
          formFieldInput: 
            "bg-zinc-800/90 border border-zinc-600 text-white placeholder-zinc-400 rounded-2xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 py-4 px-5 text-base",

          // 主要按钮保持渐变
          formButtonPrimary: 
            "bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 hover:from-blue-600 hover:via-cyan-500 hover:to-yellow-500 text-white font-semibold rounded-2xl py-3.5 text-base shadow-lg",

          // 社交登录按钮
          socialButtonsBlockButton: 
            "bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white rounded-2xl py-3",

          // "or" 分隔符
          dividerLine: "bg-zinc-600",
          dividerText: "text-blue-300",

          // "Sign up" 链接 → 亮蓝色
          footerActionLink: "text-blue-400 hover:text-blue-300 font-medium",

          // 隐藏底部 Clerk 信息
          footer: "hidden",
          branded: "hidden",
        },
        variables: {
          colorPrimary: "#60a5fa",           // 蓝色主色
          colorBackground: "#18181b",
          colorText: "#bfdbfe",              // 整体文字偏蓝色
          colorTextSecondary: "#93c5fd",     // 次要文字蓝色
          colorInputText: "#e0f2fe",         // 输入框文字浅蓝色
          colorInputPlaceholder: "#94a3b8",
          borderRadius: "16px",
        },
      }}
    >
      <html lang="zh-CN">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}