import { useEffect } from "react";
import { useState } from "react";

const Sizes = (props) => {
  const [category, setCategory] = useState();
  let variants = props.variants;

  useEffect(() => {
    if (props.for === "product") {
      props.category.toLowerCase() === "mens collection"
        ? setCategory("men")
        : setCategory("women");
    }
  });

  const [selectedSize, setSelectedSize] = useState();
  if (props.for === "product") {
    function onSelectedSize(buttonValue) {
      setSelectedSize(buttonValue);
      props.isSizeSelected(true);
    }
    return (
      <div className="filter-sizes product-size">
        <div className="filter-sizes-checkboxes product-sizes-checkboxes">
          {variants.map((variant) => {
            let variantSize = variant.name;
            return (
              <input
                type="checkbox"
                name={`size-${variantSize}`}
                key={`size${variantSize}`}
                id={`size${variantSize}`}
                className="filter-sizes-checkbox product-size-checkbox"
                value={`${variantSize}`}
                defaultChecked={selectedSize === `${variantSize}`}
                onChange={(e) => {
                  onSelectedSize(e.target.value);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  } else if (props.for === "filter") {
    return (
      <div className="filter-sizes">
        <h6>Size</h6>
        <div className="filter-sizes-checkboxes">
          <input
            type="checkbox"
            name="size-40"
            id="size40"
            className="filter-sizes-checkbox"
            value="40"
          />
          <input
            type="checkbox"
            name="size-41"
            id="size41"
            className="filter-sizes-checkbox"
            value="41"
          />
          <input
            type="checkbox"
            name="size-42"
            id="size42"
            className="filter-sizes-checkbox"
            value="42"
          />
          <input
            type="checkbox"
            name="size-43"
            id="size43"
            className="filter-sizes-checkbox"
            value="43"
          />
          <input
            type="checkbox"
            name="size-44"
            id="size44"
            className="filter-sizes-checkbox"
            value="44"
          />
          <input
            type="checkbox"
            name="size-45"
            id="size45"
            className="filter-sizes-checkbox"
            value="45"
          />
        </div>
      </div>
    );
  }
};
export default Sizes;
