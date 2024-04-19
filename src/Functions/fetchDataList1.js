import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import {
  fizikLoySuccess,
  fizikQumSuccess,
  jamiNatiyjatSuccess,
  jamiPercentSuccess,
} from "../Reducer/ValuesList1";

export const fetchData = async (
  db,
  qatlamQalinligiArray,
  setResults,
  dispatch
) => {
  try {
    const querySnapshot = await getDocs(collection(db, "Values")); // get valuesInput as List1 from firestore
    const data = querySnapshot.docs.map((doc) => doc.data());
    const qatlamQalingiQuery = await getDocs(
      collection(db, "list1QatlamQalinligi")
    ); // get Qatlam qalinligi as List1 from firestore
    const qatlamQalingi = qatlamQalingiQuery.docs.map((doc) => doc.data());

    let valuesInputArray = Array(8).fill(Array(8).fill(0));

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        valuesInputArray[i] = data[i].data;
      }
    }
    const fizikQumArray = [],
      fizikLoyArray = [], // fizikloy di arrayga saqlaw ushin
      jamiPerArray = Array(8).fill(0), //Jami komponent ushin value saqlaw ushin
      jamiQiymatlar = Array(10).fill(0), // list1 astindagi jami fizikloy jami hami fizik qum jaminin valueslerdi saqlaw ushin
      qatlamQalinligiArray = qatlamQalingi[1].arr,
      qatlamQalinligiJamiArray = qatlamQalingi[0].arr,
      mexanikTarkib = Array(8).fill(""); //mexanik tarkib values saqlaw ushin
    let mexanikTarkibJami = ""; //mexanik tarkib jami value saqlaw ushin

    valuesInputArray.forEach((row, index) => {
      let fizikQumVar = 0,
        fizikLoyVar = 0,
        inputValuesVar = 0,
        fizikQumJamiVar = 0,
        fizikLoyJamiVar = 0,
        XajmOgirligiJami = 0,
        JamiPercentVar = 0;

      let xajmOgirligiVar = Array(8).fill(0); //xajm ogirligini alohida arrayga otkazish
      valuesInputArray.map((rows, i) => {
        let arr = rows.slice(7, 8);
        xajmOgirligiVar[i] = arr[0];
      });
      let valuesInputWithOutXO = Array(8).fill(0); //values Input without Xajm ogirligi alohida arrayga otkazish
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

      for (let i = 0; i < 8; i++) {
        //fizik qum ham fizik loy jami sin esaplaydi
        fizikQumJamiVar +=
          parseFloat(xajmOgirligiVar[i]) *
          parseFloat(qatlamQalinligiArray[i]) *
          fizikQumArray[i];
        fizikLoyJamiVar +=
          parseFloat(xajmOgirligiVar[i]) *
          parseFloat(qatlamQalinligiArray[i]) *
          fizikLoyArray[i];

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

      fizikQumJamiVar /=
        parseFloat(qatlamQalinligiJamiArray) * parseFloat(jamiQiymatlar[7]);
      fizikLoyJamiVar /=
        parseFloat(qatlamQalinligiJamiArray) * parseFloat(jamiQiymatlar[7]);

      jamiQiymatlar[8] = fizikQumJamiVar;
      jamiQiymatlar[9] = fizikLoyJamiVar;
      JamiPercentVar = fizikQumJamiVar + fizikLoyJamiVar;
      jamiPerArray[8] = JamiPercentVar.toFixed();
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
    });

    // JamiQiymatlar arrayidagi values InputJami ni ajratib olish va osha arrayning 6 va 7 qiymatlari ornini almashtirib qoyish
    let jamiQiymatlarSliced = jamiQiymatlar;
    let temp = jamiQiymatlarSliced[6];
    jamiQiymatlarSliced[6] = jamiQiymatlarSliced[5];
    jamiQiymatlarSliced[5] = temp;

    // shiqqan naiyjelerdi firebase database Results collectionga saqlaw
    await setDoc(doc(db, "Results", "jamiYigindi"), { data: jamiPerArray });
    await setDoc(doc(db, "Results", "jamiInputs"), {
      data: jamiQiymatlarSliced,
   8 });
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
    console.log(resultsArray[3]);

    // dispatch arqali reducerge  saqlaw <ValuesList1.js qa!>
    dispatch(jamiPercentSuccess(jamiPerArray));
    dispatch(fizikQumSuccess(fizikQumArray));
    dispatch(fizikLoySuccess(fizikLoyArray));
    dispatch(jamiNatiyjatSuccess(resultsArray[3]));
  } catch (error) {
    console.log(error);
  }
};
