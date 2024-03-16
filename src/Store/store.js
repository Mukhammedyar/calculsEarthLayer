import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/auth";
import List1Reducer from "../Reducer/ValuesList1";
import List2Reducer from "../Reducer/ValueList2";
import List3Reducer from "../Reducer/List3Values";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    valuesList1: List1Reducer,
    valuesList2: List2Reducer,
    valuesList3: List3Reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
