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

export const BasketContext = createContext();
export const UserContext = createContext();

function App() {
    const [currentUser, setCurrentUser] = useState();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
            if (localStorage.getItem("cartItems")) {
                setCartItems(JSON.parse(localStorage.getItem("cartItems")));
            }
        } else {
            console.log("logout");
        }
    }, []);

    function loginChecker(userName, userPass) {
        console.log("input:", userName, userPass);
        users.map((user) => {
            if (user.username === userName && user.password === userPass) {
                setCurrentUser(user);
                localStorage.setItem("currentUser", JSON.stringify(user));
                // localStorage.setItem("cartItems", JSON.stringify([]));
            }
        });
    }

    useEffect(() => {
        if (cartItems) localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // console.log("cartItems: ", cartItems);

    return (
        <div className="App">
            <BasketContext.Provider value={{ cartItems, setCartItems }}>
                <UserContext.Provider value={{ setCurrentUser, currentUser }}>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route
                                path="/login"
                                element={<Login loginChecker={loginChecker} />}
                            />
                            {currentUser && (
                                <Route path="/profile/:id" element={<Profile />} />
                            )}
                            <Route path="/product/:id" element={<Product />} />
                        </Routes>
                    </Layout>
                </UserContext.Provider>
            </BasketContext.Provider>
        </div>
    );
}

export default App;
