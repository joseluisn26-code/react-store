import Item from "../Item/Item"
import ReactPaginate from 'react-paginate';


const ItemList = ({ productos }) => {

    return (
        <div className="container my-5">
            <h2>Nuestros productos</h2>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom"></div>
            <div className="row my-4">
                {productos.map((prod) => <Item key={prod.id} {...prod} />)}
                
            </div>
        </div >
    )
}
export default ItemList 