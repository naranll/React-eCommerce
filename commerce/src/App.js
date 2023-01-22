import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProdPage from "./components/ProdPage";
import "./styles/app.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:name" element={<Profile />}/>
        <Route path="/product/:id" element={< ProdPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
