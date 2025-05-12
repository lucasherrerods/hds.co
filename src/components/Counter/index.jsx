import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(1)

  return (
    <div className="flex items-center gap-6 bg-[#F6F6F6] shadow-inner px-4 py-2 rounded-full">
      <button onClick={() => setCount((prev) => Math.max(1, prev - 1))} className="font-bold text-xl text-gray-700 hover:text-black transition cursor-pointer">
        -
      </button>
      <p className="text-lg font-medium">
        {count}
      </p>
      <button onClick={() => setCount((prev) => prev += 1)} className="font-bold text-xl text-gray-700 hover:text-black transition cursor-pointer">
        +
      </button>
    </div>
  )
}