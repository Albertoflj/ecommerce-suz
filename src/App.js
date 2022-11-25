import "./App.css";
import Header from "./compontents/Header/Header";
import "../src/compontents/main-styles/fonts/fonts.scss";
import "../src/compontents/Header/header.scss";
import "../src/compontents/main-styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";
import MainPage from "./compontents/Pages/MainPage/MainPage";

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
            <Route path="/men" element={<Header products={products} />} />
            <Route path="/women" element={<Header products={products} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
