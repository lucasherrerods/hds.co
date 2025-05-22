import { useState, useEffect } from "react"

export default function Counter({ value }) {
  const [count, setCount] = useState(value ? 1 : 0) //Se tem estoque começa no 1, se não 0

  useEffect(() => {
    setCount(value ? 1 : 0)
  }, [value])

  return (
    <div className="flex items-center gap-6 bg-[#F6F6F6] shadow-inner px-4 py-2 rounded-full">
      <button disabled={!value} onClick={() => setCount((prev) => Math.max(1, prev - 1))} className={`font-bold text-xl text-gray-700 transition ${!value || count <= 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:text-black'}`}>
        -
      </button>
      <p className={`text-lg ${!value ? 'opacity-50' : 'font-medium'}`}>
        {count}
      </p>
      <button disabled={!value} onClick={() => setCount((prev) => prev += 1)} className={`font-bold text-xl text-gray-700 transition ${!value ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:text-black'}`}>
        +
      </button>
    </div>
  )
}