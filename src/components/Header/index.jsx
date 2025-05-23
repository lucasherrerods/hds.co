import { Search, Heart, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { FavoriteProducts } from '../../contexts/FavoriteProducts'
import { useContext } from 'react'

export default function Header() {
  const { productsCart } = useContext(CartContext)
  const { favorites } = useContext(FavoriteProducts)

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
          <div className='relative'>
            <Heart className='cursor-pointer hover:text-indigo-600 transition' />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {favorites.length}
            </span>
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