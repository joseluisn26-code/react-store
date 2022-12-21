import './ItemListContainer.css'

export const ItemListContainer = ({ greeting = "Bienvenido a nuestra tienda donde encontraras los mejores productos con los mejores precios, Cada día son más las personas que confían en nosotros ya que encuentran los mejores articulos para su hogar, equipos de computos, celulares, vestuario, equipos tecnológicos, muebles, accesorios y mucho más, entre muchos otros.\ Además de la amplia variedad de productos que tenemos disponibles, contamos con los mejores aliados, por tal motivo ofrecemos productos de excelente calidad y con la mejor garantía." }) => {

    return (
        <div className="h-100 p-5 text-bg-dark ">
            <div className="container-fluid py-5">
                <h1 className='display-5 fw-bold'>Jose Luis Shop</h1>
                <p className='class="col-md-8 fs-4"'>{greeting}</p>
            </div>
        </div>
    )
}