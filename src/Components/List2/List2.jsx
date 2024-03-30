import React, { useEffect, useState } from 'react'
import TableConst from './tableConstList2'
import TableInput from './TableInput'
import List2Result from './List2Result'
import { useDispatch, useSelector } from 'react-redux'
import { natiyjaValuesSuccess, tipPerSuccess, tipSuccess, value2SetStart, value2SetSuccess } from '../../Reducer/ValueList2'
import { db } from '../../config/firebase'
import { doc, setDoc } from 'firebase/firestore'


function List2() {
  const [jadvalQiymatlari2, setJadvalQiymatlari2] = useState(Array(8).fill(Array(6).fill(0)));
  const [natijaValues, setNatiyjaValues] = useState(Array(8).fill(Array(6).fill(0)))
  const dispatch = useDispatch()
  const factors = [0.061, 0.0355, 0.048, 0.02004, 0.0121, 0.023]; // bo'linuvchi sonlar 

  const handleChange2 = async (rowIndex, colIndex, event) => {
    const newQiymat = [...jadvalQiymatlari2]
    newQiymat[rowIndex][colIndex] = event.target.value;
    setJadvalQiymatlari2(newQiymat);
    try {
      await setDoc(doc(db, "ValuesList2", `row_${rowIndex}`), { data: newQiymat[rowIndex] });
      const newArray = jadvalQiymatlari2.map(row => (
        row.map((num, index) => num / factors[index]) // newArrayga bolinmalarni kiritish
      ));
      await setDoc(doc(db, "ResultValuesList2", `row_${rowIndex}`), { data: newArray[rowIndex] });
      setNatiyjaValues(newArray)
      dispatch(natiyjaValuesSuccess(newArray))

      var typeArray = [] 
      typeArray = natijaValues.map((row, rowIndex) => (
        row[2] / row[1] > 0 && row[2] / row[1] <= 0.5 ? "Хлоридли" : // CO2 va CI ustunlari bolinmasini orqali hisoblash
        row[2] / row[1] > 0.5 && row[2] / row[1] <= 1 ? "Сульфат-хлоридли":
        row[2] / row[1] > 1 && row[2] / row[1] <= 5 ? "Хлорид-сульфатли":
        row[2] / row[1] > 5 ? "Сульфатли" : "Сульфатли" 
      ))
      await setDoc(doc(db, "Resul2", "typeBool"), { data: typeArray });
      dispatch(tipSuccess(typeArray))
      
      // Tipning foizini hisoblash
      var typePerArray =Array(8).fill(0)
      typePerArray = natijaValues.map((row, rowIndex) => (
        row[2] / row[1] > 0 && row[2] / row[1] <= 0.5 ? "1" :
        row[2] / row[1] > 0.5 && row[2] / row[1] <= 1 ? "2":
        row[2] / row[1] > 1 && row[2] / row[1] <= 5 ? "3":
        row[2] / row[1] > 5 ? "4" : 4
      ))
      await setDoc(doc(db, "Resul2", "typePer"), { data: typePerArray });
      dispatch(tipPerSuccess(typePerArray))
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    const calculateTypes = async () => {
      const newArray = jadvalQiymatlari2.map(row => (
        row.map((num, index) => num / factors[index]) // newArrayga bolinmalarni kiritish
      ));
      setNatiyjaValues(newArray)
      dispatch(natiyjaValuesSuccess(newArray))
      // Tipning solishtirib turini sozlar bilan hisoblash
    }
    calculateTypes()
  }, [db])



  return (
    <div className='px-10 my-5 flex flex-col items-start min-h-[100vh]'>
      <div className='flex flex-wrap md:flex-nowrap justify-center items-start gap-1'>
        <div>
          <p className="text-xl pb-2">Ozgarmas Qiymatlar</p>
          <TableConst />
        </div>
        <div className=''>
          <p className="text-xl pb-2">Qiymat Kiritish</p>
          <TableInput 
            handleChange={handleChange2}
            jadvalQiymatlari={jadvalQiymatlari2}
            setJadvalQiymatlari={setJadvalQiymatlari2}
            natijaValues={natijaValues}
            setNatiyjaValues={setNatiyjaValues}
          />
        </div>
        <div>
          <p className="text-xl pb-2">Natiyalar</p>
          <List2Result />
        </div>
      </div>
    </div>
  )
}

export default List2
