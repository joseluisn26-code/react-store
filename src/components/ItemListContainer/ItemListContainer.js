import { useEffect, useState } from 'react'

import { pedirDatos } from '../../helpers/pedirDatos'
import Aside from '../Aside/Aside'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({
  greeting = 'Bienvenido a nuestra tienda donde encontraras los mejores productos con los mejores precios, Cada día son más las personas que confían en nosotros ya que encuentran los mejores articulos para su hogar, equipos de computos, celulares, vestuario, equipos tecnológicos, muebles, accesorios y mucho más, entre muchos otros. Además de la amplia variedad de productos que tenemos disponibles, contamos con los mejores aliados, por tal motivo ofrecemos productos de excelente calidad y con la mejor garantía.',
}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const productosRef = collection(db, 'productos')
    const q = categoryId
      ? query(productosRef, where('categoria', '==', categoryId))
      : productosRef
    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            }
          }),
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  return (
    <div className="h-100 p-5 text-bg-dark ">
      <div className="container-fluid py-5">
        <div class="row">
          <h1 className="display-5 fw-bold text-center">Jose Luis Shop</h1>
          <p className='class="col-md-8 fs-4"'>{greeting}</p>
          <div class="col-md-3 fs-4">
            <Aside />
          </div>
          <div class="col-md-9 fs-4">
            {loading ? (
              <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div
                  class="spinner-border ms-auto"
                  role="status"
                  aria-hidden="true"
                ></div>
              </div>
            ) : (
              <ItemList productos={productos} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer
