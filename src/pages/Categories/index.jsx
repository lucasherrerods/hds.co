import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Category() {
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Categoria: {category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}