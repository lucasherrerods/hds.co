import { createContext, useState, useEffect } from "react";

export const FavoriteProducts = createContext()

export function FavoriteProductsProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (product) => {
    setFavorites((prev) => [...prev, product])
  }

  const removeFavorite = (product) => {
    setFavorites((prev) => prev.filter((item) => item.id !== product.id))
  }

  return (
    <FavoriteProducts.Provider value={{ favorites, addToFavorites, removeFavorite }}>
      {children}
    </FavoriteProducts.Provider>
  )
}