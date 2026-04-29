'use client';

import { SplineScene } from "@/components/ui/splite";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* 导航栏 - 更新版 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">D</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">DAaaXIE Studio</span>
          </div>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-300">
            <a href="#" className="hover:text-white transition-colors">首页</a>
            <a href="#" className="hover:text-white transition-colors">作品</a>
            <a href="#" className="hover:text-white transition-colors">服务</a>
            <a href="#" className="hover:text-white transition-colors">关于我们</a>
          </div>

          {/* 桌面端按钮 */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-medium text-white border border-zinc-700 rounded-2xl hover:border-zinc-500 hover:bg-zinc-900 transition">
              建议
            </button>
            <button className="px-6 py-2.5 text-sm font-medium bg-white text-black rounded-2xl hover:bg-zinc-100 transition">
              投诉
            </button>
          </div>

          {/* 移动端菜单按钮 */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-black/95 px-6 py-6">
            <div className="flex flex-col gap-6 text-lg">
              <a href="#" className="text-white hover:text-purple-400">首页</a>
              <a href="#" className="text-white hover:text-purple-400">作品</a>
              <a href="#" className="text-white hover:text-purple-400">服务</a>
              <a href="#" className="text-white hover:text-purple-400">关于我们</a>
              
              <div className="pt-6 border-t border-zinc-800 flex flex-col gap-4">
                <button className="py-3 text-white border border-zinc-700 rounded-2xl">登录</button>
                <button className="py-3 bg-white text-black font-semibold rounded-2xl">注册</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 主内容区域 */}
      <div className="relative z-10 min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* 左侧：机器人 */}
          <div className="relative h-[680px] md:h-[760px] flex items-center justify-center order-2 md:order-1">
            <div className="w-full h-full relative">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full scale-[1.3] md:scale-[1.25]"
              />
            </div>
          </div>

          {/* 右侧：登录表单 */}
          <div className="max-w-lg order-1 md:order-2">
            <div className="mb-10">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">欢迎回来</h1>
              <p className="text-zinc-400 mt-3 text-xl">DAaaXIE Studio</p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 p-10 rounded-3xl space-y-8">
              <div>
                <label className="block text-zinc-400 text-sm mb-3">邮箱地址</label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:border-purple-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-sm mb-3">密码</label>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:border-purple-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div className="pt-4 space-y-4">
                <button className="w-full py-4 bg-white text-black font-semibold rounded-2xl text-lg hover:bg-zinc-100 active:scale-[0.985] transition-all">
                  登录
                </button>
                <button className="w-full py-4 border border-zinc-700 text-white font-semibold rounded-2xl hover:bg-zinc-900 transition-all">
                  注册新账号
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部提示 */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 text-sm z-50 bg-black/70 px-5 py-2 rounded-full">
        
      </div>
    </div>
  );
}