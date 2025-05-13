import { Link } from "react-router-dom"
import Stars from "../Stars"

export default function ProductCard({ product }) {

  return (
    <li>
      <Link to={`/products/${product.id}`} className="p-4 bg-[#F6F6F6] rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-lg">
        <img src={product.thumbnail} alt={product.title} className="h-44 object-container" />
        <p className="text-sm tracking-wider">{product.title}</p>
        <div className="flex items-center w-full gap-2">
          <Stars rating={product.rating} />
          <p className="text-sm">
            {product.rating.toFixed(1)}<span className="font-light text-gray-600">/5</span>
          </p>
        </div>
        <div className={`flex items-center gap-8 w-full ${product.price > 70 ? 'justify-end flex-row-reverse' : ''}`}>
          <p className={`${product.price > 70 ? 'text-xs bg-[#ff333339] text-red-400 font-bold p-1 rounded-full' : 'hidden'}`}>
            {product.price > 70 ? `-${product.discountPercentage}%` : ''}
          </p>
          <p className={`${product.price > 70 ? 'font-light line-through' : 'font-bold'}`}>
            R$ {product.price}
          </p>
          <p className="font-bold">
            {product.price > 70 ? `R$ ${Math.round(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}` : ''}
          </p>
        </div>
      </Link>
    </li>
  )
}