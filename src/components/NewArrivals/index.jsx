import { useEffect, useState } from "react"
import Fade from "../Fade"
import ProductCard from "../ProductCard"

export default function NewArrivals() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const request = await fetch('https://dummyjson.com/products?limit=100')
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
    <Fade>
      <section>
        <h2 className="text-3xl uppercase tracking-widest font-bold text-center py-2">
          Novidades
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-4">
          {products && products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </Fade>
  )
}