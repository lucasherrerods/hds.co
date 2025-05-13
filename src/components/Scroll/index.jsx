import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export default function Scroll({ children }) {
  const scrollRef = useRef(null)

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

  return (
    <div className="relative">
      <button onClick={() => scroll(-600)} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
        <ChevronLeft />
      </button>
      <div ref={scrollRef} className="overflow-x-auto scroll-smooth whitespace-nowrap px-8 py-2">
        {children}
      </div>
      <button onClick={() => scroll(600)} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
        <ChevronRight />
      </button>
    </div>
  )
}