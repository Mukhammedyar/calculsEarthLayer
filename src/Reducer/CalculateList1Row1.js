import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  fizikQum1: 0,
  fizikLoy1: 0,
  mexanikTarkib1: 0,
  fizikQum2: 0,
  fizikLoy2: 0,
  mexanikTarkib2: 0,
  fizikQum3: 0,
  fizikLoy3: 0,
  mexanikTarkib3: 0,
  fizikQum4: 0,
  fizikLoy4: 0,
  mexanikTarkib4: 0,
  fizikQum5: 0,
  fizikLoy5: 0,
  mexanikTarkib5: 0,
  fizikQum6: 0,
  fizikLoy6: 0,
  mexanikTarkib6: 0,
  fizikQum7: 0,
  fizikLoy7: 0,
  mexanikTarkib7: 0,
  fizikQum8: 0,
  fizikLoy8: 0,
  mexanikTarkib8: 0,
};

export const calculateSlice = createSlice({
  name: "calulate",
  initialState,
  reducers: {
    //row1
    calculateFizikQum1Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikQum1Success: (state, action) => {
      state.isLoading = false;
      state.fizikQum1 = action.payload;
    },
    calculateFizikQum1Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateFizikLoy1Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikLoy1Success: (state, action) => {
      state.isLoading = false;
      state.fizikLoy1 = action.payload;
    },
    calculateFizikLoy1Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateMexanikTarkib1Start: (state) => {
      state.isLoading = true;
    },
    calculateMexanikTarkib1Success: (state, action) => {
      state.isLoading = false;
      state.mexanikTarkib1 = action.payload;
    },
    calculateMexanikTarkib2Failure: (state, action) => {
      state.error = action.payload;
      state.error = action.payload;
    },
    //row2
    calculateFizikQum2Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikQum2Success: (state, action) => {
      state.isLoading = false;
      state.fizikQum2 = action.payload;
    },
    calculateFizikQum2Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateFizikLoy2Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikLoy2Success: (state, action) => {
      state.isLoading = false;
      state.fizikLoy2 = action.payload;
    },
    calculateFizikLoy2Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateMexanikTarkib2Start: (state) => {
      state.isLoading = true;
    },
    calculateMexanikTarkib2Success: (state, action) => {
      state.isLoading = false;
      state.mexanikTarkib2 = action.payload;
    },
    calculateMexanikTarkib2Failure: (state, action) => {
      state.error = action.payload;
      state.error = action.payload;
    },
    //row3
    calculateFizikQum3Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikQum3Success: (state, action) => {
      state.isLoading = false;
      state.fizikQum3 = action.payload;
    },
    calculateFizikQum3Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateFizikLoy1Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikLoy3Success: (state, action) => {
      state.isLoading = false;
      state.fizikLoy3 = action.payload;
    },
    calculateFizikLoy3Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateMexanikTarkib3Start: (state) => {
      state.isLoading = true;
    },
    calculateMexanikTarkib3Success: (state, action) => {
      state.isLoading = false;
      state.mexanikTarkib3 = action.payload;
    },
    calculateMexanikTarkib3Failure: (state, action) => {
      state.error = action.payload;
      state.error = action.payload;
    },
    //row4
    calculateFizikQum4Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikQum4Success: (state, action) => {
      state.isLoading = false;
      state.fizikQum4 = action.payload;
    },
    calculateFizikQum4Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateFizikLoy1Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikLoy4Success: (state, action) => {
      state.isLoading = false;
      state.fizikLoy4 = action.payload;
    },
    calculateFizikLoy4Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateMexanikTarkib4Start: (state) => {
      state.isLoading = true;
    },
    calculateMexanikTarkib4Success: (state, action) => {
      state.isLoading = false;
      state.mexanikTarkib4 = action.payload;
    },
    calculateMexanikTarkib4Failure: (state, action) => {
      state.error = action.payload;
      state.error = action.payload;
    },
    //row5
    calculateFizikQum5Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikQum5Success: (state, action) => {
      state.isLoading = false;
      state.fizikQum5 = action.payload;
    },
    calculateFizikQum5Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateFizikLoy1Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikLoy5Success: (state, action) => {
      state.isLoading = false;
      state.fizikLoy5 = action.payload;
    },
    calculateFizikLoy5Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateMexanikTarkib5Start: (state) => {
      state.isLoading = true;
    },
    calculateMexanikTarkib5Success: (state, action) => {
      state.isLoading = false;
      state.mexanikTarkib5 = action.payload;
    },
    calculateMexanikTarkib5Failure: (state, action) => {
      state.error = action.payload;
      state.error = action.payload;
    },
    //row6
    calculateFizikQum6Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikQum6Success: (state, action) => {
      state.isLoading = false;
      state.fizikQum6 = action.payload;
    },
    calculateFizikQum6Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateFizikLoy1Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikLoy6Success: (state, action) => {
      state.isLoading = false;
      state.fizikLoy6 = action.payload;
    },
    calculateFizikLoy6Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateMexanikTarkib6Start: (state) => {
      state.isLoading = true;
    },
    calculateMexanikTarkib6Success: (state, action) => {
      state.isLoading = false;
      state.mexanikTarkib6 = action.payload;
    },
    calculateMexanikTarkib6Failure: (state, action) => {
      state.error = action.payload;
      state.error = action.payload;
    },
    //row7
    calculateFizikQum7Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikQum7Success: (state, action) => {
      state.isLoading = false;
      state.fizikQum7 = action.payload;
    },
    calculateFizikQum7Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateFizikLoy1Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikLoy7Success: (state, action) => {
      state.isLoading = false;
      state.fizikLoy7 = action.payload;
    },
    calculateFizikLoy7Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateMexanikTarkib7Start: (state) => {
      state.isLoading = true;
    },
    calculateMexanikTarkib7Success: (state, action) => {
      state.isLoading = false;
      state.mexanikTarkib7 = action.payload;
    },
    calculateMexanikTarkib7Failure: (state, action) => {
      state.error = action.payload;
      state.error = action.payload;
    },
    //row8
    calculateFizikQum8Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikQum8Success: (state, action) => {
      state.isLoading = false;
      state.fizikQum8 = action.payload;
    },
    calculateFizikQum8Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateFizikLoy1Start: (state) => {
      state.isLoading = true;
    },
    calculateFizikLoy8Success: (state, action) => {
      state.isLoading = false;
      state.fizikLoy8 = action.payload;
    },
    calculateFizikLoy8Failure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    calculateMexanikTarkib8Start: (state) => {
      state.isLoading = true;
    },
    calculateMexanikTarkib8Success: (state, action) => {
      state.isLoading = false;
      state.mexanikTarkib8 = action.payload;
    },
    calculateMexanikTarkib8Failure: (state, action) => {
      state.error = action.payload;
      state.error = action.payload;
    },
  },
});

export const {
  calculateFizikQum1Start,
  calculateFizikQum1Success,
  calculateFizikQum1Failure,
  calculateFizikLoy1Start,
  calculateFizikLoy1Success,
  calculateFizikLoy1Failure,
  calculateMexanikTarkib1Start,
  calculateMexanikTarkib1Success,
  calculateMexanikTarkib1Failure,
  //row2
  calculateFizikQum2Start,
  calculateFizikQum2Success,
  calculateFizikQum2Failure,
  calculateFizikLoy2Start,
  calculateFizikLoy2Success,
  calculateFizikLoy2Failure,
  calculateMexanikTarkib2Start,
  calculateMexanikTarkib2Success,
  calculateMexanikTarkib2Failure,
  //row3
  calculateFizikQum3Start,
  calculateFizikQum3Success,
  calculateFizikQum3Failure,
  calculateFizikLoy3Start,
  calculateFizikLoy3Success,
  calculateFizikLoy3Failure,
  calculateMexanikTarkib3Start,
  calculateMexanikTarkib3Success,
  calculateMexanikTarkib3Failure,
  //row4
  calculateFizikQum4Start,
  calculateFizikQum4Success,
  calculateFizikQum4Failure,
  calculateFizikLoy4Start,
  calculateFizikLoy4Success,
  calculateFizikLoy4Failure,
  calculateMexanikTarkib4Start,
  calculateMexanikTarkib4Success,
  calculateMexanikTarkib4Failure,
  //row5
  calculateFizikQum5Start,
  calculateFizikQum5Success,
  calculateFizikQum5Failure,
  calculateFizikLoy5Start,
  calculateFizikLoy5Success,
  calculateFizikLoy5Failure,
  calculateMexanikTarkib5Start,
  calculateMexanikTarkib5Success,
  calculateMexanikTarkib5Failure,
  //row6
  calculateFizikQum6Start,
  calculateFizikQum6Success,
  calculateFizikQum6Failure,
  calculateFizikLoy6Start,
  calculateFizikLoy6Success,
  calculateFizikLoy6Failure,
  calculateMexanikTarkib6Start,
  calculateMexanikTarkib6Success,
  calculateMexanikTarkib6Failure,
  //row7
  calculateFizikQum7Start,
  calculateFizikQum7Success,
  calculateFizikQum7Failure,
  calculateFizikLoy7Start,
  calculateFizikLoy7Success,
  calculateFizikLoy7Failure,
  calculateMexanikTarkib7Start,
  calculateMexanikTarkib7Success,
  calculateMexanikTarkib7Failure,
  //row8
  calculateFizikQum8Start,
  calculateFizikQum8Success,
  calculateFizikQum8Failure,
  calculateFizikLoy8Start,
  calculateFizikLoy8Success,
  calculateFizikLoy8Failure,
  calculateMexanikTarkib8Start,
  calculateMexanikTarkib8Success,
  calculateMexanikTarkib8Failure,
} = calculateSlice.actions;
export default calculateSlice.reducer;
