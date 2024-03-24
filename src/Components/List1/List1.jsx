import React, { useState } from 'react'
import TableInputHead from './tableInputHead';
import { useDispatch, useSelector } from 'react-redux';
import {valueSetStart, valueSetSuccess } from '../../Reducer/ValuesList1';
import TableNatija from './tableNatija';
import List3Input from './List3Input';
import TableLists from './tableLists';
import Jami from './Jami';
import { qqal } from '../../API/tableList2'
import { plo } from '../../API/tableList2'
import { tigizQoldiqSuccess } from '../../Reducer/List3Values';



function List1() {
  const dispatch = useDispatch()
  const [jadvalQiymatlari, setJadvalQiymatlari] = useState(Array(8).fill(Array(8).fill('')));
  const [ploArray, setPloArray] = useState([])
  const {values}= useSelector(state => state.valuesList1)
  
  const handleChange = (row, col, event) => {
    dispatch(valueSetStart())
    const newJadvalQiymatlari = jadvalQiymatlari.map(row => [...row]);
    try {
      newJadvalQiymatlari[row][col] = event.target.value;
      setJadvalQiymatlari(newJadvalQiymatlari);
      dispatch(valueSetSuccess([...newJadvalQiymatlari]))
    } catch (error) {
      console.log(error);
    }
  };
  const handlePloSetArray = () => {
    const arr = []
    values.map((item, index) => {
        arr[index]=parseFloat(qqal[index]?.qqal) * parseFloat(plo[index]?.plo) * parseFloat(values[index][7])
    })
    dispatch(tigizQoldiqSuccess([...arr]))
  }

  const saveAllValues = async () => {
    dispatch(valueSetStart())
    try {
      dispatch(valueSetSuccess([...jadvalQiymatlari]))
      handlePloSetArray()
      dispatch(valueSetSuccess(values))
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
              <List3Input jadvalQiymatlari={jadvalQiymatlari} handleChange={handleChange} />
            </table>
          </div>
          <div>
            <p>Jami</p>
            <Jami/>
          </div>
          <div>
            Natiyja
            <TableNatija/>
          </div>
        </div>
      <button onClick={saveAllValues} className='bg-blue-600 px-2 rounded-md text-white items-start'>Hisoblash</button>
      </div>
  );
}

export default List1

