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
      afterSignOutUrl="/"     // ← 这个还可以保留
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
        elements: {
          modalContent: "bg-zinc-900/90 backdrop-blur-3xl border border-zinc-700/60 rounded-3xl shadow-2xl",
          card: "bg-transparent border-0 shadow-none",

          headerTitle: "text-blue-400 text-2xl font-bold tracking-tight",
          headerSubtitle: "text-blue-300",

          formFieldLabel: "text-blue-300 font-medium",

          formFieldInput: 
            "bg-zinc-800/90 border border-zinc-600 text-white placeholder-zinc-400 rounded-2xl focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 py-4 px-5 text-base",

          formButtonPrimary: 
            "bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 hover:from-blue-600 hover:via-cyan-500 hover:to-yellow-500 text-white font-semibold rounded-2xl py-3.5 text-base shadow-lg",

          socialButtonsBlockButton: 
            "bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white rounded-2xl py-3",

          dividerLine: "bg-zinc-600",
          dividerText: "text-blue-300",

          footerActionLink: "text-blue-400 hover:text-blue-300 font-medium",

          footer: "hidden",
          branded: "hidden",
        },
        variables: {
          colorPrimary: "#60a5fa",
          colorBackground: "#18181b",
          colorText: "#bfdbfe",
          colorTextSecondary: "#93c5fd",
          colorInputText: "#e0f2fe",
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