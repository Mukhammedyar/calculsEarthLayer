import React, { useEffect, useState } from 'react'
import { qqalList1 } from '../../API/tableList2'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../config/firebase'
import { fetchData } from '../../Functions/fetchDataList1'
import { fizikLoySuccess, fizikQumSuccess, jamiNatiyjatSuccess } from '../../Reducer/ValuesList1'


export default function Results({values1}) {
    const dispatch = useDispatch()
    const { length } = useSelector(state => state.tableLength)
    const listData = Array(length).fill(0)
    const [results, setResults] = useState(Array(6).fill(Array(8).fill("")))
    const theadValues = ["Fizik qum", "Fizik loy", "Mexanik tarkib"]
    
    useEffect(() => {
        fetchData(setResults, dispatch, db)
        dispatch(fizikQumSuccess(results[2]));
        dispatch(fizikLoySuccess(results[1]));
    }, [db, values1, length, dispatch])

  return (
    <div>
        <p>Natiyja</p>
        <table
            className="shadow-lg border bg-white text-center font-light dark:border-neutral-500 rounded-lg">
            <thead className="border-b h-[82px] text-xs md:text-sm border-gray-300 font-medium dark:border-neutral-500 rounded">
                <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                    {theadValues.map((item, index) => (
                        <th
                            key={index}
                            scope="col"
                            rowSpan={2}
                            className="border-r px-2 border-neutral-300">
                            {item}
                        </th> 
                    ))}
                    
                </tr>
            </thead>
            <tbody className='text-xs md:text-sm'>
                {/* 1-qatar */}
                {listData.map((item ,index)=> (
                    <tr key={index} className={`border-b font-medium h-[33px] ${index % 2 == 1 ? "bg-gray-100" : "bg-white"}`}>
                        <td className='border-r'>{results[3][index]?.toString().slice(0,5)}</td>
                        <td className='border-r'>{results[2][index]?.toString().slice(0,7)}</td>
                        <td className='border-r min-w-[100px]'>{results[6] == undefined ? "" : results[6][index]}</td>
                    </tr> 
                ))}
                <tr className={'bg-blue-300 h-[33px] font-medium'}>
                    <td className='border-r'>{results[4][9]?.toString().slice(0,5)}</td>
                    <td className='border-r py-[2px]'>{results[4][10]?.toString().slice(0,5)}</td>
                    <td className='border-r py-[2px]'>{results[1]}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
