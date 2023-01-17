import { productsData } from "../../util/data";
import { useNavigate } from "react-router-dom";
import "../../styles/popular.css";
import ShopIcon from "../../svg/ShopIcon"


export default function Popular() {
    const navigate = useNavigate();
    return <div className="products">
        {productsData.map((product, i) => {
            // console.log(i, product);
            return <div key={i} className="productsCard">
                <img className="productsImg" src={product.image} />
                <h5>{product.name}</h5>
                <p>${product.price}</p>
                <div className="shopIcon" onClick={() => {
                    navigate(`product/${product.id}`)
                }}>
                    <ShopIcon />
                </div>
            </div>
        })}
    </div>
}