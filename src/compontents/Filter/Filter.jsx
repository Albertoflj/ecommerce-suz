import "./filter.scss";

import close_icon from "../../Assets/icons/icons/close-icon.png";
import Sizes from "../Sizes/Sizes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  setLow,
  setMid,
  setHigh,
  setPriceMin,
  setPriceMax,
  setModified,
} from "../../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const reduxFilterSettings = useSelector((state) => state.filter);
  const handleForm = (e) => {
    const filterSettings = {
      low: e.target.elements.low.checked,
      mid: e.target.elements.mid.checked,
      high: e.target.elements.high.checked,
      priceMin: e.target.elements["price-min"].value,
      priceMax: e.target.elements["price-max"].value,
    };
    e.preventDefault();

    if (filterSettings.priceMin > filterSettings.priceMax) {
      alert("Min price can't be greater than max price");
    } else if (filterSettings.priceMin < 0 || filterSettings.priceMax < 0) {
      alert("Price can't be negative");
    } else {
      dispatch(setModified(true));
      dispatch(setLow(filterSettings.low));
      dispatch(setMid(filterSettings.mid));
      dispatch(setHigh(filterSettings.high));
      if (filterSettings.priceMin !== "" && filterSettings.priceMax !== "") {
        dispatch(setPriceMin(filterSettings.priceMin));
        dispatch(setPriceMax(filterSettings.priceMax));
      }
    }
  };

  return (
    <div className="filter-menu">
      <div className="filter-menu-content">
        {/* 
        //!! SHOULD BE A BUTTON
        */}
        {/* <button className="close-icon-container">
          <img src={close_icon} alt="close-icon" className="close-icon" />
        </button> */}
        <form onSubmit={handleForm}>
          <h5>Filter by:</h5>
          <div className="filter-categories">
            <h6>Categories</h6>
            <div className="filter-category">
              <input type="checkbox" name="low" id="input-category-low" />
              <label htmlFor="input-category-low">Low</label>
            </div>
            <div className="filter-category">
              <input type="checkbox" name="mid" id="input-category-mid" />
              <label htmlFor="input-category-mid">Mid</label>
            </div>
            <div className="filter-category">
              <input type="checkbox" name="high" id="input-category-high" />
              <label htmlFor="input-category-high">High</label>
            </div>
            <div className="filter-category"></div>
          </div>
          {/* <Sizes for="filter" /> */}
          <div className="filter-price">
            <h6>Price</h6>
            <div className="filter-price-control">
              {/* add slider with two inputs */}
              <div className="filter-price-control-input">
                <label htmlFor="price-min">Min Price</label>
                <input type="number" name="price-min" id="price-min" min={0} />
              </div>
              <div className="filter-price-control-input">
                <label htmlFor="price-max">Max Price</label>
                <input type="number" name="price-max" id="price-max" min={0} />
              </div>
            </div>
          </div>
          {/* <div className="filter-on-sale">
          <h6>On Sale</h6>
          <input type="checkbox" name="on-sale" id="on-sale" />
        </div> */}
          <div className="filter-buttons">
            <button className="filter-submit" type="submit">
              Apply
            </button>

            {/* <button>Clear</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Filter;
