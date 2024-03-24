import React, { useState } from 'react'
import { list1 } from '../../API/tableList'
import { qqal } from '../../API/tableList2'
export default function TableLists() {
    const [listData, setListData] = useState(list1)
    return (
    <table
        className="shadow-lg  border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[82px] border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b text-xs md:text-sm border-neutral-300 font-normal'>
                <th
                    rowSpan={2}
                    scope="col"
                    className="border-r border-neutral-300 ">
                    Кесмa N0
                </th>
                <th
                    colSpan={2}
                    scope="col"
                    className="border-r  border-neutral-300">
                    Генетик қатлам.см
                </th>
                <th
                    colSpan={2}
                    rowSpan={2}
                    scope="col"
                    className="border-r max-w-[100px] px-1 border-neutral-300">
                    Қатлам қалыңлығы
                </th>
            </tr>
            <tr className='bg-gray-200'>
                <th
                    scope="col"
                    className="border-r pl-1 font-medium border-neutral-300">
                    Жоқарғы шегара 
                </th>
                <th
                    scope="col"
                    className="border-r pr-1 font-medium border-neutral-300">
                    Төменги шегара 
                </th>
        </tr>
        </thead>
        <tbody className='h-[300px] text-xs md:text-sm'>
        {/* 1-qatar */}
        {listData.map((item , index)=> (
           <tr key={item.id} className={`${index == 8 ? "bg-blue-300": "bg-white"} border-b`}>
            <th className='border-r'>{item.id ===9 ? "Oratasha" : item.id}</th>
            <td className='border-r'>{item.id ===9 ? "" : item.ych}</td>
            <td className='border-r'>{item.id ===9 ? "" : item.tch}</td>
            <td className='border-r' colSpan={2}>{qqal[index].qqal}</td>
        </tr> 
        ))}
    </tbody>
    </table>
  )
}
