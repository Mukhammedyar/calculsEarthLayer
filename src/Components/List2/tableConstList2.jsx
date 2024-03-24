import React, { useState } from 'react'
import { list1 } from '../../API/tableList'
import { plo } from '../../API/tableList2'

export default function TableConst() {
    const [listData, setListData]=useState(list1)
    const [ploData, setPloData]=useState(plo)
  return (
    <table
        className="shadow-lg border bg-white text-center font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b text-xs h-[70px] border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    rowSpan={2}
                    scope="col"
                    className="border-r w-[50px] border-neutral-300 ">
                    Кесмa N0
                </th>
                <th
                    colSpan={2}
                    scope="col"
                    className="border-r  px-2 border-neutral-300">
                    Чуқурлик.см
                </th>
                <th
                    colSpan={2}
                    rowSpan={2}
                    scope="col"
                    className="border-r  px-2 border-neutral-300">
                    Тығыз қалдық 
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
        <tbody className='h-[325px] text-xs'>
        {/* 1-qatar */}
        {listData.map((item, index) => (
            index == 8 ? "" :
            <tr key={item.id} className={`border-b`}>
                <th className='border-r w-auto'>{item.id}</th>
                <td className='border-r'>{item.ych}</td>
                <td className='border-r'>{item.tch}</td>
                <td className='border-r' colSpan={2}>{ploData[index]?.plo}</td>
            </tr> 
        ))}
    </tbody>
    </table>
  )
}
