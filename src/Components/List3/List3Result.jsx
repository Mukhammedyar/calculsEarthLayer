import { useDispatch, useSelector } from 'react-redux'
import { list3 } from '../../API/tableList'
import React, {  useState } from 'react'


export default function List3Result() {
    const dispatch= useDispatch()
    const [listData, setListData] = useState(list3)
    const { tip, tipPerList3,tigizQoldiqJami } = useSelector(state => state.valuesList3)
    
    
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
                    Степень засоления
                </th>
            </tr>
        </thead>
        <tbody className='h-[377px]'>
            {/* 1-qatar */}
            {listData.map((item ,index)=> (
                index < 8 ? 
                <tr key={ item.id} className='border-b font-medium text-xs'>
                    <td className='border-r min-w-[100px]'>{tip[index]}</td>
                    <td className='border-r '>{tipPerList3[index]}</td>
                    <td className='border-r '>{"NaN"}</td>
                </tr> 
                : <tr key={ item.id} className='border-b bg-blue-300 font-medium text-xs h-[21px]'>
                    <td className='border-r min-w-[100px]'></td>
                    <td className='border-r '></td>
                    <td className='border-r '>
                        {tigizQoldiqJami > 0 && tigizQoldiqJami <= 50 ? "Шурланмаган" 
                        : tigizQoldiqJami > 50 && tigizQoldiqJami <= 100 ? "Кучсиз шурланган" 
                        : tigizQoldiqJami > 100 && tigizQoldiqJami <= 200 ? "Уртача шурланган"
                        : tigizQoldiqJami > 200 && tigizQoldiqJami <= 300 ? "Кучли шурланган"
                        : tigizQoldiqJami > 300 ? "Шурхоклар" : tigizQoldiqJami < 0 ? "xato" : "Шурхоклар"
                    }
                    
                    </td>
                </tr> 
            ))}
        </tbody>
    </table>
  )
}
