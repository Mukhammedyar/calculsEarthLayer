import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { natiyjaValuesSuccess, tipPerSuccess } from "../Reducer/ValueList2";
import { tipSuccess } from "../Reducer/List3Values";

export const calculateTypes = async (
  jadvalQiymatlari2,
  setNatiyjaValues,
  dispatch,
  factors
) => {
  const newArray = jadvalQiymatlari2.map(
    (row) => row.map((num, index) => num / factors[index]) // newArrayga bolinmalarni kiritish
  );
  setNatiyjaValues(newArray);
  dispatch(natiyjaValuesSuccess(newArray));
  // Tipning solishtirib turini sozlar bilan hisoblash
};

export const calculatevaluesResult = async (
  jadvalQiymatlari2,
  factors,
  setNatiyjaValues,
  dispatch,
  rowIndex,
  db
) => {
  const newArray = jadvalQiymatlari2.map(
    (row) => row.map((num, index) => num / factors[index]) // newArrayga bolinmalarni kiritish
  );
  await setDoc(doc(db, "ResultValuesList2", `row_${rowIndex}`), {
    data: newArray[rowIndex],
  });
  setNatiyjaValues(newArray);
  dispatch(natiyjaValuesSuccess(newArray));
};
