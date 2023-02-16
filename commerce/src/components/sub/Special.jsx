import "../../styles/body.css";
import CartIcon from "../../svg/CartIcon";
import { productsData } from "../../util/data";

import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react";

export default function Special() {
    const { products } = useContext(ProductsContext);

    function limitWords(str) {
        return str.split(' ').filter(function (num) {
            return num !== ''
        }).slice(0, 25).join(' ');
    }

    return <div>
        {products[0] && <div className="special">
            <div>
                <div className="specialBig">
                    <img src={products[0].image} alt="specialbig" />
                    <div>
                        <h3>{products[0].name}</h3>
                        <h4>${products[0].price}</h4>
                        <p>{products[0].description}</p>
                        <button className="specialBtn">Add to cart<span><CartIcon /></span></button>
                    </div>
                </div>
            </div>
            <div className="specialSmalls">
                <div className="specialSmall">
                    <img src={products[1].image} />
                    <div>
                        <p className="specialDate">Oct 2022</p>
                        <h3>{products[1].name}</h3>
                        <h4>${products[1].price}</h4>
                        <p>{limitWords(products[1].description)}...</p>
                        <p className="specialDecor">By space tech</p>
                    </div>
                </div>
                <div className="specialSmall">
                    <img src={products[2].image} />
                    <div>
                        <p className="specialDate">Oct 2022</p>
                        <h3>{products[2].name}</h3>
                        <h4>${products[2].price}</h4>
                        <p>{limitWords(products[2].description)}...</p>
                        <p className="specialDecor">By space tech</p>
                    </div>
                </div>
            </div>
        </div>
        }
    </div>
}