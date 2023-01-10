import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  low: false,
  mid: false,
  high: false,
  priceMin: 0,
  priceMax: 0,
  modified: false,
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLow: (state, action) => {
      state.low = action.payload;
    },
    setMid: (state, action) => {
      state.mid = action.payload;
    },
    setHigh: (state, action) => {
      state.high = action.payload;
    },
    setPriceMin: (state, action) => {
      state.priceMin = action.payload;
    },
    setPriceMax: (state, action) => {
      state.priceMax = action.payload;
    },
    setModified: (state, action) => {
      state.modified = action.payload;
    },
  },
});

// export const { setSort } = sortSlice.actions;
export const {
  setLow,
  setMid,
  setHigh,
  setPriceMin,
  setPriceMax,
  setModified,
} = filterSlice.actions;
// export default sortSlice.reducer;
export default filterSlice.reducer;
