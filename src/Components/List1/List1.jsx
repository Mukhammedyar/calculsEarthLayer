import React, { useState } from 'react'
import TableInputHead from './tableInputHead';
import { useDispatch, useSelector } from 'react-redux';
import ValuesList1, {valueSetStart, valueSetSuccess } from '../../Reducer/ValuesList1';
import TableNatija from './tableNatija';
import List3Input from './List3Input';
import TableLists from './tableLists';
import Jami from './Jami';
import { qqal } from '../../API/tableList2'
import { plo } from '../../API/tableList2'
import { tigizQoldiqSuccess } from '../../Reducer/List3Values';
import {db} from '../../config/firebase'
import {doc, setDoc} from 'firebase/firestore';



function List1() {
  const dispatch = useDispatch()
  const { values } = useSelector(state => state.valuesList1)
  const [values1 , setValues1] = useState(Array(8).fill(Array(8).fill(0)))


  const handleInputChange = async (rowIndex, colIndex, event) => {
    const newArray = [...values1];
    newArray[rowIndex][colIndex] = event.target.value; 
    setValues1(newArray);
  
    try {
      await setDoc(doc(db, "Values", `row_${rowIndex}`), { data: newArray[rowIndex] });
      // console.log("Row " + rowIndex + " successfully updated.");
      const arr = []
      values1.map((item, index) => {
          arr[index]=parseFloat(qqal[index]?.qqal) * parseFloat(plo[index]?.plo) * parseFloat(values1[index][7])
      })
      dispatch(tigizQoldiqSuccess([...arr]))
    } catch (error) {
      console.error('Error updating Firestore:', error);
    }
  };


 

  const saveAllValues = async () => {
    dispatch(valueSetStart())
    try {
      // dispatch(valueSetSuccess([...jadvalQiymatlari]))
      // handlePloSetArray()
      // dispatch(valueSetSuccess(values))
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className='mt-10 flex items-start flex-col px-10 gap-5 min-h-[100vh]'>
        <div className="flex gap-2 flex-wrap md:flex-nowrap items-start">
          <div>
            Ozgarmas Qiymatlar 
            <TableLists/>
          </div>
          <div>
            Qiymat Kiritish
            <table className='shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg'>
              <TableInputHead/>
            <List3Input handleInputChange={handleInputChange} values1={values1} setValues1={setValues1} />
            </table>
          </div>
          <div>
            <p>Jami</p>
            <Jami/>
          </div>
          <div>
            Natiyja
            <TableNatija values1={values1}/>
          </div>
        </div>
      <button onClick={saveAllValues} className='bg-blue-600 px-2 rounded-md text-white items-start'>Hisoblash</button>
      </div>
  );
}

export default List1

