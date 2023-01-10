import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import cartQuantityReducer from "./cartQuantitySlice";
import thunk from "redux-thunk";
import sortType from "./sortSlice";

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = configureStore(
  {
    reducer: {
      cartQuantity: cartQuantityReducer,
      sort: sortType,
    },
  },
  applyMiddleware(thunk)
);

// export store;
