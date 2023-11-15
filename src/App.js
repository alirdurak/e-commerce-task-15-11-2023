import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
function App() {
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState();

  const fetchProducts = () => {
    fetch("http://localhost:3000/urunler")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const fetchCategories = () => {
    fetch("http://localhost:3000/kategoriler")
      .then((res) => res.json())
      .then((data) => setCats(data));
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return (
    <div className="App">
      <NavBar setSelectedCat={setSelectedCat} cats={cats}></NavBar>
      <Banner products={products}></Banner>
      <Products selectedCat={selectedCat} products={products}></Products>
    </div>
  );
}

export default App;
