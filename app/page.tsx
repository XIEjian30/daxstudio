'use client';

import { useState } from "react";
import dynamic from "next/dynamic";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // 显示 Toast
  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // 表单验证
  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "请输入邮箱地址";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "请输入正确的邮箱格式";
    }

    if (!password) {
      newErrors.password = "请输入密码";
    } else if (password.length < 6) {
      newErrors.password = "密码至少需要6个字符";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    // 模拟登录请求
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("登录信息:", { email, password, rememberMe });
    
    showToast("登录成功！欢迎回来", "success");
    
    // 清空表单（可选）
    // setEmail(""); setPassword("");
    
    setIsLoading(false);
  };

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

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-300">
            <a href="#" className="hover:text-white transition-colors">首页</a>
            <a href="#" className="hover:text-white transition-colors">作品</a>
            <a href="#" className="hover:text-white transition-colors">服务</a>
            <a href="#" className="hover:text-white transition-colors">关于我们</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-medium text-white border border-zinc-700 rounded-full hover:bg-zinc-900 transition">建议</button>
            <button className="px-6 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-100 transition">投诉</button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* 主内容 */}
      <div className="pt-24 pb-12 min-h-screen flex items-center px-6 relative z-10">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* 左侧机器人 */}
          <div className="relative h-[520px] sm:h-[620px] md:h-[720px] flex items-center justify-center order-2 md:order-1">
            <div className="w-full h-full scale-[1.45] sm:scale-[1.35] md:scale-[1.25] lg:scale-[1.3] -mt-8 md:-mt-12">
              <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
            </div>
          </div>

          {/* 右侧登录表单 */}
          <div className="order-1 md:order-2 max-w-md mx-auto md:mx-0 w-full">
            <div className="mb-12 text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white"></h1>
              <p className="text-zinc-400 mt-4 text-xl md:text-2xl">DAaaXIE Studio</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-8">
              {/* 邮箱输入框 */}
              <div className="space-y-2">
                <label className="block text-zinc-400 text-sm font-medium">邮箱地址</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className={`w-full bg-zinc-900/80 border rounded-2xl px-6 py-4 text-white placeholder-zinc-500 
                             transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950
                             ${errors.email 
                               ? 'border-red-500 focus:ring-red-500' 
                               : 'border-zinc-700 focus:border-blue-500 focus:ring-blue-500/30'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* 密码输入框 */}
              <div className="space-y-2">
                <label className="block text-zinc-400 text-sm font-medium">密码</label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className={`w-full bg-zinc-900/80 border rounded-2xl px-6 py-4 text-white placeholder-zinc-500 
                               transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950
                               ${errors.password 
                                 ? 'border-red-500 focus:ring-red-500' 
                                 : 'border-zinc-700 focus:border-blue-500 focus:ring-blue-500/30'}`}
                  />
                  <a 
                    href="#" 
                    className="absolute right-6 -bottom-6 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    忘记密码？
                  </a>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* 记住我 */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 accent-blue-500 bg-zinc-900 border-zinc-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="rememberMe" className="text-zinc-400 text-sm cursor-pointer select-none">
                  记住我
                </label>
              </div>

              {/* 登录按钮 */}
              <div className="pt-6 space-y-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 
                             hover:from-blue-600 hover:via-cyan-500 hover:to-yellow-500 
                             text-white font-semibold rounded-2xl text-lg transition-all 
                             active:scale-[0.985] disabled:opacity-70 disabled:cursor-not-allowed 
                             flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      登录中...
                    </>
                  ) : (
                    "登录"
                  )}
                </button>

                <button
                  type="button"
                  className="w-full py-4 border border-zinc-700 hover:bg-zinc-900 text-white font-medium rounded-2xl transition"
                >
                  注册新账号
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast 提示 */}
      {toast && (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl text-white font-medium shadow-2xl transition-all duration-300 z-50
          ${toast.type === 'success' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-red-500'}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}