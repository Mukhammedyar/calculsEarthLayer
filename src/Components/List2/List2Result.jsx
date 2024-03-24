import React, { useState } from 'react'
import { list1 } from '../../API/tableList'
import { useSelector } from 'react-redux'

export default function List2Result() {
    const [listData, setListData] = useState(list1)
    const {tip, tipPer} = useSelector(state => state.valuesList2)
  return (
    <table
        className="shadow-lg border bg-white text-center text-xs font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[70px] border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Тип
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Тип (N%)
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Степень засоления
                </th>
            </tr>
        </thead>
        <tbody className='h-[325px]'>
        {/* 1-qatar */}
        {listData.map((item ,index)=> (
            index < 8 ? 
            <tr key={ item.id} className='border-b font-normal'>
                <td className='border-r px-2'>{tip[index]}</td>
                <td className='border-r'>{tipPer[index]}</td>
                <td className='border-r'>{"NaN"}</td>
            </tr> 
            : ""
        ))}
    </tbody>
    </table>
  )
}
