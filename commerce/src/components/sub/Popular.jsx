import { useState, useContext } from "react";
import Card from "./Card";
import Categories from "./Categories";
import "../../styles/popular.css";

import { ProductsContext } from "../../contexts/ProductsContext";

export default function Popular() {
    const { products } = useContext(ProductsContext);
    const [currentCategory, setCurrentCategory] = useState("all");

    function filterArray(product) {
        return currentCategory === "all" ? true : product.category === currentCategory;
    }

    return <div className="popular">
        <Categories currentCategory={setCurrentCategory} chosen={currentCategory} />
        <div className="productsContainer">
            {[...products].filter(filterArray).map((product, i) => {
                return <Card product={product} key={i} />
            }).slice(0, 8)}
        </div>
    </div>
}

