import { useEffect, useState } from "react"
import { Star } from "lucide-react"

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

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="">
      <h2 className="text-3xl uppercase tracking-widest font-bold text-center py-2">
        Novidades
      </h2>
      <ul className="flex gap-6 items-center justify-around py-20 flex-nowrap min-w-max">
        {products && products.map((item) => (
          <li key={item.title} className="p-4 bg-[#F6F6F6] w-54 h-auto rounded-lg flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-lg">
            <img src={item.thumbnail} alt="Image Product" />
            <p className="text-sm tracking-wider">{item.title}</p>
            <div className="flex items-center w-full gap-2">
              <Star size={14} className="text-yellow-500 font-bold" />
              <p className="text-sm">{item.rating}<span className="font-light text-gray-600">/5</span></p>
            </div>
            <div className="flex items-center gap-8 w-full">
              <p className="font-bold">R$ {item.price}</p>
              <p className="">R$ {item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}