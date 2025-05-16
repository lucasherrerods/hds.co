import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState(() => {
    const stored = localStorage.getItem('cart')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(productsCart))
  }, [productsCart])

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