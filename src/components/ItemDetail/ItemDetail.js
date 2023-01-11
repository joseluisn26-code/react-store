import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({
  id,
  titulo,
  marca,
  categoria,
  referencia,
  genero,
  color,
  imagen,
  descripcion,
  precio,
  stock,
}) => {
  const [cantidad, setCantidad] = useState(1)

  const navigate = useNavigate()

  const handleVolver = () => {
    navigate(-1)
  }

  return (
    <div className="card w-50 p-3 mx-auto d-block">
      <h2 className="card-header text-center">{titulo}</h2>
      <div className="card-body">
        <img className="img-thumbnail mx-auto d-block" src={imagen} />
        <h3 className="card-title">Marca: {marca}</h3>
        <h5 className="card-text">Categoría: {categoria}</h5>
        <h6 className="card-text">Referencia: {referencia}</h6>
        <h6 className="card-text">Genero: {genero}</h6>
        <h6 className="card-text">Color: {color}</h6>
        <h6 className="card-text">{descripcion}</h6>
        <h6 className="card-text">Disponibilidad de Stock:{stock}</h6>
        <h5 className="card-text">Precio: ${precio}</h5>
      </div>

      <div class="card-footer text-center">
        <button className="btn btn-primary btn-lg" onClick={handleVolver}>
          Volver
        </button>
      </div>
    </div>
  )
}

export default ItemDetail
