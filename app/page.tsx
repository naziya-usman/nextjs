'use client'
import { useState } from "react";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import('./component/HeavyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

export default function Home() {
  const [isValue, setValue] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>
      <button
        className="btn btn-natural btn-sm"
        onClick={async () => {
          const _ = (await import('lodash')).default;
          const userse = [
            { name: '3' },
            { name: '2' },
            { name: '1' },
          ]
          const sorted = _.orderBy(userse, ['name'])
          console.log(sorted)
          setValue(true)

        }}>lazzy</button>
      {isValue && <HeavyComponent />}
    </main>
  )
}