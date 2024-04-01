import React, { useEffect, useState } from 'react'
import { list1 } from '../../API/tableList'
import { useDispatch, useSelector } from 'react-redux'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { tipPerSuccess } from '../../Reducer/ValueList2'
import { tipSuccess } from '../../Reducer/List3Values'

export default function List2Result({jadvalQiymatlari2}) {
    const [listData, setListData] = useState(list1)
    const dispatch = useDispatch()
    const [results, setResults] = useState(Array(6).fill(Array(8).fill("")))
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                var typeArray = [] 
                typeArray = jadvalQiymatlari2.map((row, rowIndex) => (
                  row[2] / row[1] > 0 && row[2] / row[1] <= 0.5 ? "Хлоридли" : // CO2 va CI ustunlari bolinmasini orqali hisoblash
                  row[2] / row[1] > 0.5 && row[2] / row[1] <= 1 ? "Сульфат-хлоридли":
                  row[2] / row[1] > 1 && row[2] / row[1] <= 5 ? "Хлорид-сульфатли":
                  row[2] / row[1] > 5 ? "Сульфатли" : "Сульфатли" 
                ))
                dispatch(tipSuccess(typeArray))
                
                // Tipning foizini hisoblash
                var typePerArray =Array(8).fill(0)
                typePerArray = jadvalQiymatlari2.map((row, rowIndex) => (
                  row[2] / row[1] > 0 && row[2] / row[1] <= 0.5 ? "1" :
                  row[2] / row[1] > 0.5 && row[2] / row[1] <= 1 ? "2":
                  row[2] / row[1] > 1 && row[2] / row[1] <= 5 ? "3":
                  row[2] / row[1] > 5 ? "4" : 4
                ))
                dispatch(tipPerSuccess(typePerArray))

                
                let resultsArray = []
                resultsArray.length = 2
                resultsArray[0] = typeArray
                resultsArray[1] = typePerArray
                setResults(resultsArray);
                console.log(results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [jadvalQiymatlari2])

  return (
    <table
        className="shadow-lg border bg-white text-center text-xs font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[70px] border-gray-300 font-medium dark:border-neutral-500 rounded">
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
                    Шурланиш даражаси
                </th>
            </tr>
        </thead>
        <tbody className='h-[325px]'>
        {/* 1-qatar */}
        {listData.map((item ,index)=> (
            index < 8 ? 
            <tr key={ item.id} className={`${index % 2 == 1 ? "bg-gray-100" : ""} border-b font-medium`}>
                <td className='border-r px-2 min-w-[150px]'>{results[0][index]}</td>
                <td className='border-r'>{results[1][index]}</td>
                <td className='border-r'>{"NaN"}</td>
            </tr> 
            : ""
        ))}
    </tbody>
    </table>
  )
}
