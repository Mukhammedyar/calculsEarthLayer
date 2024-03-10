import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors51: false,
  errors52: false,
  errors53: false,
  errors54: false,
  errors55: false,
  errors56: false,
  errors57: false,
  errors58: false,
};

export const error5Slice = createSlice({
  name: "error5",
  initialState,
  reducers: {
    error51True: (state) => {
      state.errors51 = true;
    },
    error52True: (state) => {
      state.errors52 = true;
    },
    error53True: (state) => {
      state.errors53 = true;
    },
    error54True: (state) => {
      state.errors54 = true;
    },
    error55True: (state) => {
      state.errors55 = true;
    },
    error56True: (state) => {
      state.errors56 = true;
    },
    error57True: (state) => {
      state.errors57 = true;
    },
    error58True: (state) => {
      state.errors58 = true;
    },
    error51False: (state) => {
      state.errors51 = false;
    },
    error52False: (state) => {
      state.errors52 = false;
    },
    error53False: (state) => {
      state.errors53 = false;
    },
    error54False: (state) => {
      state.errors54 = false;
    },
    error55False: (state) => {
      state.errors55 = false;
    },
    error56False: (state) => {
      state.errors56 = false;
    },
    error57False: (state) => {
      state.errors57 = false;
    },
    error58False: (state) => {
      state.errors58 = false;
    },
  },
});

export const {
  error51True,
  error52True,
  error53True,
  error54True,
  error55True,
  error56True,
  error57True,
  error58True,
  error51False,
  error52False,
  error53False,
  error54False,
  error55False,
  error56False,
  error57False,
  error58False,
} = error5Slice.actions;
export default error5Slice.reducer;
