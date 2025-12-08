


import Link from "next/link";
export default function Home() {
  return (
    <div className="container">
      <main><h1 >hello world</h1>
        <button className="btn ">
          <Link href="/users"> user</Link>
        </button>
      
      </main>

    </div>
  );
}