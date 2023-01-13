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
import SingleProductPage from "./compontents/Pages/Single Product Page/SingleProductPage";
import { getCartItems } from "./redux/cartQuantitySlice";
import { useDispatch } from "react-redux";
import AddToCartNotification from "./compontents/AddToCartNotification/AddToCartNotification";
import Cart from "./compontents/Cart/Cart";
import Favorites from "./compontents/Favorites/Favorites";
import Sort from "./compontents/Sort/Sort";
import CheckoutPage from "./compontents/Pages/CheckoutPage/CheckoutPage";
import Loader from "./compontents/Loader/Loader";

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
    <Router>
      <div className="App">
        {isLoading ? (
          <Loader />
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
            {/* <Route path="/filter" element={<Filter />} />
            <Route path="/sort" element={<Sort />} /> */}

            {/* <Route path="/product/AF1L" element={<Filter />} />*/}
            {/* <Route path="/pr" element={<PriceRange />} /> */}
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
            {/* <Route path="/notification" element={<AddToCartNotification />} /> */}
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
