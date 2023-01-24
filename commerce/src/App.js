import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { users } from "./util/data";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProdPage from "./components/ProdPage";
import "./styles/app.css";

function App() {
  const [loginState, setLoginState] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function loginChecker(userName, userPass) {
    console.log("input:", userName, userPass);
    users.map((user) => {
      if (user.username === userName && user.password === userPass) {
        setLoginState(true);
        setUserName(userName);
        setPassword(userPass);
      }
    });
  }

  return (
    <div className="App">
      <Header loginState={loginState} username={username} />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login loginChecker={loginChecker} loginState={loginState} />} />
        <Route path="/profile/:id" element={<Profile username={username} />} />
        <Route path="/product/:id" element={<ProdPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
