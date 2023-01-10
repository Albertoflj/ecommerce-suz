import LinkedIn from "../../../../../Assets/icons/icons/linkedin.svg";
import Sort from "../../../../Sort/Sort";
import "./optionsbar.scss";
import { useState } from "react";

const OptionsBar = () => {
  const [isSortVisible, setIsSortVisible] = useState(false);
  return (
    <>
      <div className="options-bar padding">
        <div className="options-filter"></div>
        <div className="options-bar-content">
          <button onChange={"open filter"}>
            <img src={LinkedIn} alt="filter" />
          </button>
          <>
            <button
              onClick={() => {
                isSortVisible
                  ? setIsSortVisible(false)
                  : setIsSortVisible(true);
              }}
            >
              <img src={LinkedIn} alt="sort" />
            </button>
            {isSortVisible ? <Sort /> : null}
          </>
        </div>
        <br />
      </div>
    </>
  );
};

export default OptionsBar;
