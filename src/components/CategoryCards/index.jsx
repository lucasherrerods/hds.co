import { useEffect, useState, useRef } from "react"
import { icons } from "./icons"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Fade from "../Fade"
import { Link } from "react-router-dom"

export default function CategoryCards() {
  const [categories, setCategories] = useState([])
  const scrollRef = useRef(null)

  const getCategories = async () => {
    const request = await fetch('https://dummyjson.com/products/categories')
    const data = await request.json()

    setCategories(data)
  }

  const scroll = (offset) => {
    const scroll = scrollRef.current
    const startScroll = scroll.scrollLeft
    const endScroll = startScroll + offset
    const duration = 300
    const startTime = performance.now()

    //Função para atualizar a posição do scroll durante a animação
    const animateScroll = (currentTime) => {
      const timeElaps = currentTime - startTime
      const progress = Math.min(timeElaps / duration, 1) //Garante que o progresso não ultrapasse de 100%
      const scrollPosition = startScroll + (endScroll - startScroll) * progress

      scroll.scrollLeft = scrollPosition

      //Se o progresso ainda não atingiu 100%, continua a animação
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }
    requestAnimationFrame(animateScroll)
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
        <div className="relative">
          <button onClick={() => scroll(-600)} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
            <ChevronLeft />
          </button>
          <div className="overflow-x-auto space-x-4 px-8 py-2 scroll-smooth" ref={scrollRef}>
            <ul className="flex gap-6 items-center flex-nowrap pt-8 min-w-max">
              {categories && categories.map((item) => {
                const Icon = icons[item.name]

                return (
                  <li key={item.name}>
                    <Link to={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="p-4 bg-gray-200 w-40 h-32 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-xs hover:scale-105 hover:shadow-lg">
                      <Icon size={24} />
                      <p className="text-center">{item.name}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <button onClick={() => scroll(600)} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
            <ChevronRight />
          </button>
        </div>
      </section>
    </Fade>
  )
}