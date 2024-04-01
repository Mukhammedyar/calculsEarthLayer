import React, { useEffect, useState } from 'react'
import TableConst from './tableConstList2'
import TableInput from './TableInput'
import List2Result from './List2Result'
import { useDispatch, useSelector } from 'react-redux'
import { natiyjaValuesSuccess, tipPerSuccess, tipSuccess, value2SetStart, value2SetSuccess } from '../../Reducer/ValueList2'
import { db } from '../../config/firebase'
import { doc, setDoc } from 'firebase/firestore'


function List2() {
  const [jadvalQiymatlari2, setJadvalQiymatlari2] = useState(Array(8).fill(Array(6).fill('')));
  const [natijaValues, setNatiyjaValues] = useState(Array(8).fill(Array(6).fill(0)))
  const dispatch = useDispatch()
  const {valuesList2} = useSelector(state => state.valuesList2)
  const factors = [0.061, 0.0355, 0.048, 0.02004, 0.0121, 0.023]; // bo'linuvchi sonlar 

  const handleChange2 = async (rowIndex, colIndex, event) => {
    const newQiymat = jadvalQiymatlari2.map(row => [...row])
    newQiymat[rowIndex][colIndex] = event.target.value;
    setJadvalQiymatlari2(newQiymat);
    try {
      dispatch(value2SetSuccess(newQiymat))
      const newArray = jadvalQiymatlari2.map(row => (
        row.map((num, index) => num / factors[index]) // newArrayga bolinmalarni kiritish
      ));
      setNatiyjaValues(newArray)
      dispatch(natiyjaValuesSuccess(newArray))
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
            natijaValuesArray={natijaValues}
          />
        </div>
        <div>
          <p className="text-xl pb-2">Natiyalar</p>
          <List2Result jadvalQiymatlari2={ jadvalQiymatlari2 } />
        </div>
      </div>
    </div>
  )
}

export default List2
