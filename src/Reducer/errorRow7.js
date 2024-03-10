import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors71: false,
  errors72: false,
  errors73: false,
  errors74: false,
  errors75: false,
  errors76: false,
  errors77: false,
  errors78: false,
};

export const error7Slice = createSlice({
  name: "error7",
  initialState,
  reducers: {
    error71True: (state) => {
      state.errors71 = true;
    },
    error72True: (state) => {
      state.errors72 = true;
    },
    error73True: (state) => {
      state.errors73 = true;
    },
    error74True: (state) => {
      state.errors74 = true;
    },
    error75True: (state) => {
      state.errors75 = true;
    },
    error76True: (state) => {
      state.errors76 = true;
    },
    error77True: (state) => {
      state.errors77 = true;
    },
    error78True: (state) => {
      state.errors78 = true;
    },
    error71False: (state) => {
      state.errors71 = false;
    },
    error72False: (state) => {
      state.errors72 = false;
    },
    error73False: (state) => {
      state.errors73 = false;
    },
    error74False: (state) => {
      state.errors74 = false;
    },
    error75False: (state) => {
      state.errors75 = false;
    },
    error76False: (state) => {
      state.errors76 = false;
    },
    error77False: (state) => {
      state.errors77 = false;
    },
    error78False: (state) => {
      state.errors78 = false;
    },
  },
});

export const {
  error71True,
  error72True,
  error73True,
  error74True,
  error75True,
  error76True,
  error77True,
  error78True,
  error71False,
  error72False,
  error73False,
  error74False,
  error75False,
  error76False,
  error77False,
  error78False,
} = error7Slice.actions;
export default error7Slice.reducer;
