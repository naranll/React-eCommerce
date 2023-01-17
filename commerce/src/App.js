import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Product from "./components/sub/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={< Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
