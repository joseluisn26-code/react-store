import { createContext, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const useCartContext = () => {
  return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(init)

  const agregarAlCarrito = (item) => {
    setCart([...cart, item])
  }

  const removerItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const emptycart = () => {
    setCart([])
  }

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  }

  const totalCantidad = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const checkout = () => {
    Swal.fire({
      icon: 'success',
      text: 'Revisa tu correo para continuar con la compra',
    }).then(function () {
      window.location.href = '/'
    })
    emptycart()
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        removerItem,
        isInCart,
        emptycart,
        totalCart,
        totalCantidad,
        checkout
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
