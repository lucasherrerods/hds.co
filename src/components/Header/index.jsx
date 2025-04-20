import { Search, Heart, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  return (
    <div className='w-full h-20 flex items-center justify-around'>
      <div className='flex items-center gap-14'>
        <h1 className='font-extrabold tracking-widest uppercase text-3xl'>
          Hds.co
        </h1>
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
          <Heart className='cursor-pointer hover:text-indigo-600 transition' />
          <ShoppingCart className='cursor-pointer hover:text-indigo-600 transition' />
          <User className='cursor-pointer hover:text-indigo-600 transition' />
        </div>
      </div>
    </div>
  )
}