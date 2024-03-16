import React, { useState } from 'react'
import { list1 } from '../../API/tableList'
import { plo } from '../../API/tableList2'
import { useDispatch, useSelector } from 'react-redux'
import { tigizQoldiqJamiSuccess } from '../../Reducer/List3Values'


export default function List3Const() {
    const dispatch = useDispatch()
    const [listData, setListData] = useState(list1)
    const [ploData, setPloData] = useState(plo)
    const { tigizQoldiq } = useSelector(state => state.valuesList3)
    
    const jamiTigizQoldiq = () => {
        let sum = 0
        tigizQoldiq.map(i => {
            sum += i
        })
        dispatch(tigizQoldiqJamiSuccess(sum))
        return sum
    }

  return (
    <table
        className="shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    rowSpan={2}
                    scope="col"
                    className="border-r py-2 w-[50px] border-neutral-300 ">
                    Кесмa N0
                </th>
                <th
                    colSpan={2}
                    scope="col"
                    className="border-r  py-2 px-2 border-neutral-300">
                    Чуқурлик.см
                </th>
                <th
                    colSpan={2}
                    rowSpan={2}
                    scope="col"
                    className="border-r  py-2 px-2 border-neutral-300">
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
        <tbody>
        {/* 1-qatar */}
        {listData.map((item, index) => (
            <tr key={item.id} className='border-b'>
            <th className='border-r py-[10px] font-medium w-auto'>{item.id}</th>
            <td className='border-r py-[10px] font-medium'>{item.ych}</td>
            <td className='border-r py-[10px] font-medium'>{item.tch}</td>
            <td className='border-r w-[80px] font-medium' colSpan={2}>
                {ploData[index]?.plo}
                    {index == 8
                        ? jamiTigizQoldiq()
                        : <td className='bg-slate-200 text-blue-700 w-[100px] md:w-[120px] text-start px-2 font-medium'>
                       { tigizQoldiq == "" ? "null" : tigizQoldiq[index]?.toFixed(3)}
                    </td>}
            </td>
        </tr> 
        ))}
    </tbody>
    </table>
  )
}
