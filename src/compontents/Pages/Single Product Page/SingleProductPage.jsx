import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ProductCard from "../../Main Page Components/Trending Now/Product/ProductCard";
import "./SingleProductPage.scss";
import "../../Filter/filter.scss";
import CartPlus from "../../../Assets/icons/icons/cart-plus.svg";
import { useState } from "react";
import { useEffect } from "react";

const SingleProductPage = (props) => {
  let product = props.product;
  console.log(product);
  //   let description = product.description.replace(/<\/?p>/g, '');;
  useEffect(() => {
    //fetch product variants

    fetch(`https://api.chec.io/v1/products/${product.id}/variants`, {
      method: "GET",
      headers: {
        "X-Authorization": "pk_48662fc4a85df6bd1b5a1276f4d59d3162e714bd1e2e4",
      },
    }).then((data) => {
      console.log(data);
    });
  });
  // console.log(JSON.stringify(product));
  const [selectedSize, setSelectedSize] = useState();
  function onSelectedSize(buttonValue) {
    setSelectedSize(buttonValue);
  }
  //cum selectez cu i item din array daca am useState

  return (
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
              <h5 className="product-category">{product.categories[0].name}</h5>
              <h5>{product.price.formatted_with_symbol}</h5>
              <p>{product.description.replace(/<\/?p>/g, "")}</p>
            </div>
            <div className="product-actions">
              <div className="filter-sizes product-size">
                {/* 
                //!!SHOULD BE A SEPARATE COMPONENT
                */}
                <div className="filter-sizes-checkboxes product-sizes-checkboxes">
                  <input
                    type="checkbox"
                    name="size-40"
                    id="size40"
                    className="filter-sizes-checkbox product-size-checkbox"
                    value="40"
                    checked={selectedSize === "40"}
                    onChange={(e) => {
                      onSelectedSize(e.target.value);
                    }}
                  />
                  <input
                    type="checkbox"
                    name="size-41"
                    id="size41"
                    className="filter-sizes-checkbox product-size-checkbox"
                    value="41"
                    disabled
                  />
                  <input
                    type="checkbox"
                    name="size-42"
                    id="size42"
                    className="filter-sizes-checkbox product-size-checkbox"
                    value="42"
                    checked={selectedSize === "42"}
                    onChange={(e) => {
                      onSelectedSize(e.target.value);
                    }}
                  />
                  <input
                    type="checkbox"
                    name="size-43"
                    id="size43"
                    className="filter-sizes-checkbox product-size-checkbox"
                    value="43"
                    checked={selectedSize === "43"}
                    onChange={(e) => {
                      onSelectedSize(e.target.value);
                    }}
                  />
                  <input
                    type="checkbox"
                    name="size-44"
                    id="size44"
                    className="filter-sizes-checkbox product-size-checkbox"
                    value="44"
                    checked={selectedSize === "44"}
                    onChange={(e) => {
                      onSelectedSize(e.target.value);
                    }}
                  />
                  <input
                    type="checkbox"
                    name="size-45"
                    id="size45"
                    className="filter-sizes-checkbox product-size-checkbox"
                    value="45"
                    checked={selectedSize === "45"}
                    onChange={(e) => {
                      onSelectedSize(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* <div className="quantity">
                <h3>Quantity:</h3>
                <input type="text" />
              </div> */}
              <div className="add-cart-favorites">
                <button className="add-to-cart">
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
                <button className="add-to-favorites">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SingleProductPage;
