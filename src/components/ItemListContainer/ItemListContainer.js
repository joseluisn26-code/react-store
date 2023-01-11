import { useEffect, useState } from "react"

import { pedirDatos } from "../../helpers/pedirDatos"
import Aside from "../Aside/Aside"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'

import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting = "Bienvenido a nuestra tienda donde encontraras los mejores productos con los mejores precios, Cada día son más las personas que confían en nosotros ya que encuentran los mejores articulos para su hogar, equipos de computos, celulares, vestuario, equipos tecnológicos, muebles, accesorios y mucho más, entre muchos otros.\ Además de la amplia variedad de productos que tenemos disponibles, contamos con los mejores aliados, por tal motivo ofrecemos productos de excelente calidad y con la mejor garantía." }) => {

    const [productos, setProductos] = useState([]);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);
    const { categoryId } = useParams()

  

    const handleClick = (e) => {
        setcurrentPage(Number(e.target.id));
    }

    const pages = [];

    for(let i=1; i<=Math.ceil(productos.length/itemsPerPage); i++){
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);
    
    const renderPageNumbers = pages.map(number =>{
        return (
            <li key={number} id={number} onClick={handleClick} className={currentPage == number ? "active" : null}>
                {number}
            </li>
        )
    })

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoryId) {
                    setProductos( res.filter(prod => prod.categoria === categoryId) )
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId])

    return (
        <div className="h-100 p-5 text-bg-dark ">
            <div className="container-fluid py-5">
                <div class="row">
                    <h1 className='display-5 fw-bold text-center'>Jose Luis Shop</h1>
                    <p className='class="col-md-8 fs-4"'>{greeting}</p>
                    <div class="col-md-3 fs-4">
                        <Aside/>
                    </div>
                    <div class="col-md-9 fs-4">
                        <ItemList productos={productos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer