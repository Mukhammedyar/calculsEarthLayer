import { useDispatch, useSelector } from 'react-redux'
import { list3 } from '../../API/tableList'
import React, {  useState } from 'react'


export default function List3Result() {
    const dispatch= useDispatch()
    const [listData, setListData] = useState(list3)
    const { tip, tipPerList3 } = useSelector(state => state.valuesList3)
    
    
  return (
    <table
        className="shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 py-5 border-neutral-300">
                    Тип
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 py-5 border-neutral-300">
                    Тип (N%)
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 py-5 border-neutral-300">
                    Степень засоления
                </th>
            </tr>
        </thead>
        <tbody>
            {/* 1-qatar */}
            {listData.map((item ,index)=> (
                index < 8 ? 
                <tr key={ item.id} className='border-b font-medium text-xs'>
                    <td className='border-r h-[45px] py-[2px]'>{tip[index]}</td>
                    <td className='border-r h-[45px] py-[2px]'>{tipPerList3[index]}</td>
                    <td className='border-r h-[45px] py-[2px]'>{"NaN"}</td>
                </tr> 
                : ""
            ))}
        </tbody>
    </table>
  )
}
