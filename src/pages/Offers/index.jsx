import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Stars from "../../components/Stars"
import Header from "../../components/Header"
import Fade from "../../components/Fade"

export default function Offers() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const request = await fetch('https://dummyjson.com/products')
    const { products } = await request.json()

    const discountProducts = products.filter((item) => item.discountPercentage > 10)

    setProducts(discountProducts)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Fade>
      <Header />
      <div className="py-12 px-8 md:pl-28">
        <h1 className="text-2xl font-bold mb-4 capitalize">Ofertas</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-4">
          {products && products.map(product => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`} className="p-4 bg-[#F6F6F6] rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-lg">
                <img src={product.thumbnail} alt={product.title} className="h-44 object-container" />
                <p className="text-sm tracking-wider">{product.title}</p>
                <div className="flex items-center w-full gap-2">
                  <Stars rating={product.rating} />
                  <p className="text-sm">
                    {product.rating.toFixed(1)}<span className="font-light text-gray-600">/5</span>
                  </p>
                </div>
                <div className={'flex items-center gap-8 w-full justify-end flex-row-reverse'}>
                  <p className={'text-xs bg-[#ff333339] text-red-400 font-bold p-1 rounded-full'}>
                    -{product.discountPercentage}%
                  </p>
                  <p className={'font-light line-through'}>
                    R$ {product.price}
                  </p>
                  <p className="font-bold">
                    R$ {Math.round(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Fade>
  )
}