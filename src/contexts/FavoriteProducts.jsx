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

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const isFavorite = prev.some((item) => item.id === product.id)

      if (isFavorite) {
        //Remove se ja estiver nos favoritos
        return prev.filter((item) => item.id !== product.id)
      } else {
        //Adiciona se ainda não estiver
        return [...prev, product]
      }

    })
  }

  return (
    <FavoriteProducts.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteProducts.Provider>
  )
}