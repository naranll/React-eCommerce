import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            await axios
                .get("http://localhost:2020/products")
                .then((response) => {
                    setProducts(response.data);
                })
                .catch(() => console.log("error axios in ProductsContext"))
        }
        fetchProducts();
    }, [])

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:2020/products")
    //         .then((response) => setProducts(response.data))
    //         .catch("error fetching");
    // }, []);

    return <ProductsContext.Provider value={{ products, setProducts }}>
        {children}
    </ProductsContext.Provider>
}