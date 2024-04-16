import React, { useEffect, useState } from 'react'
import { list1 } from '../../API/tableList'
import { plo } from '../../API/tableList2'
import { useDispatch, useSelector } from 'react-redux'
import { tigizQoldiqJamiSuccess } from '../../Reducer/List3Values'
import { db } from '../../config/firebase'
import { collection, getDocs } from 'firebase/firestore'


export default function List3Const() {
    const dispatch = useDispatch()
    const { length } = useSelector(state => state.tableLength)
    const [listData, setListData] = useState(list1)
    const [ploData, setPloData] = useState(plo)
    const { tigizQoldiq } = useSelector(state => state.valuesList3)
    const [values, setValues] = useState(Array(length).fill(Array(2).fill('')))
    const [tigizQoldiqArray, setTigizQoldiqArray] = useState(Array(length).fill(Array(2).fill('')))

    const jamiTigizQoldiq = () => {
        let sum = 0
        tigizQoldiq.map(i => {
            sum += i
        })
        return sum
    }
    let jamiTigizQoldiqArray = jamiTigizQoldiq()

    useEffect(() => {
        const dataFetching = async () => {
            dispatch(tigizQoldiqJamiSuccess(jamiTigizQoldiqArray))
            const querySnapshot = await getDocs(collection(db, "List2TableLists")); 
            const newData = querySnapshot.docs.map(doc => doc.data().data);
            newData.length = parseFloat(length)
            
            const newArrValues = newData.map(row => row.slice(0, 2));
            const newArrTigizQoldiq = newData.map(row => row.slice(2, 3));
            setValues(newArrValues)
            setTigizQoldiqArray(newArrTigizQoldiq)
        }
        dataFetching()
    }, [db, tigizQoldiq])
    

    

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
        <tbody className=''>
        {/* 1-qatar */}
        {values.map((row , rowIndex)=> (
           <tr key={rowIndex} className={`bg-white border-b font-normal `}>
                <th className='border-r px-1 w-[30px]'>{listData[rowIndex].id}</th>
                {row.map((qiymat, colIndex) => (
                    <td key={colIndex} className='border-r p-0'>{qiymat}</td>
                ))}
                <td className='border-r p-0'>{tigizQoldiqArray[rowIndex]}
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='bg-slate-200 h-[20px] text-blue-700 px-2 font-medium text-center'>
                                    {tigizQoldiq[rowIndex].toString().slice(0,5)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr> 
        ))}
        <tr className='bg-blue-300 font-normal h-[31px]'>
            <td className='border-r'>Jami</td>
            <td className='border-r' colSpan={2}></td>
            <td className='border-'>{jamiTigizQoldiqArray}</td>
        </tr>
    </tbody>
    </table>
  )
}
