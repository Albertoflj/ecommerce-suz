import "./trendingproducts.scss";
import { useEffect, useState, useRef } from "react";
import arrow from "../../../Assets/icons/icons/arrow.png";
import ProductCard from "./Product/ProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TrendingProducts = (props) => {
  const products = props.products;

  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const ref = useRef(null);
  const [xPos, setXPos] = useState(0);

  const handleLeftClick = () => {
    xPos + 260 > 0 ? setXPos(0) : setXPos(xPos + 260);
  };

  const handleRightClick = () => {
    if (xPos === -carouselWidth) {
      setXPos(0);
    } else if (xPos - 260 < -carouselWidth) {
      setXPos(-carouselWidth);
    } else {
      setXPos(xPos - 260);
    }
  };

  useEffect(() => {
    setCarouselWidth(
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    );
  }, []);

  return (
    <section className="trending-products">
      <h3 className="trending-title">Trending now:</h3>
      <div className="trending-container">
        <button className="arrow-left arrow" onClick={handleLeftClick}>
          <img src={arrow} alt="arrow-left" />
        </button>
        <motion.div
          className="trending-products-container"
          ref={carouselRef}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            ref={ref}
            className="trending-products-cards"
            // drag="x"
            dragConstraints={{ right: 0, left: -carouselWidth }}
            animate={{ x: xPos }}
          >
            {products.map((product) => {
              return (
                <motion.div key={product.id}>
                  <Link to={`/product/${product.sku}`}>
                    <ProductCard product={product} />
                  </Link>
                </motion.div>
              );
            })}
            {products.map((product) => {
              return (
                <motion.div key={product.id}>
                  <Link to={`/product/${product.sku}`}>
                    <ProductCard product={product} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        <button className="arrow-right arrow" onClick={handleRightClick}>
          <img src={arrow} alt="arrow-left" />
        </button>
      </div>
    </section>
  );
};

export default TrendingProducts;
