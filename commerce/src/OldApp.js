import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProdPage from "./components/Product";
import "./styles/app.css";

import { users } from "./util/data";
import axios from "axios";

function App() {
  const [loginState, setLoginState] = useState(false);
  const [username, setUserName] = useState("");
  const [buyCount, setBuyCount] = useState(0);
  const [products, setProducts] = useState('');


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
        // setPassword(userPass);
      }
    });
  }

  // function coundHandler() { }

  return (
    <div className="App">
      <Header loginState={loginState} username={username} />
      <Routes>
        <Route path="/" element={<Main products={products} setProducts={setProducts} />} />
        <Route path="/login" element={<Login loginChecker={loginChecker} loginState={loginState} />} />
        <Route path="/profile/:id" element={<Profile username={username} />} />
        <Route path="/product/:id" element={<ProdPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
