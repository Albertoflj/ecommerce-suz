import "./sort.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../redux/sortSlice";

const Sort = () => {
  const [isSortActivated, setIsSortActivated] = useState(false);
  const [nameSortType, setNameSortType] = useState("Z-A");
  const [priceSortType, setPriceSortType] = useState("price-high");
  const dispatch = useDispatch();
  const handleNameSort = () => {
    setPriceSortType("price-high");
    if (nameSortType === "A-Z") {
      setNameSortType("Z-A");
      dispatch(setSort(nameSortType));
    } else if (nameSortType === "Z-A") {
      setNameSortType("A-Z");
      dispatch(setSort(nameSortType));
    }
  };
  const handlePriceSort = () => {
    setNameSortType("Z-A");
    if (priceSortType === "price-high") {
      setPriceSortType("price-low");
      dispatch(setSort(priceSortType));
    } else if (priceSortType === "price-low") {
      setPriceSortType("price-high");
      dispatch(setSort(priceSortType));
    }
  };
  return (
    <div className="sort">
      <div className="sort-container">
        <h6 className="sort-title">Sort by</h6>
        <div className="sort-variations">
          <button
            className="name-variation"
            onClick={() => {
              handleNameSort();
            }}
          >
            {nameSortType === "A-Z" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                className="bi bi-sort-alpha-up"
                viewBox="0 0 16 16"
              >
                <path d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z" />
                <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                className="bi bi-sort-alpha-down"
                viewBox="0 0 16 16"
              >
                <path d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z" />
                <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
              </svg>
            )}
            <p>Name</p>
          </button>

          <button
            className="price-variation"
            onClick={() => {
              handlePriceSort();
            }}
          >
            {priceSortType === "price-high" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                className="bi bi-sort-up"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                className="bi bi-sort-down"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
              </svg>
            )}

            <p>Price</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sort;
