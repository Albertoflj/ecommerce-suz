import "./App.css";
import "../src/compontents/main-styles/fonts/fonts.scss";
import "../src/compontents/Header/header.scss";
import "../src/compontents/main-styles/main.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";
import MainPage from "./compontents/Pages/MainPage/MainPage";
import ProductsPage from "./compontents/Pages/Products Page/ProductsPage";
import SingleProductPage from "./compontents/Pages/Single Product Page/SingleProductPage";
import { getCartItems } from "./redux/cartQuantitySlice";
import { useDispatch } from "react-redux";
import Favorites from "./compontents/Favorites/Favorites";
import CheckoutPage from "./compontents/Pages/CheckoutPage/CheckoutPage";
import Loader from "./compontents/Loader/Loader";
import AboutPage from "./compontents/Pages/AboutPage/AboutPage";

function App() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    dispatch(getCartItems());
  }, []);

  return (
    <HashRouter>
      <div className="App">
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<MainPage products={products} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/men"
              element={<ProductsPage products={products} category="m" />}
            />
            <Route
              path="/women"
              element={<ProductsPage products={products} category="w" />}
            />
            {products.map((product) => {
              return (
                <Route
                  path={`/product/${product.sku}`}
                  key={product.id}
                  element={
                    <SingleProductPage product={product} key={product.id} />
                  }
                />
              );
            })}
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        )}
      </div>
    </HashRouter>
  );
}

export default App;
