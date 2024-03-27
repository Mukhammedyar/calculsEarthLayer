import React, { useEffect, useState } from 'react'
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
        return sum
    }

    let jamiTigizQoldiqArray = jamiTigizQoldiq()

    useEffect(() => {
        dispatch(tigizQoldiqJamiSuccess(jamiTigizQoldiqArray))
    },[jamiTigizQoldiqArray, dispatch])

  return (
    <table
        className="shadow-lg border bg-white text-center text-xs font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b md:text-sm h-[80px] border-gray-300 font-medium dark:border-neutral-500 rounded">
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
                    className="border-r px-2 border-neutral-300">
                    Чуқурлик.см
                </th>
                <th
                    colSpan={2}
                    rowSpan={2}
                    scope="col"
                    className="border-r px-2 border-neutral-300">
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
        <tbody className='h-[375px] '>
        {/* 1-qatar */}
        {listData.map((item, index) => (
            <tr key={item.id} className={`border-b ${index == 8 ? "bg-blue-300": ""}`}>
                <td className='border-r font-medium w-auto'>{index == 8 ? "" : item.id}</td>
                <td className='border-r font-medium'>{index == 8 ? "" : item.ych}</td>
                <td className='border-r font-medium'>{index == 8 ? "" : item.tch}</td>
                <td className='border-r w-[80px] font-medium' colSpan={2}>
                    {ploData[index]?.plo}
                        {index == 8
                            ? jamiTigizQoldiq()
                        : <table className='w-full h-full'>
                            <tbody>
                                <tr>
                                    <td className='bg-slate-200 text-blue-700 text-start px-2 font-medium'>
                                        { tigizQoldiq == "" ? "null" : tigizQoldiq[index]?.toFixed(3)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    }
                </td>
            </tr> 
        ))}
    </tbody>
    </table>
  )
}
