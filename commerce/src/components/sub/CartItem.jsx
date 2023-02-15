import "../../styles/cartModal.css";
import CloseButton from "react-bootstrap/esm/CloseButton";

export default function CartItem(prop) {
    const { cartItem, onRemove, itemIndex } = prop;
    return <div className="cart-item">
        <img src={cartItem.image} className="cart-item-img" />
        <div>
            <h5>{cartItem.name}</h5>
            <p>Quantity: {cartItem.stock}</p>
            <p>Price: {cartItem.price}</p>
        </div>
        <CloseButton onClick={() => onRemove(itemIndex)} />
    </div>
}