import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CategoryProducts from "./pages/CategoryProducts"
import Product from "./pages/Product"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App