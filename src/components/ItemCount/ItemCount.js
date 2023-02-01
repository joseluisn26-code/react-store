import { useState } from "react"



const ItemCount = ({cantidad, setCantidad, max, onAdd}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div class="row">
           <div class="col p-3 justify-content-sm-center">
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
                <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
           </div>
           <div class="col  d-flex justify-content-sm-center">
                <button className="btn btn-success my-3 mx-3" onClick={onAdd}>Agregar al carrito</button>
           </div>
        </div>
    )
}

export default ItemCount