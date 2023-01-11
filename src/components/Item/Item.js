import { Link } from "react-router-dom"

const Item = ({ id, titulo, categoria, marca, genero, descripcion, imagen, precio }) => {

    return (
        <div className="col-sm-4 p-5 row">
            <div className="card bg-light text-dark p-3">
                
                <img className="rounded" src={imagen} />
                <h4 className="card-title text-center">{titulo}</h4>
                <h6 className="card-text">Categoria: {categoria}</h6>
                <h6 className="card-text">Genero: {genero}</h6>
                <h6 className="card-text">Marca: {marca}</h6>
                <h6 className="card-text">{descripcion}</h6>
                <p className="card-text">Precio: <b>{precio}</b></p>
                <Link to={`/detail/${id}`} className="btn btn-primary">Ver más</Link>
            </div>
        </div>
    )
}

export default Item
