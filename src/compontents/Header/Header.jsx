import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { AppBar, Toolbar, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import "../Header/header.scss";
import CloseIcon from "../../Assets/icons/icons/close-icon.png";

//icons
import cart from "../../Assets/icons/icons/cart2.svg";
// import Badge from "../Badge/Badge";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cart from "../Cart/Cart";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartDisplay, setCartDisplay] = useState("dnon");
  const cartQty = useSelector((state) => state.cartQuantity.cartItemsQuantity);
  useEffect(() => {
    setCartCount(cartQty);
  }, [cartQty]);
  const [hamburgerMenu, setHamburgerMenu] = useState("hamburger-inactive");
  const [menuDisplay, setMenuDisplay] = useState("menu-inactive");
  function handleCart() {
    if (cartDisplay === "dnon") {
      setCartDisplay("");
    } else {
      setCartDisplay("dnon");
    }
  }
  function handleHamburgerMenu() {
    if (hamburgerMenu === "hamburger-inactive") {
      setHamburgerMenu("hamburger-active");
      document.body.style.overflowY = "hidden";
      setMenuDisplay("menu-active");
    } else {
      setHamburgerMenu("hamburger-inactive");
      document.body.style.overflowY = "auto";
      setMenuDisplay("menu-inactive");
    }
  }
  function closeMenu() {
    setHamburgerMenu("hamburger-inactive");
    document.body.style.overflowY = "auto";
    setMenuDisplay("menu-inactive");
  }

  return (
    <header className="padding">
      <button
        className={"hamburger-icon mobile " + hamburgerMenu}
        onClick={() => handleHamburgerMenu()}
      >
        <span></span>
        <span></span>
        <span></span>
        <img src={CloseIcon} alt="close-icon" />
      </button>
      <Link to="/" className="logo">
        Șuz
      </Link>
      <div className="categories desktop">
        <Link to="/men" className="categories-men underline-animation">
          Men
        </Link>
        <Link
          to="/women"
          className="categories-women underline-animation"
          href=""
        >
          Women
        </Link>
      </div>
      <div className="header-right">
        <Link
          to="/about"
          className="header-right-about desktop underline-animation"
        >
          About
        </Link>
        <Badge badgeContent={cartCount} color="secondary" overlap="rectangular">
          <button
            onClick={() => {
              handleCart();
            }}
            className="cart-icon"
          >
            <img src={cart} alt="cart" className="cart-icon" href="" />
            {/* <AddToCartNotification /> */}
          </button>
          <Cart display={cartDisplay} onCancel={handleCart} />
          <div
            className={`cart-backdrop ${cartDisplay}`}
            onClick={handleCart}
          ></div>
        </Badge>
      </div>
      <div className={menuDisplay + " padding"}>
        <div className="menu-contents">
          <ul>
            <li>
              <Link
                to="/men"
                className="categories-men underline-animation"
                onClick={closeMenu}
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="categories-women underline-animation"
                onClick={closeMenu}
              >
                Women
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
