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

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState("hamburger-inactive");
  const [menuDisplay, setMenuDisplay] = useState("menu-inactive");
  let [cartCount, setCartCount] = useState(1);

  function handleFavorites() {
    //coode
    console.log("fav");
  }
  function handleCart() {
    //more coode
    console.log("cart");
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
          className="header-right-About underline-animation desktop"
          href=""
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
            className="cart"
          >
            <img src={cart} alt="cart" className="cart" href="" />
          </button>
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
                href=""
                onClick={closeMenu}
              >
                Women
              </Link>
            </li>
            <li>
              <Badge badgeContent={0} color="secondary" overlap="rectangular">
                <button
                  onClick={() => {
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
