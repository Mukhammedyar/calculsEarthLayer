import React, { useState } from 'react'
import { list } from '../../API/tableList'
export default function TableLists() {
    const [listData, setListData] = useState(list)

    return (
    <table
        className="shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    rowSpan={2}
                    scope="col"
                    className="border-r py-2  px-3 border-neutral-300 ">
                    Кесмa N0
                </th>
                <th
                    colSpan={2}
                    scope="col"
                    className="border-r  py-2 px-2 border-neutral-300">
                    Генетик қатлам.см
                </th>
                <th
                    colSpan={2}
                    rowSpan={2}
                    scope="col"
                    className="border-r  py-2 px-2 border-neutral-300">
                    Қатлам қалыңлығы
                </th>
            </tr>
            <tr className='bg-gray-200'>
                <th
                    scope="col"
                    className="border-r px-2 font-medium border-neutral-300">
                    Жоқарғы шегара 
                </th>
                <th
                    scope="col"
                    className="border-r px-2 font-medium border-neutral-300">
                    Төменги шегара 
                </th>
        </tr>
        </thead>
        <tbody>
        {/* 1-qatar */}
        {listData.map(item => (
           <tr key={item.id} className='border-b'>
            <th className='border-r py-1'>{item.id}</th>
            <td className='border-r py-1'>{item.ych}</td>
            <td className='border-r py-1'>{item.tch}</td>
            <td className='border-r py-1' colSpan={2}>{item.qqal}</td>
        </tr> 
        ))}
    </tbody>
    </table>
  )
}
