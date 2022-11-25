import { useEffect } from "react";
import { useState } from "react";

const Slides = (props) => {
  console.log(props.produts);
  const [products, setProducts] = useState(props.products);

  console.log();
  return (
    <div className="content-right-side">
      <div className="slide-show">
        <img
          src={products[0].image.url}
          alt="image1"
          className="slide-show-product "
        />
        <img
          src={products[1].image.url}
          alt="image2"
          className="slide-show-product dnon"
        />
        <img
          src={products[2].image.url}
          alt="image3"
          className="slide-show-product dnon"
        />
        <img
          src={products[3].image.url}
          alt="image4"
          className="slide-show-product dnon"
        />
      </div>
      <button className="slideshow-button image-1"></button>
      <button className="slideshow-button image-2"></button>
      <button className="slideshow-button image-3"></button>
      <button className="slideshow-button image-4"></button>
    </div>
  );
};

export default Slides;
