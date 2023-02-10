import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { users } from "./util/data";
import axios from "axios";

import "./styles/app.css";
import Main from "./components/Main";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Product from "./components/Product";
import Layout from "./components/Layout";


// products, loginState, username, cartItems, setCartItems
export const ProductsContext = createContext();
export const LoginContext = createContext();

function App() {
    const [loginState, setLoginState] = useState();
    const [username, setUserName] = useState("");
    const [products, setProducts] = useState('');
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:2020/products")
            .then(response => setProducts(response.data))
            .catch("error fetching")
    }, [])


    useEffect(() => {
        if (localStorage.getItem("loginState")) {
            setLoginState(localStorage.getItem("loginState"))

            // localStorage.getItem("userninfo") 
            //setCurrentuser()
            //no neeed for loginstate anymore

        }
    }, [])

    function loginChecker(userName, userPass) {
        console.log("input:", userName, userPass);
        users.map((user) => {
            if (user.username === userName && user.password === userPass) {
                setLoginState(true);
                setUserName(userName);
                // setCurrentUser(user) etc
                // localStorage.setItem("currentuser", user)
            }

        });
    }
    console.log(loginState);
    return (
        <div className="App">
            <ProductsContext.Provider value={{ products, username, cartItems, setCartItems }}>
                <LoginContext.Provider value={{ loginState }}>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/login" element={<Login loginChecker={loginChecker} />} />
                            {loginState && <Route path="/profile/:username" element={<Profile />} />}
                            <Route path="/product/:id" element={<Product />} />
                        </Routes>
                    </Layout>
                </LoginContext.Provider>
            </ProductsContext.Provider>
        </div >
    );
}

export default App;
