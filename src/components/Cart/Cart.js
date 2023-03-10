import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, emptycart, totalCart, removerItem, checkout } = useContext(CartContext)

  if (cart.length === 0) {
    return (
        <div className="card w-50 my-5 p-3 mx-auto d-block">
            <h2 className="card-header text-center">Tu carrito está vacío</h2>
            <div className="card-body">
              <p className="card-text">Regresa cuando tengas algun producto agregado</p>
            </div>
            <div class="card-footer text-center">
              <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        </div>
    )
}

  return (
    <div className="container">
      <div class="card w-50 my-5 p-3 mx-auto d-block">
        <h2>Tu compra</h2>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"></div>

        {cart.map((item) => (
          <div key={item.id}>
            <div class="row">
              <div class="col-sm-8">
                <h4>{item.titulo}</h4>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio: ${item.precio * item.cantidad}</p>
              </div>
              <div class="col-sm-4">
                <img
                  className="img-thumbnail mx-auto d-block"
                  src={item.imagen}
                />
              </div>
            </div>
            <button
              onClick={() => removerItem(item.id)}
              className="btn btn-outline-danger"
            >
              <FaTrashAlt />
            </button>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"></div>
          </div>
        ))}

        <h4>Total: ${totalCart()}</h4>
        <div className="row">
          <div class="col p-3 d-flex justify-content-sm-center">
            <button
              className="btn btn-danger"
              onClick={emptycart}
            >
              Vaciar carrito
            </button>
          </div>
          <div class="col p-3 d-flex justify-content-sm-center">
            <button
              className="btn btn-success "
              onClick={checkout}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
