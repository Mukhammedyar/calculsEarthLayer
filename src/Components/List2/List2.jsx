import React, { useEffect, useState } from 'react'
import './tableInput.css'
import TableConst from './tableConstList2'
import TableInput from './TableInput'
import List2Result from './List2Result'
import { useDispatch } from 'react-redux'
import { natiyjaValuesSuccess} from '../../Reducer/ValueList2'
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
          <p className="text-xl pb-2">Qatlam qiymatlari</p>
          <TableConst />
        </div>
        <div className=''>
          <p className="text-xl pb-2">Qiymat kiritish</p>
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
          <List2Result jadvalQiymatlari2={ jadvalQiymatlari2 } />
        </div>
      </div>
    </div>
  )
}

export default List2
