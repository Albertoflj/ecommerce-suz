import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./SingleProductPage.scss";
import "../../Filter/filter.scss";
import { useState, useEffect, useRef } from "react";
import { commerce } from "../../../lib/commerce";
import Sizes from "../../Sizes/Sizes";
import Loader from "../../Loader/Loader";
import { useDispatch } from "react-redux";
import { getCartItems } from "../../../redux/cartQuantitySlice";
import { finished } from "stream-browserify";

const SingleProductPage = (props) => {
  let product = props.product;
  const [variants, setVariants] = useState();
  const [loading, setLoading] = useState(true);
  const quantityRef = useRef();
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const selectSize = (size) => {
    setIsSizeSelected(size);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    fetchVariants();
  }, []);
  const url = new URL(
    `https://api.chec.io/v1/products/${product.id}/variant_groups/`
  );

  const headers = {
    "X-Authorization": process.env.REACT_APP_CHEC_PUBLIC_KEY,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const fetchVariants = async () => {
    await fetch(url, {
      method: "GET",
      headers: headers,
    }).then((response) =>
      response.json().then((res) => {
        if (res.data[0].name === "Size") {
          setVariants(res.data[0].options);
        }
      })
    );
    setLoading(false);
  };

  const addToCart = async (productId, quantity) => {
    await commerce.cart.add(productId, quantity);
    console.log(finished);
    dispatch(getCartItems());
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="product-main padding">
            <div className="product-main-content">
              <div className="product-image">
                <img src={product.image.url} alt="product" />
              </div>
              <div className="product-details-actions">
                <div className="product-details">
                  <h4>{product.name}</h4>
                  <h5 className="product-category">
                    {product.categories[0].name}
                  </h5>
                  <h5>{product.price.formatted_with_symbol}</h5>
                  <p>{product.description.replace(/<\/?p>/g, "")}</p>
                </div>
                <div className="product-actions">
                  <div className="filter-sizes product-size">
                    <Sizes
                      key={"sizesProduct"}
                      for="product"
                      category={product.categories[0].name}
                      variants={variants}
                      isSizeSelected={selectSize}
                    />
                  </div>
                  <div className="quantity">
                    <h3>Quantity:</h3>
                    <input
                      ref={quantityRef}
                      type="number"
                      max={30}
                      defaultValue={1}
                      min={1}
                    />
                  </div>
                  <div className="add-cart-favorites">
                    <button
                      className="add-to-cart"
                      onClick={() => {
                        isSizeSelected
                          ? addToCart(product.id, quantityRef.current.value)
                          : alert("Please select a size");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-cart-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </button>
                    <div className="space"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default SingleProductPage;
