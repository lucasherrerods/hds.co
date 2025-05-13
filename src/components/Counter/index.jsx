import { useState, useEffect } from "react"

export default function Counter({ value }) {
  const [count, setCount] = useState(1)

  useEffect(() => {
    if (!value) {
      setCount(0)
    }
  }, [value])

  return (
    <div className="flex items-center gap-6 bg-[#F6F6F6] shadow-inner px-4 py-2 rounded-full">
      <button disabled={!value} onClick={() => setCount((prev) => Math.max(1, prev - 1))} className={`font-bold text-xl text-gray-700 transition ${!value ? 'disabled' : 'cursor-pointer hover:text-black'}`}>
        -
      </button>
      <p className={`text-lg ${!value ? 'font-light' : 'font-medium'}`}>
        {count}
      </p>
      <button disabled={!value} onClick={() => setCount((prev) => prev += 1)} className={`font-bold text-xl text-gray-700 transition ${!value ? 'disabled' : 'cursor-pointer hover:text-black'}`}>
        +
      </button>
    </div>
  )
}