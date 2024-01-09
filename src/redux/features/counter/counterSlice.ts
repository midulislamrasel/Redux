import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valeu: 5,
};

export const counterSlice = createSlice({
  name: "conuter",
  initialState,
  reducers: {
    increment: (state) => {
      state.valeu += 1;
    },
    decrement: (state) => {
      state.valeu -= 1;
    },
    increment5: (state) => {
      state.valeu += 5;
    },
  },
});

export const { increment, decrement, increment5 } = counterSlice.actions;

export default counterSlice.reducer;
