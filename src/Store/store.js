import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/auth";
import valueList1Reducer from "../Reducer/ValuesList1";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    valuesList1: valueList1Reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
