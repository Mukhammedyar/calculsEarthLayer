import React, { useEffect, useState } from 'react'
import List3Input from './List3Input';
import { useDispatch } from 'react-redux';
import {value2SetStart, value2SetSuccess } from '../../Reducer/ValueList2';
import List3Const from './List3Const';
import List3Result from './List3Result';
import { useSelector } from 'react-redux'
import { plo, qqal } from '../../API/tableList2'
import { jamiQiymatlarSuccess, shorYuvishSuccess, tigizQoldiqSuccess, tipPerList3Success, tipSuccess, valuesResultSuccess } from '../../Reducer/List3Values';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

function List3() {
  const [jadvalQiymatlari, setJadvalQiymatlari] = useState(Array(8).fill(Array(6).fill(0)));
  const [valueResult, setValueResult] = useState(Array(8).fill(Array(6).fill(0)));
  var typeArray = [], typePer = [], PloConstResult = Array(8).fill(0)
  const [shorlanishDarajasi, setShorlanishDarajasi] = useState('')

  const dispatch = useDispatch()
  const { valuesList2 } = useSelector(state => state.valuesList2)
  const { loggedIn } = useSelector(state => state.auth)
  const { values } = useSelector(state => state.valuesList1)
  const { shorYuvish , tigizQoldiqJami} = useSelector(state => state.valuesList3)



  const handleChange = async (rowIndex, colIndex, event) => {
    try {
      const newQiymat = jadvalQiymatlari.map(row => [...row])
      newQiymat[rowIndex][colIndex] = event.target.value;
      setJadvalQiymatlari(newQiymat);

      dispatch(value2SetSuccess(newQiymat))
      await setDoc(doc(db, "ValuesList2", `row_${rowIndex}`), { data: newQiymat[rowIndex] });

      let multipliedArray = [];
      for (let i = 0; i < jadvalQiymatlari.length; i++) {
        let multipliedRow = [];
        for (let j = 0; j < jadvalQiymatlari[i].length; j++) {
          multipliedRow.push(newQiymat[i][j] * parseFloat(qqal[i].qqal) * parseFloat(values[i][7]));
        }
        multipliedArray.push(multipliedRow);
      }
      await setDoc(doc(db, "Results3", `row_${rowIndex}`), { data: multipliedArray[rowIndex] });
      setValueResult(multipliedArray)
      dispatch(valuesResultSuccess(multipliedArray))
      
      let jamiQiymatlarArray = [];
      for (let j = 0; j < multipliedArray[0].length; j++) {
        let sum = 0;
        for (let i = 0; i < multipliedArray.length; i++) {
          sum += multipliedArray[i][j];
        }
        jamiQiymatlarArray.push(sum);
      }

      dispatch(jamiQiymatlarSuccess(jamiQiymatlarArray));
      await setDoc(doc(db, "Jami3", "JOUiIpphpwbfDqms0Uq4"), { data: jamiQiymatlarArray });

      shorYuvishCalculing()
      const shorlanishDarajasiQuery = getTigizStatus(tigizQoldiqJami)
      setShorlanishDarajasi(shorlanishDarajasiQuery)
    } catch (error) {
        console.log(error);
    }
};



  useEffect(() => {
    try {
      valuesList2.forEach((item, index) => {
        const ratio = item[2] / item[1];
        typeArray.push(
            ratio > 0 && ratio <= 0.5 ? "Хлоридли" :
            ratio > 0.5 && ratio <= 1 ? "Сульфат-хлоридли" :
            ratio > 1 && ratio <= 5 ? "Хлорид-сульфатли" :
            ratio > 5 ? "Сульфатли" : "---"
        );
        typePer.push(
            ratio > 0 && ratio <= 0.5 ? "1" :
            ratio > 0.5 && ratio <= 1 ? "2" :
            ratio > 1 && ratio <= 5 ? "3" :
            ratio > 5 ? "4" : "---"
        );
      });
      const ConstResultPlo = PloConstResult.map((row, rowIndex) => {
        return parseFloat(plo[rowIndex].plo) * parseFloat(qqal[rowIndex].qqal) * parseFloat(values[rowIndex][7]); 
      });;
      
      dispatch(tigizQoldiqSuccess(ConstResultPlo));
      dispatch(tipSuccess([...typeArray]));
      dispatch(tipPerList3Success([...typePer]));
      getTigizStatus(tigizQoldiqJami)
      
    } catch (error) {
      console.log(error);
    }
  }, [db, loggedIn])

    
    
  function getTigizStatus(tigizQoldiqJami) {
    return tigizQoldiqJami > 0 && tigizQoldiqJami <= 50 ? "Шурланмаган" 
        : tigizQoldiqJami > 50 && tigizQoldiqJami <= 100 ? "Кучсиз шурланган" 
        : tigizQoldiqJami > 100 && tigizQoldiqJami <= 200 ? "Уртача шурланган"
        : tigizQoldiqJami > 200 && tigizQoldiqJami <= 300 ? "Кучли шурланган"
        : tigizQoldiqJami > 300 ? "Шурхоклар" : "xato"
  }
  const shorYuvishCalculing = async () => {
    let shorYuvishQiymat = []
    try {
        const mexanikTarkibQuery = await getDocs(collection(db, "Results"))
        const mexanikTarkib = mexanikTarkibQuery.docs.map(doc => doc.data().data);
        const shorYuvish = () => {
            switch (shorlanishDarajasi) {
                case "Шурланмаган": return calculateShorlanmagan(mexanikTarkib[0]);
                case "Кучсиз шурланган": return calculateKuchsizShurlangan(mexanikTarkib[0]);
                case "Уртача шурланган": return calculateOrtachaShorlangan(mexanikTarkib[0]);
                case "Кучли шурланган": return calculateKuchliShorlangan(mexanikTarkib[0]);
                case "Шурхоклар": return calculateShurxoqlar(mexanikTarkib[0]);
                default: return ["X0", "Y0", "Y0"];
            }
        }
        const calculateShorlanmagan = (mexanikTarkibValue) => {
            switch (mexanikTarkibValue) {
                case "Qum": return ["X1", "Y1", "Z1"];
                case "Qumloq": return ["X2", "Y2", "Z2"];
                case "Yengil qumloq": return ["X3", "Y3", "Z3"];
                case "Orta qumloq": return ["X4", "Y4", "Z4"];
                case "Ogir qumloq": return ["X5", "Y5", "Z5"];
                case "Loy": return ["X6", "Y6", "Z6"];
                // Qolgan qiymatlar...
                default: return ["X0", "Y0", "Y0"];
            }
        }
        const calculateKuchsizShurlangan = (mexanikTarkibValue) => {
            switch (mexanikTarkibValue) {
                case "Qum": return ["X7", "Y7", "Z7"];
                case "Qumloq": return ["X8", "Y8", "Z8"];
                case "Yengil qumloq": return ["X9", "Y9", "Z9"];
                case "Orta qumloq": return ["X10", "Y10", "Z10"];
                case "Ogir qumloq": return ["X11", "Y11", "Z11"];
                case "Loy": return ["X12", "Y12", "Z12"];
                // Qolgan qiymatlar...
                default: return ["X0", "Y0", "Y0"];
            }
        }
        const calculateOrtachaShorlangan = (mexanikTarkibValue) => {
            switch (mexanikTarkibValue) {
                case "Qum": return ["X13", "Y13", "Y13"];
                case "Qumloq": return ["X14", "Y14", "Y14"];
                case "Yengil qumloq": return ["X15", "Y15","Y15"];
                case "Orta qumloq": return ["X16", "Y16", "Z16"];
                case "Ogir qumloq": return ["X17", "Y17", "Z17"];
                case "Loy": return ["X18", "Y18", "Z18"];
                // Qolgan qiymatlar...
                default: return ["X0", "Y0", "Y0"];
            }
        }
        const calculateKuchliShorlangan = (mexanikTarkibValue) => {
            switch (mexanikTarkibValue) {
                case "Qum": return ["X19", "Y19", "Y19"];
                case "Qumloq": return ["X20", "Y20", "Y20"];
                case "Yengil qumloq": return ["X21", "Y21","Y21"];
                case "Orta qumloq": return ["X22", "Y22", "Z22"];
                case "Ogir qumloq": return ["X23", "Y23", "Z23"];
                case "Loy": return ["X24", "Y24", "Z24"];
                // Qolgan qiymatlar...
                default: return ["X0", "Y0", "Y0"];
            }
        }
        const calculateShurxoqlar= (mexanikTarkibValue) => {
            switch (mexanikTarkibValue) {
                case "Qum": return ["X25", "Y25", "Y25"];
                case "Qumloq": return ["X26", "Y26", "Y26"];
                case "Yengil qumloq": return ["X27", "Y27","Y217"];
                case "Orta qumloq": return ["X28", "Y28", "Z28"];
                case "Ogir qumloq": return ["X29", "Y29", "Z29"];
                case "Loy": return ["X30", "Y30", "Z30"];
                // Qolgan qiymatlar...
                default: return ["X0", "Y0", "Y0"];
            }
        }
        shorYuvishQiymat = shorYuvish()
      dispatch(shorYuvishSuccess(shorYuvishQiymat))
      console.log(shorYuvishQiymat);
    } catch (error) {
      console.log(error); 
    }
  }

  return (
    <div className='min-h-[100vh] px-10 md:px-20'>
      <div className='flex mt-5 justify-center items-start gap-2'>
        <List3Const/>
        <List3Input 
          jadvalQiymatlari={jadvalQiymatlari}
          setJadvalQiymatlari={setJadvalQiymatlari}
          handleChange={handleChange}
          valueResult={valueResult}
          setValueResult={setValueResult}/>
        <List3Result shorlanishDarajasiQuery={shorlanishDarajasi} />
      </div>
      <table className='border border-slate-500 bg-white rounded-lg p-2'>
        <tbody className=''>
          <tr className='h-[50px] text-center font-medium'>
            <td className="border-r p-1 bg-blue-300 text-start border-gray-300 w-[170px]">Шўр ювиш меъёрлари (минг м3)</td>
            <td className="border-r p-1 bg-yellow-200 border-slate-300 w-[70px]">{shorYuvish[0]}</td>
            <td className="border-r p-1 bg-blue-300 text-start border-gray-300 w-[170px]">Шўр ювиш сони</td>
            <td className="border-r p-1 bg-yellow-200 border-slate-300 w-[70px]">{shorYuvish[1]}</td>
            <td className="border-r p-1 bg-blue-300 text-start border-gray-300 w-[170px]">Шўр ювиш муддатлари (ойлар)</td>
            <td className="p-1 w-[70px] bg-yellow-200">{shorYuvish[2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default List3