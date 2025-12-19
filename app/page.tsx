
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";


export default async function Home() {

  const session = await getServerSession(authOptions);
console.log(session?.user);

  return (
    <div className="container">
      <main>
        <h1 >hello {session && <span>{session.user!.name}</span> }</h1>
        <button className="btn ">
          <Link href="/users"> user</Link>
        </button>

      </main>

    </div>
  );
}