import "./filter.scss";

import close_icon from "../../Assets/icons/icons/close-icon.png";

const Filter = () => {
  return (
    <div className="filter-menu">
      <div className="filter-menu-content">
        {/* 
        //!! SHOULD BE A BUTTON
        */}
        <div className="close-icon-container">
          <img src={close_icon} alt="close-icon" className="close-icon" />
        </div>
        <h5>Filter by:</h5>
        <div className="filter-categories">
          <h6>Categories</h6>
          <div className="filter-category">
            <input type="checkbox" name="low" id="input-category-low" />
            <label htmlFor="low">Low</label>
          </div>
          <div className="filter-category">
            <input type="checkbox" name="mid" id="input-category-mid" />
            <label htmlFor="mid">Mid</label>
          </div>
          <div className="filter-category">
            <input type="checkbox" name="high" id="input-category-high" />
            <label htmlFor="high">High</label>
          </div>
          <div className="filter-category"></div>
        </div>
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
              disabled
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
        <div className="filter-price">
          <h6>Price</h6>
          <div className="filter-price-control">
            {/* add slider with two inputs */}
            <input type="text" name="price-min" id="price-min" />
            <input type="text" name="price-max" id="price-max" />
          </div>
        </div>
        <div className="filter-on-sale">
          <h6>On Sale</h6>
          <input type="checkbox" name="on-sale" id="on-sale" />
        </div>
        <div className="filter-buttons">
          <button>Apply</button>
          {/* <button>Clear</button> */}
        </div>
      </div>
    </div>
  );
};
export default Filter;