import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./contexts/CartContext"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import CategoryProducts from "./pages/CategoryProducts"
import Product from "./pages/Product"
import Cart from "./pages/Cart"

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
