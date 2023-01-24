import Slider from "./sub/Slider";
import Special from "./sub/Special";
import "../styles/body.css";
import Popular from "./sub/Popular";
import Brands from "../svg/Brands";
import { productsData } from "../util/data";
import { useState } from "react";

export default function Main() {
    const [products, setProducts] = useState(productsData);

    return <div className="body">
        <Slider />
        <div className="main">
            <div>
                <Popular products={products} setProducts={setProducts} />
            </div>
            <div>
                <img src="./poster.png" alt="poster" className="poster" />
            </div>
            <Special />
            <div className="brands">
                <Brands />
            </div>
        </div>
    </div>
}