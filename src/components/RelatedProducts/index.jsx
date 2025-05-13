import { useEffect, useState } from "react"
import ProductCard from "../ProductCard"
import Fade from "../Fade"
import Scroll from "../Scroll"

export default function RelatedProducts({ product }) {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    if (!product?.category) return //evita erro se ainda não carregou

    const request = await fetch(`https://dummyjson.com/products/category/${product.category}`)
    const data = await request.json()

    setProducts(data.products)
  }

  useEffect(() => {
    getProducts()
  }, [product?.category]) //chama de novo quando a categoria for incluída

  return (
    <Fade>
      <h2 className='text-2xl font-bold pt-28 px-8 md:pl-28'>Produtos relacionados</h2>
      <Scroll>
        <ul className="flex gap-6 items-center flex-nowrap pt-8 min-w-max">
          {products && products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </Scroll>
    </Fade>
  )
}