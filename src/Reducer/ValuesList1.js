import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  values: [],
  fizikQum: [],
  fizikLoy: [],
  MexanikTarkib: [],
  error: null,
};

export const valueSlice = createSlice({
  name: "valuse",
  initialState,
  reducers: {
    valueSetStart: (state) => {
      state.isLoading = true;
    },
    valueSetSuccess: (state, action) => {
      state.isLoading = false;
      state.values = [...action.payload];
    },
    valueSetFailure: (state) => {
      state.isLoading = true;
    },
    calculsStart: (state) => {
      state.isLoading = true;
    },
    fizikQumSuccess: (state, action) => {
      state.isLoading = false;
      state.fizikQum = action.payload;
    },
    fizikLoySuccess: (state, action) => {
      state.isLoading = false;
      state.fizikLoy = action.payload;
    },
    MexanikTarkibSuccess: (state, action) => {
      state.isLoading = false;
      state.MexanikTarkib = action.payload;
    },
  },
});

export const {
  valueSetStart,
  valueSetSuccess,
  valueSetFailure,
  fizikQumSuccess,
  fizikLoySuccess,
  MexanikTarkibSuccess,
  calculsStart,
} = valueSlice.actions;
export default valueSlice.reducer;
