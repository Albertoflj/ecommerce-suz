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

  function onMinRangeChange() {
    setMinValue(minRange.current.value);
    if (minRange.current.value > maxValue - minGap) {
      setMinValue(maxValue - minGap);
    }
    console.log(minValue, maxValue);
  }
  function onMaxRangeChange() {
    setMaxValue(maxRange.current.value);
    if (maxRange.current.value < minValue) {
      setMaxValue(minValue);
    }
    console.log(maxRange.current.value);
    // console.log(minValue, maxValue);
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
          onInput={() => onMinRangeChange()}
        />
        <input
          ref={maxRange}
          type="range"
          value={maxValue}
          min={20}
          max={300}
          name="max-range"
          id="price-range-max"
          onInput={() => onMaxRangeChange()}
        />
      </div>
    </div>
  );
};

export default PriceRange;
