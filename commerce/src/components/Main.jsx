import Slider from "./sub/Slider";
import Special from "./sub/Special";
import "../styles/body.css";
import Popular from "./sub/Popular";
import Brands from "../svg/Brands";
// import { productsData } from "../util/data";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Main(prop) {
    // const [products, setProducts] = useState(productsData);
    const { products, setProducts } = prop;

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