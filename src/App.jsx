import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CategoryProducts from "./pages/CategoryProducts"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<CategoryProducts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App