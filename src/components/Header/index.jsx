import { Search, Heart, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { FavoriteProducts } from '../../contexts/FavoriteProducts'
import { useContext, useState } from 'react'

export default function Header() {
  const { productsCart } = useContext(CartContext)
  const { favorites, toggleFavorite } = useContext(FavoriteProducts)

  const [showFavorites, setShowFavorites] = useState(false)

  return (
    <div className='w-full h-20 flex items-center justify-around'>
      <div className='flex items-center gap-14'>
        <Link to={'/'}>
          <h1 className='font-extrabold tracking-widest uppercase text-3xl cursor-pointer'>
            Hds.co
          </h1>
        </Link>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder='Search'
            className="w-80 bg-gray-100 py-4 pl-9 pr-4 rounded-md text-sm outline-none"
          />
        </div>
      </div>
      <div className='flex items-center gap-14'>
        <ul className='hidden md:flex items-center gap-14 text-sm font-medium text-gray-700'>
          <li className='cursor-pointer font-semibold hover:text-indigo-600 transition'>Home</li>
          <li className='cursor-pointer hover:text-indigo-600 transition'>Sobre</li>
          <li className='cursor-pointer hover:text-indigo-600 transition'>Contato</li>
          <li className='cursor-pointer hover:text-indigo-600 transition'>Blog</li>
        </ul>
        <div className='flex items-center gap-6 text-gray-600'>
          <div className='relative group'>
            <Heart onClick={() => setShowFavorites((prev) => !prev)} className='cursor-pointer hover:text-indigo-600 transition' />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
            {showFavorites && (
              <div className="absolute right-0 top-8 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10">
                {favorites.length === 0 ? (
                  <p className="text-sm text-gray-500">Sem favoritos</p>
                ) : (
                  <ul className="space-y-1 max-h-48 overflow-y-auto favorite-dropdown">
                    {favorites.map((product) => (
                      <li key={product.id} className="relative flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition">
                        <img src={product.thumbnail} alt={product.title} className="w-12 h-12 object-cover rounded-md" />
                        <div className="flex flex-col overflow-hidden">
                          <p className="text-sm font-semibold text-gray-800 truncate">
                            {product.title}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {product.brand}
                          </p>
                        </div>
                        <Heart size={14} onClick={() => toggleFavorite(product)} className={`absolute top-2 right-0 cursor-pointer transition ${favorites.some((item) => item.id === product.id) ? 'fill-indigo-600 hover:opacity-80' : 'hover:text-indigo-600'}`} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          <Link to={'/cart'} className='relative'>
            <ShoppingCart className='cursor-pointer hover:text-indigo-600 transition' />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {productsCart.length}
            </span>
          </Link>
          <User className='cursor-pointer hover:text-indigo-600 transition' />
        </div>
      </div>
    </div>
  )
}