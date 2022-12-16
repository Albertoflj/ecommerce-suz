import "./App.css";
import Header from "./compontents/Header/Header";
import "../src/compontents/main-styles/fonts/fonts.scss";
import "../src/compontents/Header/header.scss";
import "../src/compontents/main-styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";
import MainPage from "./compontents/Pages/MainPage/MainPage";
import ProductsPage from "./compontents/Pages/Products Page/ProductsPage";
import Filter from "./compontents/Filter/Filter";
import PriceRange from "./compontents/Filter/Price Range/PriceRange";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes>
            <Route path="/" element={<MainPage products={products} />} />
            <Route path="/about" element={<Header products={products} />} />
            <Route
              path="/men"
              element={<ProductsPage products={products} category="m" />}
            />
            <Route
              path="/women"
              element={<ProductsPage products={products} category="w" />}
            />
            <Route path="/product/AF1L" element={<Filter />} />
            <Route path="/product/NDHR" element={<PriceRange />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
