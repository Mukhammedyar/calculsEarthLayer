import React, { useEffect, useState } from 'react'
import { list1 } from '../../API/tableList'
import { qqalList1 } from '../../API/tableList2'
import { useDispatch, useSelector } from 'react-redux'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'


export default function TableLists() {
    const [listData, setListData] = useState(list1)
    const { length } = useSelector(state => state.tableLength)
    const [values , setValues] = useState(Array(length).fill(Array(2).fill('')))
    const [results , setResults] = useState([])
    const [resultsSum , setResultsSum] = useState([])

    const handleInputChange = async (rowIndex, colIndex, event) => {
        const newArray = values.map(row => [...row]);
        event.target.value <= 101 && event.target.value >= -2 ? newArray[rowIndex][colIndex] = event.target.value : event.target.value; 
        setValues(newArray);
        try {
            await setDoc(doc(db, "List1TableLists", `row_${rowIndex}`), { data: newArray[rowIndex] });
            let arr = []
            for (let i = 0; i < length; i++) {
                arr.push(parseFloat(newArray[i][1]) - parseFloat(newArray[i][0]))
            }
            await setDoc(doc(db, "list1QatlamQalinligi", "nAdN4kZ5OoALisjjcRAR"), { arr });
            setResults(arr)
            let sum = 0
            for (let i = 0; i < length; i++) {
                sum += arr[i]
            }
            await setDoc(doc(db, "list1QatlamQalinligi", "QatlamQalinligiJami"), {arr: sum });
            setResultsSum(sum)
            console.log(sum);
        } catch (error) {
            console.error('Error updating Firestore:', error);
        }
    };

    
    useEffect(() => {
        const dataFetching =async () => {
           try {
            const querySnapshot = await getDocs(collection(db, "List1TableLists")); 
            const newData = querySnapshot.docs.map(doc => doc.data().data);
            newData.length = parseFloat(length)
            setValues(newData)
            const result = await getDocs(collection(db, "list1QatlamQalinligi")); 
            const res = result.docs.map(doc => doc.data().arr);
               setResults(res[1])
               setResultsSum(res[0])
           } catch (error) {
                console.log(error);
           }
        }
        dataFetching()
    }, [db, length])
    return (
    <table
        className="shadow-lg border bg-white text-center text-xs font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[82px] border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b text-xs border-neutral-300 font-normal'>
                <th
                    rowSpan={2}
                    scope="col"
                    className="border-r border-neutral-300 px-1">
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
        <tbody className='text-xs md:text-xs'>
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
                        w-[100px] h-[30px] md:w-[75px] focus:outline-0 text-xs md:text-sm font-normal pl-2`}
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
    </tbody>
    </table>
  )
}
