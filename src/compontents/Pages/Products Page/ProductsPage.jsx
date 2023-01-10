import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import OptionsBar from "./components/Options Bar/OptionsBar";
import ProductList from "./components/Product List/ProductList";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
const ProductsPage = (props) => {
  return (
    <>
      <Header />
      <OptionsBar />
      <ProductList products={props.products} category={props.category} />
      {/* 
    FILTER AND SORT
    LINE <BR>
    PRODUCTS
    */}
      <Footer />
    </>
  );
};
export default ProductsPage;
