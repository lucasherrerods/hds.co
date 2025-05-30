import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { Heart } from 'lucide-react'
import { CartContext } from '../../contexts/CartContext'
import { FavoriteProducts } from '../../contexts/FavoriteProducts'
import Header from '../../components/Header'
import Counter from '../../components/Counter'
import Fade from '../../components/Fade'
import Reviews from '../../components/Reviews'
import RelatedProducts from '../../components/RelatedProducts'
import Footer from '../../components/Footer'

export default function Product() {
  const { id } = useParams()

  const [product, setProduct] = useState([])

  const { addToCart } = useContext(CartContext)
  const { favorites, toggleFavorite } = useContext(FavoriteProducts)

  const inStock = product.availabilityStatus === 'In Stock'

  const getProduct = async () => {
    const request = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await request.json()

    setProduct(data)
  }

  useEffect(() => {
    getProduct()
  }, [id])

  return (
    <Fade>
      <Header />
      <div className="py-16 px-10 flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={product.thumbnail} alt={product.title} className="object-cover w-2/3" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className='flex items-center gap-20'>
            <h1 className="text-3xl font-bold capitalize text-gray-900">{product.title}</h1>
            <Heart onClick={() => toggleFavorite(product)} className={`cursor-pointer transition ${favorites.some((item) => item.id === product.id) ? 'fill-indigo-600 hover:opacity-80' : 'hover:text-indigo-600'}`} />
          </div>
          <div className={`flex items-center gap-4 tracking-wide ${product.price > 70 ? 'justify-end flex-row-reverse' : ''}`}>
            {!inStock ? (
              <p className="text-sm bg-red-100 text-red-500 uppercase font-semibold px-3 py-1 rounded-full">
                Esgotado
              </p>
            ) : (
              product.price > 70 && (
                <p className="text-sm bg-red-100 text-red-500 uppercase font-semibold px-3 py-1 rounded-full">
                  -{product.discountPercentage}%
                </p>
              )
            )}
            <p className={`text-xl ${product.price > 70 ? 'font-light text-gray-400 line-through' : 'font-bold text-gray-900'}`}>
              R$ {product.price}
            </p>
            {product.price > 70 && (
              <p className="font-bold text-xl text-gray-900">
                R$ {Math.round(product.price - product.price * (product.discountPercentage / 100)).toFixed(2)}
              </p>
            )}
          </div>
          <p>
            {product.description}
          </p>
          <div className="flex items-center gap-6 mt-4">
            <Counter value={inStock} />
            <button disabled={!inStock} onClick={() => addToCart(product)} className={`px-5 py-3 bg-black text-white rounded-full font-medium shadow-md ${inStock ? 'hover:scale-105 transition cursor-pointer' : 'bg-gray-300'}`}>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
      <Reviews product={product} />
      <RelatedProducts product={product} />
      <Footer theme={'dark'} />
    </Fade>
  )

}
