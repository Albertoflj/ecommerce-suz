import React from "react";
import { Link } from "react-router-dom";
// import { AppBar, Toolbar, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import "../Header/header.scss";
//icons
import heart from "../../Assets/icons/icons/heart.svg";
import cart from "../../Assets/icons/icons/cart2.svg";
// import Badge from "../Badge/Badge";
import { Badge } from "@material-ui/core";
const Header = () => {
  return (
    <header className="desktop">
      <Link to="/" className="logo">
        Șuz
      </Link>
      <div className="categories">
        <Link to="/men" className="categories-men">
          Men
        </Link>
        <Link to="/women" className="categories-women" href="">
          Women
        </Link>
      </div>
      <div className="header-right">
        <Link to="/about" className="header-right-About" href="">
          About
        </Link>
        {/* 
        //!THESE SHOULD NOT BE <A> TAG, THESE ARE BUTTONS
        //!CHANGE COLOR OF BADGE TO ORANGE
        */}

        <Badge badgeContent={0} color="secondary">
          <a href="" className="fav">
            <img src={heart} alt="heart" className="fav" href="" />
          </a>
        </Badge>
        <Badge badgeContent={1} color="secondary" overlap="rectangular">
          <a href="" className="cart">
            <img src={cart} alt="cart" className="cart" href="" />
          </a>
        </Badge>
      </div>
    </header>
  );
};
export default Header;
