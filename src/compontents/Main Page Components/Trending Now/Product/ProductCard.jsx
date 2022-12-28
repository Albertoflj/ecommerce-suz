import { useEffect } from "react";
import { useState } from "react";
import CloseIcon from "../../../../Assets/icons/icons/close-icon.png";
import { commerce } from "../../../../lib/commerce";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const [product, setProduct] = useState(props.product);
  const [productCategory, setProductCategory] = useState("");
  const [isCart, setIsCart] = useState(false);
  async function getProductCategory() {
    const prodCategory = await commerce.products.retrieve(product.product_id);
    setProductCategory(prodCategory.categories[0].name);
  }
  function removeProductFromCart(cart) {
    cart
      ? commerce.cart
          .remove(product.id)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          })
      : console.log("no cart");
  }

  useEffect(() => {
    if (props.for === "cart") {
      getProductCategory();
      setIsCart(true);
    } else {
      setProductCategory(product.categories[0].name);
    }
  }, []);

  return (
    <div className="trending-product-card">
      <img
        src={product.image.url}
        alt="product1"
        className="trending-product-image"
      />
      <div className="trending-product-text">
        <Link to={`/product/${product.sku}`}>
          <h3 className="trending-product-title">{product.name}</h3>
        </Link>

        <h6 className="trending-product-category">{productCategory}</h6>
        <div className="cart-quantity">
          <h5>Quantity: </h5>
          {/* 
          maybe should be input button
          */}
          <h5>{props.quantity}</h5>
        </div>
        <h4 className="trending-product-price">
          {product.price.formatted_with_symbol}
        </h4>
      </div>
      <div
        className="trending-product-close-icon"
        onClick={() => {
          removeProductFromCart(isCart);
        }}
      >
        <img src={CloseIcon} alt="closeicon" />
      </div>
    </div>
  );
};

export default ProductCard;
