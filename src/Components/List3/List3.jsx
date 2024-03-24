import React, { useEffect, useState } from 'react'
import List3Input from './List3Input';
import { useDispatch } from 'react-redux';
import {value2SetStart, value2SetSuccess } from '../../Reducer/ValueList2';
import List3Const from './List3Const';
import List3Result from './List3Result';
import { useSelector } from 'react-redux'
import { qqal } from '../../API/tableList2'
import { list3 } from '../../API/tableList'
import { jamiQiymatlarSuccess, tipPerList3Success, tipSuccess, valuesResultSuccess } from '../../Reducer/List3Values';

function List3() {
  const [jadvalQiymatlari, setJadvalQiymatlari] = useState(Array(8).fill(Array(6).fill('')));
  const dispatch = useDispatch()
  const { valuesList2 } = useSelector(state => state.valuesList2)
  const { values } = useSelector(state => state.valuesList1)
  const { valuesResult } = useSelector(state => state.valuesList3)
  
  const handleChange = (row, col, event) => {
    dispatch(value2SetStart())
    const newJadvalQiymatlari = jadvalQiymatlari.map(row => [...row]);
    try {
        newJadvalQiymatlari[row][col] = event.target.value;
        setJadvalQiymatlari(newJadvalQiymatlari);
        dispatch(value2SetSuccess(newJadvalQiymatlari))
    } catch (error) {
      console.log(error);
    }
  };

  let array = Array(8).fill(Array(6).fill(0))
  
  function CalculsResultsList3() {
      array = array?.map((row, rowIndex) => {
          return row.map((col, colIndex) => {
            return parseFloat(valuesList2[rowIndex][colIndex]) * parseFloat(qqal[colIndex].qqal) * parseFloat(values[rowIndex][7])
          })
      })
     return dispatch(valuesResultSuccess([...array]))
  }
  function CalculsResultsValues() {
    var sum = 0
    var jamiQiymatlarList3 = []
    for (let i = 0; i < 6; i++){
      for (let j = 0; j < 8; j++){
        sum += parseFloat(valuesList2[j][i])
      }
      jamiQiymatlarList3[i] = sum
      sum=0
    }
    dispatch(jamiQiymatlarSuccess(jamiQiymatlarList3));
  }
    
  const typeCalc = () => {
      var typeArray = []
      typeArray = valuesList2.map((item, index) => {
          return item[2] / item[1] > 0 && item[2] / item[1] <= 0.5 ? "Хлоридли" :
          item[2] / item[1] > 0.5 && item[2] / item[1] <= 1 ? "Сульфат-хлоридли" :
          item[2] / item[1] > 1 && item[2] / item[1] <= 5 ? "Хлорид-сульфатли" :
          item[2] / item[1] > 5 ? "Сульфатли" : "---"
      })
      return typeArray
  }
  const typePerCalc = () => {
    var typePerArray = []
      typePerArray = valuesList2.map((item,index) => {
          return item[2] / item[1] > 0 && item[2] / item[1] <= 0.5 ? "1" :
          item[2] / item[1] > 0.5 && item[2] / item[1] <= 1 ? "2" :
          item[2] / item[1] > 1 && item[2] / item[1] <= 5 ? "3" :
          item[2] / item[1] > 5 ? "4" : "---"
      })
      return typePerArray
  }

  const saveAll = () => {
    const typeArray = typeCalc(); // Type array ni hisoblash
    const typePerArray = typePerCalc(); // Type array ni hisoblash
    dispatch(tipSuccess(typeArray));
    dispatch(tipPerList3Success(typePerArray));
    CalculsResultsList3()
    CalculsResultsValues()
  }

  return (
    <div className='min-h-[100vh] px-10 md:px-20'>
      <div className='flex mt-5 justify-center items-start gap-2'>
        <List3Const/>
        <List3Input jadvalQiymatlari={jadvalQiymatlari} handleChange={handleChange} />
        <List3Result/>
      </div>
      <button onClick={saveAll} className='bg-blue-600 text-white px-2 py-1'>Hisoblash</button>
    </div>
  )
}

export default List3