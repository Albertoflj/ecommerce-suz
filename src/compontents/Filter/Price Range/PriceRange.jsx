import "./PriceRange.scss";
import { useRef } from "react";

const PriceRange = () =>{

    let minRange = useRef();
    let maxRange = useRef();
    let minGap = 1;

    function onRangeChange(){
        let min = minRange.current.value;
        let max = maxRange.current.value;
        minRange.current.max = maxRange.current.value;
        maxRange.current.min = minRange.current.value;
       
        console.log(min, max)
      
    }


    return(

        <div className="price-range-container">
            <div className="price-range">
                <div className="slider-track"></div>
                <input ref={minRange} type="range" defaultValue={30} min={20} max={300} name="min-range" id="price-range-min" onChange={() => onRangeChange()}/>
                <input ref={maxRange} type="range" defaultValue={70} min={20} max={300} name="max-range" id="price-range-max" onChange={() => onRangeChange()}/>
            </div>
    </div>
    )

}

export default PriceRange;