// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";
import Categories from "./Categories";
import "../../styles/popular.css";


export default function Popular(prop) {
    const { products, setProducts } = prop;
    const [currentCategory, setCurrentCategory] = useState("all");

    function filterArray(product) {
        return currentCategory === "all" ? true : product.category === currentCategory;
    }

    return <div className="popular">
        <Categories currentCategory={setCurrentCategory} chosen={currentCategory} />
        <div className="productsContainer">
            {products.filter(filterArray).map((product, i) => {
                return <Card product={product} key={i} />
            }).slice(0, 8)}
        </div>

    </div>
}

