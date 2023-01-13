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
            <svg
              className="bar-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="black"
              class="bi bi-filter"
              viewBox="0 0 16 16"
            >
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
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
              <svg
                className="bar-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="black"
                class="bi bi-sort-alpha-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
                />
                <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
              </svg>
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
