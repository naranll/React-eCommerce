import { productsData } from "../../util/data";
import { useState } from "react";
import Cards from "./Cards";
import Categories from "./Categories";
import "../../styles/popular.css";


export default function Popular() {
    const [currentCategory, setCurrentCategory] = useState("all");
    // console.log("current catergory:", currentCategory);

    function filterArray(product) {
        return currentCategory === "all" ? true : product.category === currentCategory;
    }

    return <div className="popular">
        <Categories chosenCategory={setCurrentCategory} />
        <Cards chosenCategory={currentCategory} filteredArray={productsData.filter(filterArray)} />
    </div>
}

