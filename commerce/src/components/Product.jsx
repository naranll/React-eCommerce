import { useParams } from "react-router-dom"
import { ProductsContext } from "../contexts/ProductsContext";
import { BasketContext } from "../App";
import { useContext } from "react";

export default function Product() {
    const { id } = useParams();
    const { products } = useContext(ProductsContext);
    const { setCartItems } = useContext(BasketContext);


    function checkSale(object) {
        let newPrice;
        if (object.sale > 0) {
            newPrice = object.price * (1 - object.sale / 100);
            return newPrice;
        }
    }

    return <div>
        {products.map((chosenProduct, i) => {
            if (chosenProduct.id == id) {
                return <div key={i} className="productImg">
                    <img src={chosenProduct.image} />
                    <div>
                        <button onClick={() => setCartItems(prev => [...prev, chosenProduct.id])}>
                            Add to cart</button>
                    </div>

                    <div className="productInfo">
                        {chosenProduct.sale == 0 ? <h2>Price: ${chosenProduct.price}</h2> : <div><h2>Price: ${checkSale(chosenProduct)}<span>(-{chosenProduct.sale}%)</span></h2> <div>Original: ${chosenProduct.price}</div></div>}
                        <ul>
                            <li>{chosenProduct.name}</li>
                            <li>{chosenProduct.description}</li>
                            <li>{chosenProduct.stock}</li>
                        </ul>
                        Specs
                        <ul>
                            {chosenProduct.spec.map((specObj, i) => {
                                for (let prop in specObj) {
                                    // console.log(prop, ":", specObj[prop]);
                                    return <li key={i}>{prop} : {specObj[prop]}</li>
                                }
                            })}
                        </ul>
                    </div>
                </div>
            }
        })}
    </div>
}
