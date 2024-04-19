import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import {
  fizikLoySuccess,
  fizikQumSuccess,
  jamiNatiyjatSuccess,
  jamiPercentSuccess,
} from "../Reducer/ValuesList1";

export const fetchData = async (db, listData, setResults, dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "Values")); // Firestore'dan belgeleri al
    const data = querySnapshot.docs.map((doc) => doc.data()); // Verileri diziye dönüştür
    let newdata = Array(8).fill(Array(8).fill(0));

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        newdata[i] = data[i].data;
      }
    }
    const fizikQumArray = [],
      fizikLoyArray = [],
      jamiPerArray = Array(8).fill(0),
      jamiQiymatlar = Array(10).fill(0),
      mexanikTarkib = Array(8).fill("");
    let mexanikTarkibJami = "";

    newdata.forEach((row, index) => {
      let sum1 = 0,
        sum2 = 0,
        sum3 = 0,
        sum4 = 0,
        sum5 = 0,
        XajmOgirligiJami = 0,
        sum6 = 0;

      for (let colIndex = 0; colIndex < 4; colIndex++) {
        sum1 += parseFloat(newdata[index][colIndex]);
        fizikQumArray[index] = sum1;
      }
      sum1 = 0;
      // 5 - 8 ustunlar yigindisi
      for (let colIndex = 4; colIndex < 7; colIndex++) {
        sum2 += parseFloat(newdata[index][colIndex]);
        fizikLoyArray[index] = sum2;
      }
      sum2 = 0;
      jamiPerArray[index] = fizikLoyArray[index] + fizikQumArray[index];
      for (let i = 0; i < 8; i++) {
        XajmOgirligiJami += parseFloat(listData[i].qqal) * newdata[i][7];
        sum3 +=
          parseFloat(newdata[i][7]) *
          parseFloat(listData[i].qqal) *
          parseFloat(newdata[i][index]);
      }
      sum3 = sum3 / XajmOgirligiJami;
      jamiQiymatlar[index] = sum3;
      jamiQiymatlar[7] = XajmOgirligiJami / parseFloat(listData[8].qqal);
      XajmOgirligiJami = 0;
      sum3 = 0;
      sum4 = 0;

      for (let i = 0; i < 8; i++) {
        sum4 +=
          parseFloat(newdata[index][7]) *
          parseFloat(listData[i].qqal) *
          fizikQumArray[i];
        sum5 +=
          parseFloat(newdata[index][7]) *
          parseFloat(listData[i].qqal) *
          fizikLoyArray[i];

        fizikLoyArray[i] <= 10
          ? (mexanikTarkib[i] = "Қум")
          : fizikLoyArray[i] >= 10 && fizikLoyArray[i] <= 20
          ? (mexanikTarkib[i] = "Qumloq")
          : fizikLoyArray[i] >= 20 && fizikLoyArray[i] <= 30
          ? (mexanikTarkib[i] = "Yengil qumoq")
          : fizikLoyArray[i] >= 30 && fizikLoyArray[i] <= 45
          ? (mexanikTarkib[i] = "Orta qumoq")
          : fizikLoyArray[i] >= 45 && fizikLoyArray[i] <= 60
          ? (mexanikTarkib[i] = "Ogir qumoq")
          : fizikLoyArray[i] >= 60 && fizikLoyArray[i] <= 100
          ? (mexanikTarkib[i] = "Loy")
          : (mexanikTarkib[i] = "--/--");
      }

      sum4 /= parseFloat(listData[8].qqal) * parseFloat(jamiQiymatlar[7]);
      sum5 /= parseFloat(listData[8].qqal) * parseFloat(jamiQiymatlar[7]);
      jamiQiymatlar[8] = sum4;
      jamiQiymatlar[9] = sum5;
      sum6 = sum4 + sum5;
      jamiPerArray[8] = sum6.toFixed();
      sum4 = 0;
      sum5 = 0;

      jamiQiymatlar[9] <= 10
        ? (mexanikTarkibJami = "Qum")
        : jamiQiymatlar[9] >= 10 && jamiQiymatlar[9] <= 20
        ? (mexanikTarkibJami = "Qumloq")
        : jamiQiymatlar[9] >= 20 && jamiQiymatlar[9] <= 30
        ? (mexanikTarkibJami = "Yengil qumloq")
        : jamiQiymatlar[9] >= 30 && jamiQiymatlar[9] <= 45
        ? (mexanikTarkibJami = "Orta qumloq")
        : jamiQiymatlar[9] >= 45 && jamiQiymatlar[9] <= 60
        ? (mexanikTarkibJami = "Ogir qumloq")
        : jamiQiymatlar[9] >= 60 && jamiQiymatlar[9] <= 100
        ? (mexanikTarkibJami = "Loy")
        : (mexanikTarkibJami = "Nimadir Xato");
    });
    await setDoc(doc(db, "Results", "jamiYigindi"), { data: jamiPerArray });
    await setDoc(doc(db, "Results", "jamiInputs"), { data: jamiQiymatlar });
    await setDoc(doc(db, "Results", "fizikQum"), { data: fizikQumArray });
    await setDoc(doc(db, "Results", "fizikLoy"), { data: fizikLoyArray });
    await setDoc(doc(db, "Results", "mexanikTarkib"), { data: mexanikTarkib });
    await setDoc(doc(db, "Results", "MexanikTarkibJami"), {
      data: mexanikTarkibJami,
    });

    const resultsDoc = await getDocs(collection(db, "Results")); // Firestore'dan belgeleri al
    const getResults = resultsDoc.docs.map((doc) => doc.data());

    const resultsArray = getResults.map((result) => result.data);
    setResults(resultsArray);

    dispatch(jamiPercentSuccess(jamiPerArray));
    dispatch(fizikQumSuccess(fizikQumArray));
    dispatch(fizikLoySuccess(fizikLoyArray));
    dispatch(jamiNatiyjatSuccess(resultsArray[3]));
  } catch (error) {
    console.log(error);
  }
};
