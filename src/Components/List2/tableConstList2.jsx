import React, { useEffect, useState } from 'react'
import { list1 } from '../../API/tableList'
import { plo } from '../../API/tableList2'
import { useSelector } from 'react-redux'
import { db } from '../../config/firebase'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'

export default function TableConst() {
    const [listData, setListData]=useState(list1)
    const [ploData, setPloData] = useState(plo)
    const { length } = useSelector(state => state.tableLength)
    const [values , setValues] = useState(Array(length).fill(Array(3).fill('')))
    const [results, setResults] = useState([])

    const handleInputChange = async (rowIndex, colIndex, event) => {
        const newArray = values.map(row => [...row]);
        event.target.value <= 101 && event.target.value >= -2 ? newArray[rowIndex][colIndex] = event.target.value : event.target.value; 
        setValues(newArray);
        try {
            await setDoc(doc(db, "List2TableLists", `row_${rowIndex}`), { data: newArray[rowIndex] });
        } catch (error) {
            console.error('Error updating Firestore:', error);
        }
    };

    
    useEffect(() => {
        const dataFetching =async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "List2TableLists")); 
                const newData = querySnapshot.docs.map(doc => doc.data().data);
                newData.length = parseFloat(length)
                setValues(newData)
            } catch (error) {
                console.log(error);
            }
        }
        dataFetching()
    }, [db, length])
    
  return (
    <table
        className="shadow-lg border font-medium bg-white text-center dark:border-neutral-500 rounded-lg">
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
        <tbody className='text-xs'>
        {/* 1-qatar */}
        {values.map((row, rowIndex) => (
            <tr key={rowIndex} className={`bg-white border-b font-normal tablerow h-[36.6px]`}>
            <th className='border-r px-1 w-[30px]'>{listData[rowIndex].id}</th>
            {row.map((qiymat, colIndex) => (
                <td key={colIndex} className='border-r p-0'>
                    <input
                    type="number"
                    step={1}
                    value={qiymat}
                    onChange={(event) => handleInputChange(rowIndex, colIndex, event)}
                    className={`text-xs font-medium px-1
                    ${ +qiymat > 100 || +qiymat < 0
                        ? 'border-1 border-red-500  text-red-500'
                        : ""
                    }
                    w-[100px] h-[30px] md:w-[95px] focus:outline-0 text-xs md:text-sm font-medium px-1`}
                />
                </td>
            ))}
        </tr> 
        ))}
    </tbody>
    </table>
  )
}

{/* <tbody className='text-xs md:text-xs'>
        {values.map((row , rowIndex)=> (
           <tr key={rowIndex} className={`bg-white border-b font-normal `}>
                    <th className='border-r px-1 w-[30px]'>{listData[rowIndex].id}</th>
                {row.map((qiymat, colIndex) => (
                    <td key={colIndex} className='border-r p-0'>
                        <input
                        type="number"
                        step={1}
                        value={qiymat}
                        onChange={(event) => handleInputChange(rowIndex, colIndex, event)}
                        className={`text-xs font-medium px-1
                          ${ +qiymat > 100 || +qiymat < 0
                            ? 'border-1 border-red-500  text-red-500'
                            : ""
                          }
                        w-[100px] h-[30px] md:w-[95px] focus:outline-0 text-xs md:text-sm font-medium px-1`}
                      />
                    </td>
                ))}
                <td className='border-r' colSpan={2}>{results[rowIndex]}</td>
            </tr> 
        ))}
        <tr className='bg-blue-300 font-normal h-[31px]'>
            <td className='border-r'>Jami</td>
            <td className='border-r' colSpan={2}></td>
            <td className='border-'>{resultsSum}</td>
        </tr>
    </tbody> */}