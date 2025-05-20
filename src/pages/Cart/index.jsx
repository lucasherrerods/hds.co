import Fade from "../../components/Fade"
import Header from "../../components/Header"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Trash } from "lucide-react"

export default function Cart() {
  const { productsCart, removeCart } = useContext(CartContext)

  const subTotal = productsCart.reduce((acc, item) => acc + item.price, 0)

  const discount = () => {
    const product = productsCart.filter((item) => item.price > 70)
    const percentage = product.map((item) => item.discountPercentage)
    const totalDiscount = percentage.reduce((acc, sum) => acc + sum, 0)

    return totalDiscount
  }

  return (
    <Fade>
      <Header />
      <div className="flex flex-col gap-16 md:flex-row md:justify-between py-12 px-6 md:px-28 min-h-screen">
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-bold mb-6">Seu carrinho</h1>
          {productsCart.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <ul className="flex flex-col gap-6">
              {productsCart.map((item) => (
                <li key={item.id} className="relative flex items-center gap-6 p-4 border-b-2 border-gray-200 bg-white">
                  <img src={item.thumbnail} alt={item.title} className="w-28 h-28 object-cover rounded-md bg-gray-100" />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 capitalize">
                      {item.brand}
                    </p>
                    <div className={`flex items-center gap-4 tracking-wide ${item.price > 70 ? 'justify-end flex-row-reverse' : ''}`}>
                      {item.price > 70 && (
                        <p className="text-red-500 font-semibold text-xs">
                          -{item.discountPercentage}%
                        </p>
                      )}
                      <p className={`${item.price > 70 ? 'font-light text-gray-400 line-through' : 'font-bold text-gray-900'}`}>
                        R$ {item.price}
                      </p>
                      {item.price > 70 && (
                        <p className="font-bold text-gray-900">
                          R$ {Math.round(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                  <Trash onClick={() => removeCart(item)} size={18} className="absolute right-4 top-4 text-red-500 font-bold cursor-pointer transition-all duration-200 hover:-translate-y-1" />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-6">Pedido</h2>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 space-y-4">
            <div className="flex justify-between text-gray-600 text-sm">
              <span>Subtotal</span>
              <span>R$ {subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 text-sm">
              <span>Desconto</span>
              <span className="text-red-500">- R$ {discount()}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-gray-900 font-semibold text-base">
              <span>Total</span>
              <span>R$ {(subTotal - discount()).toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 text-white bg-black rounded-lg cursor-pointer transition duration-300 hover:scale-105 py-2 font-medium ">
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </Fade>
  )
}