import LinkedIn from "../../../../../Assets/icons/icons/linkedin.svg";
import Sort from "../../../../Sort/Sort";
import "./optionsbar.scss";
import { useState } from "react";
import Filter from "../../../../Filter/Filter";

const OptionsBar = () => {
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [isFitlerVisible, setIsFilterVisible] = useState(false);
  return (
    <>
      <div className="options-bar padding">
        <div className="options-filter"></div>
        <div className="options-bar-content">
          <button
            className="bar-button"
            // onChange={"open filter"}
            onClick={() => {
              if (isFitlerVisible) {
                setIsFilterVisible(false);
              } else {
                setIsFilterVisible(true);
                setIsSortVisible(false);
              }
            }}
          >
            <img className="bar-icon" src={LinkedIn} alt="filter" />
          </button>
          <>
            <button
              className="bar-button"
              onClick={() => {
                if (isSortVisible) {
                  setIsSortVisible(false);
                } else {
                  setIsSortVisible(true);
                  setIsFilterVisible(false);
                }
              }}
            >
              <img className="bar-icon" src={LinkedIn} alt="sort" />
            </button>
            {isSortVisible ? <Sort /> : null}
            {isFitlerVisible ? <Filter /> : null}
          </>
        </div>
        <br />
      </div>
    </>
  );
};

export default OptionsBar;
