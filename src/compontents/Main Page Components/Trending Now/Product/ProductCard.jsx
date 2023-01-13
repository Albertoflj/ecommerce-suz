import { useEffect } from "react";
import { useState } from "react";
import CloseIcon from "../../../../Assets/icons/icons/close-icon.png";
import { commerce } from "../../../../lib/commerce";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCartItems } from "../../../../redux/cartQuantitySlice";

const ProductCard = (props) => {
  const [product, setProduct] = useState(props.product);
  const [productCategory, setProductCategory] = useState("");
  const [isCart, setIsCart] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);
  const dispatch = useDispatch();

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
    dispatch(getCartItems());
  }
  function removeProductFromFavorites() {}
  useEffect(() => {
    setProduct(props.product);
    if (props.for === "cart") {
      getProductCategory();
      setIsCart(true);
    } else if (props.for === "favorites") {
      getProductCategory();
      setIsFavorites(true);
    } else {
      setProductCategory(product.categories[0].name);
    }
  }, [product]);

  return (
    <div className="trending-product-card">
      <img
        src={product.image.url}
        alt="product1"
        className="trending-product-image"
      />
      <div className="trending-product-text">
        {isCart || isFavorites ? (
          <Link to={`/product/${product.sku}`}>
            <h3 className="trending-product-title">{product.name}</h3>
          </Link>
        ) : (
          <h3 className="trending-product-title">{product.name}</h3>
        )}

        <h6 className="trending-product-category">{productCategory}</h6>
        <div className="cart-quantity">
          <h5>Quantity: </h5>
          {/* 
          maybe should be input button
          */}
          <h5>{product.quantity}</h5>
        </div>
        <h4 className="trending-product-price">
          {product.price.formatted_with_symbol}
        </h4>
      </div>
      <div
        className="trending-product-close-icon"
        onClick={() => {
          if (isCart) {
            removeProductFromCart(true);
          } else if (isFavorites) {
            removeProductFromFavorites();
          }
        }}
      >
        <img src={CloseIcon} alt="closeicon" />
      </div>
    </div>
  );
};

export default ProductCard;
