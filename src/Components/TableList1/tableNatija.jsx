import React, { useEffect, useState } from 'react'
import { list } from '../../API/tableList'
import { useDispatch, useSelector } from 'react-redux'
import { calculsStart, fizikLoySuccess, fizikQumSuccess } from '../../Reducer/ValuesList1'

export default function TableNatija() {
    const [listData, setListData] = useState(list)
    const dispatch = useDispatch()
    const { values,fizikQum,fizikLoy } = useSelector(state => state.valuesList1)

   
    useEffect(() => {
        const fizikQumArray = [],
            fizikLoyArray = [],
            mexanikTarkibArray = [];
        fizikQumArray.length = 8
        fizikLoyArray.length = 8
        mexanikTarkibArray.length = 8
        dispatch(calculsStart())
        try {
            values.map((row, rowIndex) => {
                let sum1 = 0,
                    sum2 = 0,
                    sum3 = 0;
                for (let colIndex = 0; colIndex < 4; colIndex++) {
                    sum1 += parseFloat(row[colIndex]);
                }
                fizikQumArray[rowIndex]=sum1
                for (let colIndex = 4; colIndex < 8; colIndex++) {
                    sum2 += parseFloat(row[colIndex]);
                }
                fizikLoyArray[rowIndex]=sum2
            })
            dispatch(fizikQumSuccess([...fizikQumArray]))
            dispatch(fizikLoySuccess([...fizikLoyArray]))
            console.log(fizikLoyArray);
        } catch (error) {
            console.log(error);
        }
    },[values])

  return (
    <table
        className="shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 py-5 border-neutral-300">
                    Физик қум
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 py-5 border-neutral-300">
                    Физик лой
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 py-5 border-neutral-300">
                    Механик таркиб
                </th>
            </tr>
        </thead>
        <tbody>
        {/* 1-qatar */}
        {listData.map((item ,index)=> (
            <tr key={ item.id}  className='border-b'>
            <td className='border-r p-1'>{fizikQum[index]?.toString().slice(0,5)}</td>
            <td className='border-r p-1'>{fizikLoy[index]?.toString().slice(0,7)}</td>
            <td className='border-r p-1'>{item.tch}</td>
        </tr> 
        ))}
    </tbody>
    </table>
  )
}
