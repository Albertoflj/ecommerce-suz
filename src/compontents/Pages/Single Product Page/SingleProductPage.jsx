import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ProductCard from "../../Main Page Components/Trending Now/Product/ProductCard";
import "./SingleProductPage.scss";
import "../../Filter/filter.scss";
import CartPlus from "../../../Assets/icons/icons/cart-plus.svg";
import { useState } from "react";
import { useEffect } from "react";
import {commerce} from "../../../lib/commerce.js"
import Sizes from "../../Sizes/Sizes";

const SingleProductPage = (props) => {
  let product = props.product;
  console.log(product);
  const [sizes, setSizes] = useState();
  async function fetchSizes(){
    await commerce.products.getVariants(product.id, {
     
    }).then((variants) => setSizes(variants.data));
  }
  useEffect(() => {
    fetchSizes();
    console.log("sizes",sizes)
    
  },[]);

  const [selectedSize, setSelectedSize] = useState();

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
              <Sizes for={"product"} category={product.categories[0].name} />
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
