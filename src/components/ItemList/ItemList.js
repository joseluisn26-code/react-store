import Item from "../Item/Item"
import ReactPaginate from 'react-paginate';


const ItemList = ({ productos }) => {

    return (
        <div className="container my-5">
            <h2>Nuestros productos</h2>
            <hr />

            <div className="row my-4">
                {productos.map((prod) => <Item key={prod.id} {...prod} />)}
                
            </div>
        </div >
    )
}
export default ItemList 