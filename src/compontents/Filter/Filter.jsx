import "./filter.scss";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRef } from "react";

import {
  setLow,
  setMid,
  setHigh,
  setPriceMin,
  setPriceMax,
  setModified,
} from "../../redux/filterSlice";

const Filter = () => {
  const lowRef = useRef();
  const midRef = useRef();
  const highRef = useRef();
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
    const handleChecked = (item) => {};
    if (
      !filterSettings.low &&
      !filterSettings.mid &&
      !filterSettings.high &&
      !filterSettings.priceMax &&
      !filterSettings.priceMin
    ) {
      //do nothing
    } else {
      if (
        filterSettings.priceMin &&
        filterSettings.priceMax &&
        filterSettings.priceMin > filterSettings.priceMax
      ) {
        alert("Min price can't be greater than max price");
      } else if (filterSettings.priceMin < 0 || filterSettings.priceMax < 0) {
        alert("Price can't be negative");
      } else {
        dispatch(setModified(true));
        dispatch(setLow(filterSettings.low));
        dispatch(setMid(filterSettings.mid));
        dispatch(setHigh(filterSettings.high));
        if (filterSettings.priceMin && filterSettings.priceMax) {
          dispatch(setPriceMin(filterSettings.priceMin));
          dispatch(setPriceMax(filterSettings.priceMax));
        }
      }
    }
  };

  const clearFilter = () => {
    dispatch(setModified(false));
    dispatch(setLow(false));
    dispatch(setMid(false));
    dispatch(setHigh(false));
    dispatch(setPriceMin(0));
    dispatch(setPriceMax(0));
    lowRef.current.checked = false;
    midRef.current.checked = false;
    highRef.current.checked = false;
  };

  return (
    <div className="filter-menu">
      <div className="filter-menu-content">
        <form onSubmit={handleForm}>
          <h5>Filter by:</h5>
          <div className="filter-categories">
            <h6>Categories</h6>
            <div className="filter-category">
              <input
                ref={lowRef}
                type="checkbox"
                name="low"
                id="input-category-low"
                defaultChecked={reduxFilterSettings.low}
              />
              <label htmlFor="input-category-low">Low</label>
            </div>
            <div className="filter-category">
              <input
                ref={midRef}
                type="checkbox"
                name="mid"
                id="input-category-mid"
                defaultChecked={reduxFilterSettings.mid}
              />
              <label htmlFor="input-category-mid">Mid</label>
            </div>
            <div className="filter-category">
              <input
                ref={highRef}
                type="checkbox"
                name="high"
                id="input-category-high"
                defaultChecked={reduxFilterSettings.high}
              />
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
          <div className="filter-buttons">
            <button className="filter-submit" type="submit">
              Apply
            </button>

            <button
              className="clear-filter"
              type="button"
              onClick={() => {
                clearFilter();
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Filter;
