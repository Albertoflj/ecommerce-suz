import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../lib/commerce";

export const getCartItems = createAsyncThunk(
  "catQuantity/getCartItems",
  async () => {
    try {
      const cartId = await commerce.cart.id();
      const cartQuantity = await commerce.cart.retrieve(cartId);
      return cartQuantity.total_items;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  cartItemsQuantity: 0,
  status: "idle",
  error: null,
};

export const counterSlice = createSlice({
  name: "cartQuantity",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.cartItemsQuantity.cartItemsQuantity += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.cartItemsQuantity.cartItemsQuantity -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItemsQuantity = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
