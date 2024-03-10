import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors41: false,
  errors42: false,
  errors43: false,
  errors44: false,
  errors45: false,
  errors46: false,
  errors47: false,
  errors48: false,
};

export const error4Slice = createSlice({
  name: "error4",
  initialState,
  reducers: {
    error41True: (state) => {
      state.errors41 = true;
    },
    error42True: (state) => {
      state.errors42 = true;
    },
    error43True: (state) => {
      state.errors43 = true;
    },
    error44True: (state) => {
      state.errors44 = true;
    },
    error45True: (state) => {
      state.errors45 = true;
    },
    error46True: (state) => {
      state.errors46 = true;
    },
    error47True: (state) => {
      state.errors47 = true;
    },
    error48True: (state) => {
      state.errors48 = true;
    },
    error41False: (state) => {
      state.errors41 = false;
    },
    error42False: (state) => {
      state.errors42 = false;
    },
    error43False: (state) => {
      state.errors43 = false;
    },
    error44False: (state) => {
      state.errors44 = false;
    },
    error45False: (state) => {
      state.errors45 = false;
    },
    error46False: (state) => {
      state.errors46 = false;
    },
    error47False: (state) => {
      state.errors47 = false;
    },
    error48False: (state) => {
      state.errors48 = false;
    },
  },
});

export const {
  error41True,
  error42True,
  error43True,
  error44True,
  error45True,
  error46True,
  error47True,
  error48True,
  error41False,
  error42False,
  error43False,
  error44False,
  error45False,
  error46False,
  error47False,
  error48False,
} = error4Slice.actions;
export default error4Slice.reducer;
