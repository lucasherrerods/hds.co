import { useEffect, useState } from "react"
import { icons } from "./icons"

export default function CategoryCards() {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const request = await fetch('https://dummyjson.com/products/categories')
    const data = await request.json()

    setCategories(data)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className="py-12 pl-28">
      <h2 className="text-2xl font-bold">
        Pesquise por categoria
      </h2>
      <ul className="flex gap-10 items-center flex-wrap pt-8">
        {categories && categories.map((item) => {
          const Icon = icons[item.name]

          return (
            <li key={item.name} className="p-4 bg-gray-200 w-40 h-32 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-xs hover:scale-105 hover:shadow-lg">
              <Icon size={24} />
              <p className="text-center">{item.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}