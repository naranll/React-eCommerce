import Slider from "./sub/Slider";
import Special from "./sub/Special";
import "../styles/body.css";
import Popular from "./sub/Popular";
import Brands from "../svg/Brands";
import { useState, useEffect, useContext } from "react";

import { ProductsContext } from "../App";

export default function Main() {

    const { products } = useContext(ProductsContext);

    return <div className="body">
        <Slider />
        <div className="main">
            <div>
                <Popular products={products} />
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