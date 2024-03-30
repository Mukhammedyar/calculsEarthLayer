import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  values: [],
  fizikQum: [],
  fizikLoy: [],
  MexanikTarkib: [],
  jamiPercent: [],
  jamiNatiyja: [],
  error: null,
};

export const value1Slice = createSlice({
  name: "values1",
  initialState,
  reducers: {
    valueSetStart: (state) => {
      state.isLoading = true;
    },
    valueSetSuccess: (state, action) => {
      state.isLoading = false;
      state.values = action.payload;
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
    jamiPercentSuccess: (state, action) => {
      state.isLoading = false;
      state.jamiPercent = action.payload;
    },
    jamiNatiyjatSuccess: (state, action) => {
      state.isLoading = false;
      state.jamiNatiyja = action.payload;
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
  jamiPercentSuccess,
  jamiNatiyjatSuccess,
} = value1Slice.actions;
export default value1Slice.reducer;
