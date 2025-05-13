import { useEffect, useState } from "react"
import { icons } from "./icons"
import Fade from "../Fade"
import { Link } from "react-router-dom"
import Scroll from "../Scroll"

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
    <Fade>
      <section className="py-12">
        <h2 className="text-2xl font-bold px-8 md:pl-28">
          Pesquise por categoria
        </h2>
        <Scroll>
          <ul className="flex gap-6 items-center flex-nowrap pt-8 min-w-max">
            {categories.map((item) => {
              const Icon = icons[item.name]

              return (
                <li key={item.name}>
                  <Link to={`/category/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="p-4 bg-gray-200 w-40 h-32 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-xs hover:scale-105 hover:shadow-lg">
                    <Icon size={24} />
                    <p className="text-center">{item.name}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Scroll>
      </section>
    </Fade>
  )
}