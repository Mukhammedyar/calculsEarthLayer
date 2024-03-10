import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors31: false,
  errors32: false,
  errors33: false,
  errors34: false,
  errors35: false,
  errors36: false,
  errors37: false,
  errors38: false,
};

export const error3Slice = createSlice({
  name: "error3",
  initialState,
  reducers: {
    error31True: (state) => {
      state.errors31 = true;
    },
    error32True: (state) => {
      state.errors32 = true;
    },
    error33True: (state) => {
      state.errors33 = true;
    },
    error34True: (state) => {
      state.errors34 = true;
    },
    error35True: (state) => {
      state.errors35 = true;
    },
    error36True: (state) => {
      state.errors36 = true;
    },
    error37True: (state) => {
      state.errors37 = true;
    },
    error38True: (state) => {
      state.errors38 = true;
    },
    error31False: (state) => {
      state.errors31 = false;
    },
    error32False: (state) => {
      state.errors32 = false;
    },
    error33False: (state) => {
      state.errors33 = false;
    },
    error34False: (state) => {
      state.errors34 = false;
    },
    error35False: (state) => {
      state.errors35 = false;
    },
    error36False: (state) => {
      state.errors36 = false;
    },
    error37False: (state) => {
      state.errors37 = false;
    },
    error38False: (state) => {
      state.errors38 = false;
    },
  },
});

export const {
  error31True,
  error32True,
  error33True,
  error34True,
  error35True,
  error36True,
  error37True,
  error38True,
  error31False,
  error32False,
  error33False,
  error34False,
  error35False,
  error36False,
  error37False,
  error38False,
} = error3Slice.actions;
export default error3Slice.reducer;
