// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo + 标题 */}
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-white text-3xl font-bold">D</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">DAaaXIE Studio</h1>
          <p className="text-gray-600 mt-2">欢迎回来，请登录继续</p>
        </div>

        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-xl border-0 bg-white rounded-3xl",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              formButtonPrimary: 
                "bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 text-base font-medium",
              formFieldInput: "rounded-xl border-gray-300 focus:border-indigo-500",
              socialButtonsBlockButton: 
                "rounded-xl border border-gray-300 hover:bg-gray-50",
              footerActionLink: "text-indigo-600 hover:text-indigo-700",
            },
            layout: {
              socialButtonsVariant: "blockButton",
            },
          }}
          afterSignInUrl="/dashboard"
          afterSignUpUrl="/dashboard"
        />
      </div>
    </div>
  );
}