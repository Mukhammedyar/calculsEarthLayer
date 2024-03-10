import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors61: false,
  errors62: false,
  errors63: false,
  errors64: false,
  errors65: false,
  errors66: false,
  errors67: false,
  errors68: false,
};

export const error6Slice = createSlice({
  name: "error6",
  initialState,
  reducers: {
    error61True: (state) => {
      state.errors61 = true;
    },
    error62True: (state) => {
      state.errors62 = true;
    },
    error63True: (state) => {
      state.errors63 = true;
    },
    error64True: (state) => {
      state.errors64 = true;
    },
    error65True: (state) => {
      state.errors65 = true;
    },
    error66True: (state) => {
      state.errors66 = true;
    },
    error67True: (state) => {
      state.errors67 = true;
    },
    error68True: (state) => {
      state.errors68 = true;
    },
    error61False: (state) => {
      state.errors61 = false;
    },
    error62False: (state) => {
      state.errors62 = false;
    },
    error63False: (state) => {
      state.errors63 = false;
    },
    error64False: (state) => {
      state.errors64 = false;
    },
    error65False: (state) => {
      state.errors65 = false;
    },
    error66False: (state) => {
      state.errors66 = false;
    },
    error67False: (state) => {
      state.errors67 = false;
    },
    error68False: (state) => {
      state.errors68 = false;
    },
  },
});

export const {
  error61True,
  error62True,
  error63True,
  error64True,
  error65True,
  error66True,
  error67True,
  error68True,
  error61False,
  error62False,
  error63False,
  error64False,
  error65False,
  error66False,
  error67False,
  error68False,
} = error6Slice.actions;
export default error6Slice.reducer;
