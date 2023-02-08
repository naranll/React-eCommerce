import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Main from "./components/Main";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProdPage from "./components/ProdPage";
import "./styles/app.css";

import { users } from "./util/data";
import axios from "axios";

import { useContext, createContext } from 'react';
import Layout from "./Layout";

export const AllContext = createContext();

function NewApp() {
    const [loginState, setLoginState] = useState(false);
    const [username, setUserName] = useState("");
    const [buyCount, setBuyCount] = useState(0);
    const [products, setProducts] = useState('');

    localStorage.setItem("loginState", loginState);


    useEffect(() => {
        axios.get("http://localhost:2020/products")
            .then(response => setProducts(response.data))
            .catch("error fetching")
    }, [])

    function loginChecker(userName, userPass) {
        console.log("input:", userName, userPass);
        users.map((user) => {
            if (user.username === userName && user.password === userPass) {
                setLoginState(true);
                setUserName(userName);
            }
        });
    }

    return (
        <div className="App">
            <AllContext.Provider value={{ products, loginState, username }}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<Login loginChecker={loginChecker} />} />
                        <Route path="/profile/:id" element={<Profile username={username} />} />
                        <Route path="/product/:id" element={<ProdPage />} />
                    </Routes>
                </Layout>
            </AllContext.Provider>
        </div >
    );
}

export default NewApp;
