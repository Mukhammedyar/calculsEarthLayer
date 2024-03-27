import React, { useEffect, useState } from 'react'
import TableConst from './tableConstList2'
import TableInput from './TableInput'
import List2Result from './List2Result'
import { useDispatch, useSelector } from 'react-redux'
import { natiyjaValuesSuccess, tipPerSuccess, tipSuccess, value2SetStart, value2SetSuccess } from '../../Reducer/ValueList2'


function List2() {
  const [jadvalQiymatlari2, setJadvalQiymatlari2] = useState(Array(8).fill(Array(6).fill('')));
  const [natijaValues, setNatiyjaValues] = useState(Array(8).fill(Array(6).fill(0)))
  const {valuesList2} = useSelector( state => state.valuesList2)
  const dispatch = useDispatch()

  // input natijalarini olish
  const handleNatijaValues = () => {
      const factors = [0.061, 0.0355, 0.048, 0.02004, 0.0121, 0.023]; // bo'linuvchi sonlar 
      const newArray = valuesList2.map(row => (
        row.map((num, index) => num / factors[index]) // newArrayga bolinmalarni kiritish
      ));
      setNatiyjaValues(newArray) // newArrayni natiyjaValues ga saqlash 
  } 
  
  const handleChange2 = (row, col, event) => {
        const newQiymat = jadvalQiymatlari2.map(row => [...row]);
        try {
          newQiymat[row][col] = event.target.value;
          setJadvalQiymatlari2(newQiymat);
          dispatch(value2SetStart())
          dispatch(value2SetSuccess([...newQiymat]))
        } catch (error) {
          console.log(error);
        }
  };
  // Тип ustunini hisoblash
  const calculsTypeBool = () => {
    var typeArray =[] 
    typeArray = natijaValues.map((row, rowIndex) => (
      row[2] / row[1] > 0 && row[2] / row[1] <= 0.5 ? "Хлоридли" : // CO2 va CI ustunlari bolinmasini orqali hisoblash
      row[2] / row[1] > 0.5 && row[2] / row[1] <= 1 ? "Сульфат-хлоридли":
      row[2] / row[1] > 1 && row[2] / row[1] <= 5 ? "Хлорид-сульфатли":
      row[2] / row[1] > 5 ? "Сульфатли" : "Сульфатли" 
    ))
    return typeArray
  }
  // Тип ustunini hisoblash %
  const calculsTypePer = () => {
    var typeArray =Array(8).fill(0)
    typeArray = natijaValues.map((row, rowIndex) => (
      row[2] / row[1] > 0 && row[2] / row[1] <= 0.5 ? "1" :
      row[2] / row[1] > 0.5 && row[2] / row[1] <= 1 ? "2":
      row[2] / row[1] > 1 && row[2] / row[1] <= 5 ? "3":
      row[2] / row[1] > 5 ? "4" : 4
    ))
    return typeArray
  }
  // tugma bosilganda hisoblash
  const saveAllValues = async () => {
    console.log(jadvalQiymatlari2);
    dispatch(value2SetStart())
    try {
      dispatch(value2SetSuccess([...jadvalQiymatlari2]))
      dispatch(natiyjaValuesSuccess(natijaValues))
      handleNatijaValues()
      dispatch(tipSuccess(calculsTypeBool()))
      dispatch(tipPerSuccess(calculsTypePer()))
      dispatch(value2SetSuccess(valuesList2))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='px-10 my-5 flex flex-col items-start min-h-[100vh]'>
      <div className='flex flex-wrap md:flex-nowrap justify-center items-start gap-1'>
        <div>
          <p className="text-xl pb-2">Ozgarmas Qiymatlar</p>
          <TableConst />
        </div>
        <div className=''>
          <p className="text-xl pb-2">Qiymat Kiritish</p>
          <TableInput jadvalQiymatlari={jadvalQiymatlari2} newArray={natijaValues} handleChange={handleChange2} />
        </div>
        <div>
          <p className="text-xl pb-2">Natiyalar</p>
          <List2Result />
        </div>
      </div>
      <button
        onClick={saveAllValues}
        className='bg-blue-600 disabled:bg-blue-400 px-2 py-1 rounded-md text-white items-start'
      >Hisoblash</button>
    </div>
  )
}

export default List2
