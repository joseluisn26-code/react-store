import './CartWidget.css'
import { FaCartArrowDown } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaCartArrowDown />0
            <div className="qty-display"></div>
        </div>
    );
};

export default CartWidget;