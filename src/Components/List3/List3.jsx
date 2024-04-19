import React, { useEffect, useState } from 'react'
import '../List2/tableInput.css'
import List3Input from './List3Input';
import { useDispatch } from 'react-redux';
import { value2SetSuccess } from '../../Reducer/ValueList2';
import List3Const from './List3Const';
import List3Result from './List3Result';
import { useSelector } from 'react-redux'
import { plo, qqal } from '../../API/tableList2'
import { jamiQiymatlarSuccess, tigizQoldiqSuccess, valuesResultSuccess } from '../../Reducer/List3Values';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import ShorYuvishCalculing from './ShorYuvishCalculing';

function List3() {
  const [jadvalQiymatlari, setJadvalQiymatlari] = useState(Array(8).fill(Array(6).fill(0)));
  const [valueResult, setValueResult] = useState(Array(8).fill(Array(6).fill(0)));
  let PloConstResult = Array(8).fill(0)
  const dispatch = useDispatch()
  const { loggedIn } = useSelector(state => state.auth)
  const { values } = useSelector(state => state.valuesList1)

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
    } catch (error) {
        console.log(error);
    }
};

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const tigizQoldiqQuery = await getDocs(collection(db, "List2TableLists")); 
        const tigizQoldiqArray = tigizQoldiqQuery.docs.map(doc => doc.data().newArray);
        const qatlamQalinligiQuery = await getDocs(collection(db, "list1QatlamQalinligi")); 
        const qatlamQalinligi = qatlamQalinligiQuery.docs.map(doc => doc.data().arr);
        let qqalArray = qatlamQalinligi[1]
        let tigizQoldiq = tigizQoldiqArray[0]
        const ConstResultPlo = PloConstResult.map((row, rowIndex) => {
          return parseFloat(tigizQoldiq[rowIndex]) * parseFloat(qqalArray[rowIndex]) * parseFloat(values[rowIndex][7]); 
        });;
        dispatch(tigizQoldiqSuccess(ConstResultPlo));
      } catch (error) {
        console.log(error);
      }
    }
    dataFetching()
  }, [db, loggedIn])
  return (
    <div className='min-h-[100vh] px-10 md:px-20'>
      <div className='flex mt-5 justify-center items-start gap-2'>
        <div>
          Qatlam qiymatlari
          <List3Const />
        </div>
        <div>
          Qiymat kiritish
          <List3Input 
            jadvalQiymatlari={jadvalQiymatlari}
            setJadvalQiymatlari={setJadvalQiymatlari}
            handleChange={handleChange}
            valueResult={valueResult}
            setValueResult={setValueResult}/>
        </div>
        <div>
          Natiyjaalr
          <List3Result jadvalQiymatlari={jadvalQiymatlari} />
        </div>
      </div>
      <ShorYuvishCalculing jadvalQiymatlari={jadvalQiymatlari}/>
    </div>
  )
}

export default List3