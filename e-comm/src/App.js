import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductInfo from "./components/ProductInfo";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <NavBar className="navbar" />
      <div className="prod">
      <Products className="products"/>
      <ProductInfo className="products-info" />
      </div>
      
    </div>
  );
}

export default App;
