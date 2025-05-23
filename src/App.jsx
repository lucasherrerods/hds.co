import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./contexts/CartContext"
import { FavoriteProductsProvider } from "./contexts/FavoriteProducts"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import About from "./pages/About"
import CategoryProducts from "./pages/CategoryProducts"
import Product from "./pages/Product"
import Cart from "./pages/Cart"

function App() {

  return (
    <CartProvider>
      <FavoriteProductsProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:category" element={<CategoryProducts />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </FavoriteProductsProvider>
    </CartProvider>
  )
}

export default App
