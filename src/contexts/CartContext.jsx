import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([])

  const addToCart = (product) => {
    setProductsCart((prev) => [...prev, product])
  }

  const removeCart = (product) => {
    setProductsCart((prev) => prev.filter((item) => item.id !== product.id))
  }

  const clearCart = () => {
    setProductsCart([])
  }

  return (
    <CartContext.Provider value={{ productsCart, addToCart, removeCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}