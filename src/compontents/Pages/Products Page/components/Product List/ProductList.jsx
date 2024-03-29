import "./productlist.scss";
import ProductCard from "../../../../Main Page Components/Trending Now/Product/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductList = (props) => {
  const { sortType } = useSelector((state) => state.sort);
  const filterSettings = useSelector((state) => state.filter);
  const sortProducts = (products, sortMode) => {
    switch (sortMode) {
      case "A-Z":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "Z-A":
        return products.sort((a, b) => a.name.localeCompare(b.name)).reverse();
      case "price-low":
        return products.sort((a, b) => a.price.raw - b.price.raw);
      case "price-high":
        return products.sort((a, b) => a.price.raw - b.price.raw).reverse();
      case "default":
        return products;
    }
  };

  const filterProducts = (products, filterSettings) => {
    if (filterSettings.modified) {
      return products.filter((product) => {
        if (filterSettings.low) {
          if (product.categories[1].slug === "low") {
            return product;
          }
        }
        if (filterSettings.mid) {
          if (product.categories[1].slug === "mid") {
            return product;
          }
        }
        if (filterSettings.high) {
          if (product.categories[1].slug === "high") {
            return product;
          }
        }
        if (filterSettings.priceMin > 0 && filterSettings.priceMax > 0) {
          if (
            Math.floor(product.price.raw) >= filterSettings.priceMin &&
            Math.floor(product.price.raw) <= filterSettings.priceMax
          ) {
            return product;
          }
        }
      });
    }
    return products;
  };
  const filteredProducts = filterProducts(props.products, filterSettings);
  const sortedProducts = sortProducts(filteredProducts, sortType);

  return (
    <div className="product-list padding">
      <div className="product-list-contents">
        {sortedProducts.map((singleProduct) => {
          if (
            singleProduct.categories[0].name.slice(0, 1).toLowerCase() ===
            props.category
          ) {
            return (
              <Link
                to={`/product/${singleProduct.sku}`}
                className="product-list-link"
                key={singleProduct.sku}
              >
                <ProductCard product={singleProduct} />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductList;
