import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/auth";
import error1Reducer from "../Reducer/Input";
import error2Reducer from "../Reducer/errorRow2";
import error3Reducer from "../Reducer/errorRow3";
import error4Reducer from "../Reducer/errorRow4";
import error5Reducer from "../Reducer/errorRow5";
import error6Reducer from "../Reducer/errorRow6";
import error7Reducer from "../Reducer/errorRow7";
import calculateList1Row1Reducer from "../Reducer/CalculateList1Row1";
import valueList1Reducer from "../Reducer/ValuesList1";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error1: error1Reducer,
    error2: error2Reducer,
    error3: error3Reducer,
    error4: error4Reducer,
    error5: error5Reducer,
    error6: error6Reducer,
    error7: error7Reducer,
    calculateRow1: calculateList1Row1Reducer,
    valuesList1: valueList1Reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
