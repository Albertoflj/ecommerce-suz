import { Link } from "react-router-dom";
import ProductCard from "../Main Page Components/Trending Now/Product/ProductCard";
import "./cart.scss";
import { useState } from "react";
import { commerce } from "../../lib/commerce";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [lineItems, setLineItems] = useState([]);
  const cartQuantity = useSelector(
    (state) => state.cartQuantity.cartItemsQuantity
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCart();
  }, [cartQuantity]);
  async function getCart() {
    const cartId = await commerce.cart.id();
    const cart = await commerce.cart.retrieve(cartId);
    const cartQuantity = cart.subtotal.formatted_with_symbol;
    const cartItems = cart.line_items;
    setLineItems(cartItems);
    setCartTotal(cartQuantity);
    setLoading(false);
  }

  return (
    <>
      <div className={`cart ${props.display}`}>
        {loading ? (
          <div className="cart">
            <div className="cart-container">
              <h3 className="cart-title">Cart</h3>
              <div className="cart-items">
                {lineItems.map((product) => {
                  return (
                    <ProductCard
                      product={product}
                      quantity={product.quantity}
                      className="product-list-item  "
                      for="cart"
                    />
                  );
                })}
              </div>
              <div className="cart-total">
                <h4 className="cart-total-name">Total:</h4>
                <h4 className="cart-total-price">{cartTotal}</h4>
              </div>
              <button className="cart-checkout">Checkout</button>
            </div>
          </div>
        ) : (
          <div className="cart">
            <div className="cart-container">
              <h3 className="cart-title">Cart</h3>
              <div className="cart-items">
                {lineItems.length === 0 ? (
                  <h3 className="cart-empty">Your cart is empty</h3>
                ) : (
                  lineItems.map((product) => {
                    // console.log("product", product);
                    return (
                      <ProductCard
                        product={product}
                        quantity={product.quantity}
                        className="product-list-item  "
                        for="cart"
                        key={product.id}
                      />
                    );
                  })
                )}
              </div>
              <div className="cart-total">
                <h4 className="cart-total-name">Total:</h4>
                <h4 className="cart-total-price">{cartTotal}</h4>
              </div>
              <Link to="/checkout" className="cart-checkout-link">
                <button className="cart-checkout">Checkout</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
