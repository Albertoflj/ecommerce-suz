import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import cartQuantityReducer from "./cartQuantitySlice";
import thunk from "redux-thunk";

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = configureStore(
  {
    reducer: {
      cartQuantity: cartQuantityReducer,
    },
  },
  applyMiddleware(thunk)
);

// export store;
