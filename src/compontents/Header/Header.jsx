import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { AppBar, Toolbar, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import "../Header/header.scss";
//icons
import heart from "../../Assets/icons/icons/heart.svg";
import cart from "../../Assets/icons/icons/cart2.svg";
// import Badge from "../Badge/Badge";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AddToCartNotification from "../AddToCartNotification/AddToCartNotification";
import { store } from "../../redux/store.js";
import { getStatus } from "redux-resource";
import Cart from "../Cart/Cart";

const Header = () => {
  // const state = store.getState();
  // const cartRequestStatus = getStatus(
  //   state,
  //   "cartQuantity.cartQuantityReducer",
  //   true
  // );

  const [cartCount, setCartCount] = useState(0);
  const [cartDisplay, setCartDisplay] = useState("dnon");
  const cartQty = useSelector((state) => state.cartQuantity.cartItemsQuantity);
  useEffect(() => {
    setCartCount(cartQty);
  }, [cartQty]);
  const [hamburgerMenu, setHamburgerMenu] = useState("hamburger-inactive");
  const [menuDisplay, setMenuDisplay] = useState("menu-inactive");
  const cartItemsQuantity = useSelector((state) => state.cartQuantity);
  function handleFavorites() {
    //coode
    console.log("fav");
  }
  function handleCart() {
    //more coode
    // console.log("cart");
    // console.log(cartItemsQuantity);
    if (cartDisplay === "dnon") {
      setCartDisplay("");
    } else {
      setCartDisplay("dnon");
    }
  }
  function handleHamburgerMenu() {
    if (hamburgerMenu === "hamburger-inactive") {
      setHamburgerMenu("hamburger-active");
      document.body.style.overflow = "hidden";
      setMenuDisplay("menu-active");
    } else {
      setHamburgerMenu("hamburger-inactive");
      document.body.style.overflow = "auto";
      setMenuDisplay("menu-inactive");
    }
  }
  function closeMenu() {
    setHamburgerMenu("hamburger-inactive");
    document.body.style.overflow = "auto";
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
        {/* 
        //!CHANGE COLOR OF BADGE TO ORANGE
        */}

        <Badge badgeContent={0} color="secondary" overlap="rectangular">
          <button
            onClick={() => {
              handleFavorites();
            }}
            className="fav desktop"
          >
            <img src={heart} alt="heart" className="fav" href="" />
          </button>
        </Badge>
        <Badge badgeContent={cartCount} color="secondary" overlap="rectangular">
          <button
            onClick={() => {
              handleCart();
            }}
            className="cart-icon"
          >
            <img src={cart} alt="cart" className="cart-icon" href="" />
            <AddToCartNotification />
          </button>
            <Cart display={cartDisplay} onCancel={handleCart}/>
            <div className={`cart-backdrop ${cartDisplay}`} onClick={handleCart}></div>
        </Badge>
      </div>
      <div className={menuDisplay + " padding"}>
        <div className="menu-contents">
          <ul>
            <li>
              <Link
                to="/men"
                className="categories-men underline-animation"
                onChange={closeMenu}
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="categories-women underline-animation"
                onChange={closeMenu}
              >
                Women
              </Link>
            </li>
            <li>
              <Badge
                // badgeContent={cartItemsQuantity}
                color="secondary"
                overlap="rectangular"
              >
                <button
                  onChange={() => {
                    handleFavorites();
                    closeMenu();
                  }}
                  className="fav"
                >
                  Favorites
                </button>
              </Badge>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
