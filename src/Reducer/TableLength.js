import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  length: 8,
};

export const TableLengthSlice = createSlice({
  name: "tableLength",
  initialState,
  reducers: {
    lengthEdit: (state, action) => {
      state.length = action.payload;
    },
  },
});

export const { lengthEdit } = TableLengthSlice.actions;
export default TableLengthSlice.reducer;
