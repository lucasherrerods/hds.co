import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Fade from "../../components/Fade"
import ProductCard from "../../components/ProductCard"

export default function CategoryProducts() {
  const { category } = useParams()
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const request = await fetch(`https://dummyjson.com/products/category/${category}`)
    const data = await request.json()

    setProducts(data.products)
  }

  useEffect(() => {
    getProducts()
  }, [category])

  return (
    <Fade>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Categoria: {category}</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-4">
          {products && products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </Fade>
  )
}