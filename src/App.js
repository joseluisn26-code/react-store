import { Navbar } from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { CartProvider } from './context/CartContext'
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/productos/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
