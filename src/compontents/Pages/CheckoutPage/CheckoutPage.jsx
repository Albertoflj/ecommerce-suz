import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./checkoutpage.scss";
import { commerce } from "../../../lib/commerce";
import { useState, useEffect, useRef } from "react";
import ProductCard from "../../Main Page Components/Trending Now/Product/ProductCard";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { useSelector } from "react-redux";
const CheckoutPage = () => {
  const [lineItems, setLineItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartTotal, setCartTotal] = useState("$0");
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();
  const shippingAddressRef = useRef();
  const aptRef = useRef();
  const cartQuantity = useSelector(
    (state) => state.cartQuantity.cartItemsQuantity
  );

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(emailRef.current.value)) {
      alert("Enter valid email.");
      return;
    }
  };
  async function getCart() {
    const cartId = await commerce.cart.id();
    const cart = await commerce.cart.retrieve(cartId);
    const cartQuantity = cart.subtotal.formatted_with_symbol;
    const cartItems = cart.line_items;

    setLineItems(cartItems);
    setCartTotal(cart.subtotal.formatted_with_symbol);
  }
  useEffect(() => {
    getCart();
    setLoading(false);
  }, [cartQuantity]);

  return (
    <>
      <Header />
      <section className="my-cart padding">
        <h3 className="checkout-page-section-title">My cart</h3>
        <div className="checkout-cart">
          <div className="checkout-cart-products">
            {loading ? (
              <>Loading</>
            ) : lineItems && lineItems.length ? (
              lineItems.map((product) => {
                return (
                  <ProductCard product={product} for="cart" key={product.id} />
                );
              })
            ) : (
              <h1 className="cart-empty">Cart empty.</h1>
            )}
          </div>
          <h5 className="checkout-cart-total">{`Total: ${cartTotal}`}</h5>
        </div>
      </section>
      {lineItems && lineItems.length ? (
        <section className="shipping-details padding">
          <h3 className="checkout-page-section-title">Shipping details</h3>

          <form onSubmit={handleSubmit}>
            <div className="shipping-form">
              <div className="input-first-and-last-name">
                <div className="input-first-name input-div">
                  <label htmlFor="first-name">First Name</label>
                  <input required minLength={3} type="text" id="first-name" />
                </div>
                <div className="input-last-name input-div">
                  <label htmlFor="last-name">Last Name</label>
                  <input required type="text" id="last-name" />
                </div>
              </div>
              <div className="input-email input-div">
                <label htmlFor="email">Email</label>
                <input required ref={emailRef} type="text" id="email" />
              </div>
              <div className="input-country input-div">
                <label htmlFor="country">Country</label>
                <input required minLength={3} type="text" id="country" />
              </div>
              <div className="input-city-and-zip">
                <div className="input-city input-div">
                  <label htmlFor="city">City</label>
                  <input required minLength={3} type="text" id="city" />
                </div>
                <div className="input-zip-code input-div">
                  <label htmlFor="zip-code">Zip Code</label>
                  <input
                    required
                    minLength={6}
                    maxLength={6}
                    type="number"
                    id="zip-code"
                  />
                </div>
              </div>
              <div className="input-address input-div">
                <label htmlFor="address">Shipping Address</label>
                <input minLength={3} type="text" id="address" />
              </div>
              <div className="input-apt input-div">
                <div className="labels">
                  <label htmlFor="apt-suite-other">Apt / Suite / Other</label>
                  <label htmlFor="apt-suite-other" className="optional">
                    {" "}
                    (optional)
                  </label>
                </div>
                <input type="text" id="apt-suite-other" />
              </div>
            </div>
            <button className="continue-button" type="submit">
              Continue
            </button>
          </form>
        </section>
      ) : null}
      {/* <button className="continue-button">Continue</button> */}

      <Footer />
    </>
  );
};

export default CheckoutPage;
