// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/cards.css";
import ShopIcon from "../../svg/ShopIcon"


export default function Cards(prop) {
    const { filteredArray } = prop;
    const navigate = useNavigate();

    function onSale(product) {
        return (product.price * (1 - product.sale / 100)).toFixed(2);
    }

    return <div className="productsContainer">
        {(filteredArray.map((product, i) => {
            return <div key={i} className="productsCard">
                {product.sale > 0 ? <div className="saleTag">Sale {product.sale}% off </div> : ''}

                <img className="productsImg" src={product.image} />
                <h5>{product.name}</h5>

                {product.sale > 0 ? <div className="salePrice">${onSale(product)}<span className="origPrice">${product.price}</span></div> : <div>${product.price}</div>}

                <div className="shopIcon" onClick={() => {
                    navigate(`product/${product.id}`)
                }}>
                    <ShopIcon />
                </div>

            </div>
        })).slice(0, 8)}
    </div>
}
