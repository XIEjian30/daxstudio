// app/profile/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Profile() {
  const user = await currentUser();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold">个人资料</h1>
          <UserButton />
        </div>

        <div className="bg-white rounded-2xl shadow p-10 space-y-8">
          <div className="flex items-center gap-6">
            <img src={user?.imageUrl} alt="avatar" className="w-24 h-24 rounded-full" />
            <div>
              <h2 className="text-2xl">{user?.fullName}</h2>
              <p className="text-gray-500">{user?.emailAddresses[0]?.emailAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}