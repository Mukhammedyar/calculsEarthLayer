import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors21: false,
  errors22: false,
  errors23: false,
  errors24: false,
  errors25: false,
  errors26: false,
  errors27: false,
  errors28: false,
};

export const error2Slice = createSlice({
  name: "error",
  initialState,
  reducers: {
    error21True: (state) => {
      state.errors21 = true;
    },
    error22True: (state) => {
      state.errors22 = true;
    },
    error23True: (state) => {
      state.errors23 = true;
    },
    error24True: (state) => {
      state.errors24 = true;
    },
    error25True: (state) => {
      state.errors25 = true;
    },
    error26True: (state) => {
      state.errors26 = true;
    },
    error27True: (state) => {
      state.errors27 = true;
    },
    error28True: (state) => {
      state.errors28 = true;
    },
    error21False: (state) => {
      state.errors21 = false;
    },
    error22False: (state) => {
      state.errors22 = false;
    },
    error23False: (state) => {
      state.errors23 = false;
    },
    error24False: (state) => {
      state.errors24 = false;
    },
    error25False: (state) => {
      state.errors25 = false;
    },
    error26False: (state) => {
      state.errors26 = false;
    },
    error27False: (state) => {
      state.errors27 = false;
    },
    error28False: (state) => {
      state.errors28 = false;
    },
  },
});

export const {
  error21True,
  error22True,
  error23True,
  error24True,
  error25True,
  error26True,
  error27True,
  error28True,
  error21False,
  error22False,
  error23False,
  error24False,
  error25False,
  error26False,
  error27False,
  error28False,
} = error2Slice.actions;
export default error2Slice.reducer;
