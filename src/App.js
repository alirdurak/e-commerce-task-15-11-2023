import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
function App() {
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState();
  const addFav = async (i) => {
    try {
      const cat = cats.find((c) => c.id === i.kategori_id);

      await fetch(`http://localhost:3000/kategoriler/${i.kategori_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: cat.id,
          ad: cat.ad,
          FavCount: i.favorited ? cat.FavCount - 1 : cat.FavCount + 1,
        }),
      });

      await fetch(`http://localhost:3000/urunler/${i.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: i.id,
          ad: i.ad,
          fiyat: i.fiyat,
          kategori_id: i.kategori_id,
          resim: i.resim,
          favorited: !i.favorited,
        }),
      });

      fetchProducts();
      fetchCategories();
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

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
      <Products
        addFav={addFav}
        selectedCat={selectedCat}
        products={products}
      ></Products>
    </div>
  );
}

export default App;
