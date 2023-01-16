import { products } from "../../util/data";
import "../../styles/popular.css";

export default function Popular() {

    return <div className="popular">
        {products.map((product, i) => {
            console.log(i, product);
            return <div id={i}>
                <img className="prodImg" src={product.image} />
            </div>
        })}
    </div>
}