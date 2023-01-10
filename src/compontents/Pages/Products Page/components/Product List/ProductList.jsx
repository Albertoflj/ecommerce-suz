import "./productlist.scss";
import ProductCard from "../../../../Main Page Components/Trending Now/Product/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const ProductList = (props) => {
  const sortType = useSelector((state) => state.sort).sortType;
  const [sortedProducts, setSortedProducts] = useState(props.products);
  // const [isSorted, setIsSorted] = useState(false);
  useEffect(() => {
    setSortedProducts(sortProducts(props.products, sortType));
  }, [sortType, sortedProducts]);

  const sortProducts = (products, sortMode) => {
    console.log("sortMode", sortMode);

    switch (sortMode) {
      case "A-Z":
        return products.sort((a, b) => a.name.localeCompare(b.name));

      case "Z-A":
        return products.sort((a, b) => a.name.localeCompare(b.name)).reverse();

      case "default":
        return products;
    }
  };

  return (
    <div className="product-list padding">
      <div className="product-list-contents">
        {sortedProducts.map((singleProduct) => {
          // if(product.categories[0].name.slice(0,1).toLowerCase() === props.category){
          return (
            <Link
              to={`/product/${singleProduct.sku}`}
              className="product-list-link"
              key={singleProduct.sku}
            >
              <ProductCard product={singleProduct} />
            </Link>
          );
          // )}
          // }
        })}
      </div>
    </div>
  );
};

export default ProductList;
