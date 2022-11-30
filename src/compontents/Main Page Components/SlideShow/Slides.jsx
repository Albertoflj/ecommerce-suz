import { useEffect } from "react";
import { useState } from "react";

import "./Slides.scss";

const Slides = (props) => {
  const [products, setProducts] = useState(props.products);

  return (
    <div className="content-right-side desktop">
      <div className="slide-show">
        <img
          src={products[0].image.url}
          alt="image1"
          className="slide-show-product"
        />
        <img
          src={products[1].image.url}
          alt="image2"
          className="slide-show-product"
        />
        <img
          src={products[2].image.url}
          alt="image3"
          className="slide-show-product"
        />
        <img
          src={products[3].image.url}
          alt="image4"
          className="slide-show-product"
        />
      </div>
      <button className="shop-now shadow mobile-medium" onClick={()=>{
        props.scroll()
      }}>Shop Now</button>
    </div>
  );
};

export default Slides;
