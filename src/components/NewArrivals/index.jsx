import { useEffect, useState } from "react"
import { Star, StarHalf, StarOff } from "lucide-react"

export default function NewArrivals() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const request = await fetch('https://dummyjson.com/products?limit=30&skip=75')
    const data = await request.json()

    const selectProduct = []

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * data.products.length) //Gera um número aleatório baseado no tamanho do array
      const randomProduct = data.products[randomIndex] //Pega o produto que esteja no index sorteado

      selectProduct.push(randomProduct)
    }
    setProducts(selectProduct)
  }

  function renderStars(rating) {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={12} className="text-yellow-500" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={12} className="text-yellow-500" />)
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarOff key={`empty-${i}`} size={12} className="text-gray-300" />)
    }

    return stars
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="">
      <h2 className="text-3xl uppercase tracking-widest font-bold text-center py-2">
        Novidades
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-4">
        {products && products.map((item) => (
          <li key={item.title} className="p-4 bg-[#F6F6F6] rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-lg">
            <img src={item.thumbnail} alt="Image Product" className="h-44 object-container" />
            <p className="text-sm tracking-wider">
              {item.title}
            </p>
            <div className="flex items-center w-full gap-2">
              {renderStars(item.rating)}
              <p className="text-sm">
                {item.rating.toFixed(1)}<span className="font-light text-gray-600">/5</span>
              </p>
            </div>
            <div className={`flex items-center gap-8 w-full ${item.price > 70 ? 'justify-end flex-row-reverse' : ''}`}>
              <p className={`${item.price > 70 ? 'text-xs bg-[#ff333339] text-red-400 font-bold p-1 rounded-full' : 'hidden'}`}>
                {item.price > 70 ? `-${item.discountPercentage}%` : ''}
              </p>
              <p className={`${item.price > 70 ? 'font-light line-through' : 'font-bold'}`}>
                R$ {item.price}
              </p>
              <p className="font-bold">
                {item.price > 70 ? `R$ ${Math.round(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}` : ''}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}