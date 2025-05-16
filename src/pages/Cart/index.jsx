import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export default function Cart() {
  const { productsCart } = useContext(CartContext)

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      {productsCart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {productsCart.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}