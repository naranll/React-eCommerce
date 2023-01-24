import { useNavigate } from "react-router-dom";
import "../../styles/cards.css";
import ShopIcon from "../../svg/ShopIcon";


export default function Card(prop) {
    const { product } = prop;
    const navigate = useNavigate();

    function onSale(product) {
        return (product.price * (1 - product.sale / 100)).toFixed(2);
    }

    return <div className="productsCard" onClick={() => { navigate(`product/${product.id}`) }}>
        {product.sale > 0 ? <div className="saleTag">Sale {product.sale}% off </div> : ''}

        <img className="productImg" src={product.image} />
        <h5>{product.name}</h5>

        {product.sale > 0 ? <div className="salePrice">${onSale(product)}<div className="origPrice">${product.price}</div></div> : <div>${product.price}</div>}

        <div className="shopIcon" >
            <ShopIcon />
        </div>

    </div>
}