
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import flower from '@/public/images/flower.jpg'
export default async function Home() {

  const session = await getServerSession(authOptions);
  console.log(session?.user);
  return (
    <main className="relative h-screen ">
      <Image
        src="https://loremflickr.com/300/170/flower"
        alt="flower"
        fill
        className="object-contain"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
      ></Image>
    </main>
  )
}