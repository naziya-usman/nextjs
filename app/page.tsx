
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import flower from '@/public/images/flower.jpg'
export default async function Home() {

  const session = await getServerSession(authOptions);
  console.log(session?.user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>
      {session?.user ? (
        <div >
          <p className="mb-4 font-bold">Signed in as {session.user.email}</p>
        </div>
      ) : (
        <div>
          <p className="mb-4">Not signed in</p>
        </div>
      )}
    </main>
  )
}