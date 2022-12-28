import "./PriceRange.scss";
import { useRef } from "react";
import { useState } from "react";

const PriceRange = () => {
  //!!THIS COMPONENT IS NOT WORKING PROPERLY, I DON'T KNOW WHY

  const [minValue, setMinValue] = useState(30);
  const [maxValue, setMaxValue] = useState(70);
  let minRange = useRef();
  let maxRange = useRef();
  let minGap = 5;

  function onRangeChange(left) {
    // setMinValue(minRange.current.value);
    setMinValue(minRange.current.value);
    setMaxValue(maxRange.current.value);
    // if (minRange.current.value > maxValue) {
    //   setMinValue(maxValue);
    // }
    // console.log(minRange.current.value);
    // // console.log(minValue, maxValue);
    if (maxValue - minValue < minGap) {
      left ? setMinValue(maxValue - minGap) : setMaxValue(minValue + minGap);
    }
  }

  return (
    <div className="price-range-container">
      <div className="price-range">
        <div className="slider-track"></div>
        <input
          ref={minRange}
          type="range"
          value={minValue}
          min={20}
          max={300}
          name="min-range"
          id="price-range-min"
          onInput={() => onRangeChange(true)}
        />
        <input
          ref={maxRange}
          type="range"
          value={maxValue}
          min={20}
          max={300}
          name="max-range"
          id="price-range-max"
          onInput={() => onRangeChange(false)}
        />
      </div>
    </div>
  );
};

export default PriceRange;
