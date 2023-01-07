import './App.css';
import {data} from "./data"
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main data={data}/>
      <Footer />
    </div>
  );
}

export default App;
