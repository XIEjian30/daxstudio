// app/page.tsx
'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <div className="text-zinc-400 flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-zinc-700 border-t-blue-500 rounded-full animate-spin"></div>
          <p>加载机器人中...</p>
        </div>
      </div>
    )
  }
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* 背景光效 */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#3b82f620_0%,transparent_60%)] pointer-events-none" />

      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-yellow-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-3xl">D</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">DAaaXIE Studio</span>
          </div>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-300">
            <a href="#" className="hover:text-white transition-colors">首页</a>
            <a href="#" className="hover:text-white transition-colors">作品</a>
            <a href="#" className="hover:text-white transition-colors">服务</a>
            <a href="#" className="hover:text-white transition-colors">关于我们</a>
          </div>

          {/* 已登录状态 */}
          <Show when="signed-in">
            <div className="hidden md:flex items-center gap-6">
              <a href="/dashboard" className="text-zinc-300 hover:text-white transition">仪表盘</a>
              <a href="/profile" className="text-zinc-300 hover:text-white transition">个人资料</a>
              <UserButton afterSignOutUrl="/" />
            </div>
          </Show>

          {/* 未登录状态 */}
          <Show when="signed-out">
            <div className="hidden md:flex items-center gap-4">
              <SignInButton mode="modal">
                <button className="px-6 py-2.5 text-sm font-medium text-white border border-zinc-700 rounded-full hover:bg-zinc-900 transition">
                  登录
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-6 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-100 transition">
                  注册
                </button>
              </SignUpButton>
            </div>
          </Show>

          {/* 移动端菜单按钮 */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* 主内容 */}
      <div className="pt-24 pb-12 min-h-screen flex items-center px-6 relative z-10">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
         
          {/* 左侧 Spline 3D 机器人 */}
          <div className="relative h-[520px] sm:h-[620px] md:h-[720px] flex items-center justify-center order-2 md:order-1">
            <div className="w-full h-full scale-[1.45] sm:scale-[1.35] md:scale-[1.25] lg:scale-[1.3] -mt-8 md:-mt-12">
              <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="order-1 md:order-2 max-w-md mx-auto md:mx-0 w-full">
            <div className="mb-12 text-center md:text-left">
              <p className="text-zinc-400 text-xl md:text-2xl">欢迎回来</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white mt-3">
                登录 DAaaXIE Studio
              </h1>
            </div>

            {/* Clerk 登录 / 注册按钮 */}
            <Show when="signed-out">
              <div className="space-y-4">
                <SignInButton mode="modal">
                  <button className="w-full py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 
                                     hover:from-blue-600 hover:via-cyan-500 hover:to-yellow-500
                                     text-white font-semibold rounded-2xl text-lg transition-all shadow-lg shadow-blue-500/30">
                    登录账号
                  </button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button className="w-full py-4 border border-zinc-700 hover:bg-zinc-900 
                                     text-white font-medium rounded-2xl transition">
                    注册新账号
                  </button>
                </SignUpButton>
              </div>
            </Show>

            <Show when="signed-in">
              <div className="text-center py-12 bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-zinc-700">
                <p className="text-2xl text-green-400 mb-6">✅ 你已成功登录</p>
                <div className="flex flex-col gap-4">
                  <a 
                    href="/dashboard"
                    className="w-full py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-100 transition"
                  >
                    进入仪表盘
                  </a>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
}