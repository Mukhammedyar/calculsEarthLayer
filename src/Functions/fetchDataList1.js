import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import {
  jamiNatiyjatSuccess,
  jamiPercentSuccess,
} from "../Reducer/ValuesList1";
import { db } from "../config/firebase";

export const fetchData = async (setResults, dispatch) => {
  const querySnapshot = await getDocs(collection(db, "Values")); // get valuesInput as List1 from firestore
  const data = querySnapshot.docs.map((doc) => doc.data());

  const lenthQuery = await getDocs(collection(db, "TableLength")); // table length
  const lengthData = lenthQuery.docs.map((doc) => doc.data().data);
  const length = lengthData[0];

  const qatlamQalingiQuery = await getDocs(
    // get Qatlam qalinligi as List1 from firestore
    collection(db, "list1QatlamQalinligi")
  );
  const qatlamQalingiData = qatlamQalingiQuery.docs.map(
    (doc) => doc.data().arr
  );
  const qatlamQalingi = qatlamQalingiData[1];

  let dataInput = data.slice(0, length);
  let valuesInputArray = Array(length).fill(Array(8).fill(0));
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < 8; j++) {
      valuesInputArray[i] = dataInput[i].data;
    }
  }

  const fizikQumArray = [],
    fizikLoyArray = [], // fizikloy di arrayga saqlaw ushin
    jamiPerArray = Array(8).fill(0), //Jami komponent ushin value saqlaw ushin
    jamiQiymatlar = Array(10).fill(0), // list1 astindagi jami fizikloy jami hami fizik qum jaminin valueslerdi saqlaw ushin
    qatlamQalinligiArray = qatlamQalingi.slice(0, length),
    qatlamQalinligiJamiArray = qatlamQalingiData[0],
    mexanikTarkib = Array(8).fill(""); //mexanik tarkib values saqlaw ushin
  let mexanikTarkibJami = ""; //mexanik tarkib jami value saqlaw ushin
  let fizikQumVar = 0,
    fizikLoyVar = 0,
    inputValuesVar = 0,
    fizikQumJamiVar = 0,
    fizikLoyJamiVar = 0,
    XajmOgirligiJami = 0,
    JamiPercentVar = 0,
    valuesInputWithOutXO = Array(length).fill(0), //values Input without Xajm ogirligi alohida arrayga otkazish
    xajmOgirligiVar = Array(length).fill(0); //xajm ogirligini alohida arrayga otkazish

  try {
    for (let index = 0; index < length; index++) {
      valuesInputArray.map((rows, i) => {
        let arr = rows.slice(7, 8);
        xajmOgirligiVar[i] = arr[0];
      });

      valuesInputArray.map((rows, i) => {
        let arr = rows.slice(0, 7);
        valuesInputWithOutXO[i] = arr;
      });

      for (let colIndex = 0; colIndex < 4; colIndex++) {
        //fizik qumdi esaplaydi
        fizikQumVar += parseFloat(valuesInputArray[index][colIndex]);
        fizikQumArray[index] = fizikQumVar;
      }
      fizikQumVar = 0;

      // 5 - 8 ustunlar yigindisi fizik loydi esaplaydi
      for (let colIndex = 4; colIndex < 7; colIndex++) {
        fizikLoyVar += parseFloat(valuesInputArray[index][colIndex]);
        fizikLoyArray[index] = fizikLoyVar;
      }
      fizikLoyVar = 0;
      jamiPerArray[index] = fizikLoyArray[index] + fizikQumArray[index];

      for (let i = 0; i < 8; i++) {
        fizikLoyArray[i] <= 10 //mexanik tarkib
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
    }

    for (let index = 0; index < 7; index++) {
      for (let i = 0; i < length; i++) {
        //fizik qum ham fizik loy jami sin esaplaydi
        fizikQumJamiVar +=
          parseFloat(xajmOgirligiVar[i]) *
          parseFloat(qatlamQalinligiArray[i]) *
          fizikQumArray[i];
        fizikLoyJamiVar +=
          parseFloat(xajmOgirligiVar[i]) *
          parseFloat(qatlamQalinligiArray[i]) *
          fizikLoyArray[i];
        // input astindagi jami qiymatlardi esaplaydi
        XajmOgirligiJami +=
          parseFloat(qatlamQalinligiArray[i]) * xajmOgirligiVar[i];
        inputValuesVar +=
          parseFloat(xajmOgirligiVar[i]) *
          parseFloat(qatlamQalinligiArray[i]) *
          parseFloat(valuesInputWithOutXO[i][index]);
      }
      inputValuesVar = inputValuesVar / XajmOgirligiJami; // cikl aqirindagi boliw ameli
      jamiQiymatlar[index] = inputValuesVar;
      jamiQiymatlar[7] =
        XajmOgirligiJami / parseFloat(qatlamQalinligiJamiArray);
      XajmOgirligiJami = 0;
      inputValuesVar = 0;

      fizikQumJamiVar /=
        parseFloat(qatlamQalinligiJamiArray) * parseFloat(jamiQiymatlar[7]);
      fizikLoyJamiVar /=
        parseFloat(qatlamQalinligiJamiArray) * parseFloat(jamiQiymatlar[7]);

      jamiQiymatlar[9] = fizikQumJamiVar;
      jamiQiymatlar[10] = fizikLoyJamiVar;
      JamiPercentVar = fizikQumJamiVar + fizikLoyJamiVar;
      jamiQiymatlar[8] = JamiPercentVar.toFixed();
      fizikQumJamiVar = 0;
      fizikLoyJamiVar = 0;
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
    }

    // shiqqan naiyjelerdi firebase database Results collectionga saqlaw
    await setDoc(doc(db, "Results", "jamiYigindi"), { data: jamiPerArray });
    await setDoc(doc(db, "Results", "jamiInputs"), {
      data: jamiQiymatlar,
    });
    await setDoc(doc(db, "Results", "fizikQum"), { data: fizikQumArray });
    await setDoc(doc(db, "Results", "fizikLoy"), { data: fizikLoyArray });
    await setDoc(doc(db, "Results", "mexanikTarkib"), { data: mexanikTarkib });
    await setDoc(doc(db, "Results", "MexanikTarkibJami"), {
      data: mexanikTarkibJami,
    });

    // results collectionnan maglumatlardi aliw
    const resultsDoc = await getDocs(collection(db, "Results")); // Firestore'dan belgeleri al
    const getResults = resultsDoc.docs.map((doc) => doc.data());

    const resultsArray = getResults.map((result) => result.data);
    setResults(resultsArray);

    // dispatch arqali reducerge  saqlaw <ValuesList1.js qa!>
    dispatch(jamiNatiyjatSuccess(resultsArray[4]));
    dispatch(jamiPercentSuccess(jamiPerArray));
  } catch (error) {
    console.log(error);
  }
};
