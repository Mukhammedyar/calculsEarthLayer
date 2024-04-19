import React, { useEffect, useState } from 'react'
import { qqalList1 } from '../../API/tableList2'
import { useDispatch } from 'react-redux'
import { db } from '../../config/firebase'
import { fetchData } from '../../config/fetchDataList1'


export default function TableNatija({values1}) {
    const [listData, setListData] = useState(qqalList1)
    const dispatch = useDispatch()
    const [results, setResults] = useState(Array(6).fill(Array(8).fill("")))
    
    useEffect(() => {
        fetchData(db, listData, setResults, dispatch)
    }, [db, values1])
    
  return (
    <table
        className="shadow-lg border bg-white text-center font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[82px] text-xs md:text-sm border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Fizik qum
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Fizik loy
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Mexanik tarkib
                </th>
            </tr>
        </thead>
        <tbody className='h-[300px] text-xs md:text-sm'>
        {/* 1-qatar */}
        {listData.map((item ,index)=> (
            index < 8 ? 
            <tr key={ item.id} className='border-b font-medium'>
                <td className='border-r'>{results[2][index]?.toString().slice(0,5)}</td>
                <td className='border-r'>{results[1][index]?.toString().slice(0,7)}</td>
                <td className='border-r min-w-[100px]'>{results[5][index]}</td>
            </tr> 
            : ""
        ))}
        <tr className={'bg-blue-300 h-[33px] font-medium'}>
            <td className='border-r'>{results[3][8]?.toString().slice(0,5)}</td>
            <td className='border-r py-[2px]'>{results[3][9]?.toString().slice(0,5)}</td>
            <td className='border-r py-[2px]'>{results[0]}</td>
        </tr>
    </tbody>
    </table>
  )
}
