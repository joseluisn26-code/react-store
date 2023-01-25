import './CartWidget.css'
import { FaCartArrowDown } from "react-icons/fa";
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalCantidad, cart } = useCartContext()
    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <FaCartArrowDown /><span>{totalCantidad()}</span>
            <div className="qty-display"></div>
        </Link>
    );
};

export default CartWidget;