// app/dashboard/page.tsx
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Dashboard() {
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">仪表盘</h1>
          <UserButton />   {/* ← 必须是这一行！不要带 afterSignOutUrl */}
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <p className="text-2xl mb-6">欢迎回来，{user?.firstName || "用户"}！</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-500">用户 ID</p>
              <p className="font-mono break-all">{userId}</p>
            </div>
            <div>
              <p className="text-gray-500">邮箱</p>
              <p>{user?.emailAddresses[0]?.emailAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}