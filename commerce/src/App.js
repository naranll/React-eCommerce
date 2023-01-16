import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<> <Header /><Body /></>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
