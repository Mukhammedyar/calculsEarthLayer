import { useDispatch, useSelector } from 'react-redux'
import { list3 } from '../../API/tableList'
import React, {  useEffect, useState } from 'react'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { shorYuvishSuccess } from '../../Reducer/List3Values'


export default function List3Result({shorlanishDarajasi}) {
    const [listData, setListData] = useState(list3)
    const { tip, tipPerList3, tigizQoldiqJami } = useSelector(state => state.valuesList3)
    const dispatch = useDispatch()
    
   

  return (
    <table
        className="shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[80px] border-gray-300 font-medium dark:border-neutral-500 rounded">
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
                    Шурланиш даржаси
                </th>
            </tr>
        </thead>
        <tbody className='h-[377px]'>
            {/* 1-qatar */}
            {listData.map((item ,index)=> (
                index < 8 ? 
                <tr key={ item.id} className='border-b font-medium text-sm'>
                    <td className='border-r px-1 min-w-[150px]'>{tip[index]}</td>
                    <td className='border-r px-1 '>{tipPerList3[index]}</td>
                    <td className='border-r px-1 '>{""}</td>
                </tr> 
                : <tr key={ item.id} className='border-b bg-blue-300 font-medium text-sm h-[21px]'>
                    <td className='border-r min-w-[100px]'></td>
                    <td className='border-r '></td>
                    <td className='border-r '>
                        {shorlanishDarajasi}
                    
                    </td>
                </tr> 
            ))}
        </tbody>
    </table>
  )
}
