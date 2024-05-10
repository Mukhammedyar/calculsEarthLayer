import React, { useEffect, useState } from 'react'
import { list1 } from '../../API/tableList'
import { useDispatch, useSelector } from 'react-redux'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { tipPerSuccess } from '../../Reducer/ValueList2'
import { tipSuccess } from '../../Reducer/List3Values'

export default function List2Result({values2}) {
    const {length} = useSelector(state => state.tableLength) 
    const listData = Array(length).fill(0)
    const dispatch = useDispatch()
    const [results, setResults] = useState(Array(6).fill(Array(8).fill("")))
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "ValuesList2")); // Firestore'dan belgeleri al
                const data = querySnapshot.docs.map(doc => doc.data()); // Verileri diziye dönüştür
                data.length = length
                let valuesInput = Array(length).fill(Array(6).fill(0))

                for (let i = 0; i < length; i++) {
                    for (let j = 0; j < 6; j++) {
                        valuesInput[i] = data[i].data
                    }
                }
                
                var typeArray = [] 
                typeArray = valuesInput.map((row, rowIndex) => (
                  row[2] / row[1] > 0 && row[2] / row[1] <= 0.5 ? "Xloridli" : // CO2 va CI ustunlari bolinmasini orqali hisoblash
                  row[2] / row[1] > 0.5 && row[2] / row[1] <= 1 ? "Sulfat-xloridli":
                  row[2] / row[1] > 1 && row[2] / row[1] <= 5 ? "Xlorid-sulfatli":
                  row[2] / row[1] > 5 ? "Sulfatli" : "Sulfatli" 
                ))
                await setDoc(doc(db, "Resul2", "typeBool"), { data: typeArray });
                dispatch(tipSuccess(typeArray))
                
                // Tipning foizini hisoblash
                var typePerArray =Array(8).fill(0)
                typePerArray = valuesInput.map((row, rowIndex) => (
                  row[2] / row[1] > 0 && row[2] / row[1] <= 0.5 ? "1" :
                  row[2] / row[1] > 0.5 && row[2] / row[1] <= 1 ? "2":
                  row[2] / row[1] > 1 && row[2] / row[1] <= 5 ? "3":
                  row[2] / row[1] > 5 ? "4" : 4
                ))
                await setDoc(doc(db, "Resul2", "typePer"), { data: typePerArray });
                dispatch(tipPerSuccess(typePerArray))

                const resultsDoc = await getDocs(collection(db, "Resul2")); // Firestore'dan belgeleri al
                const getResults = resultsDoc.docs.map(doc => doc.data()); 
                
                const resultsArray = getResults.map(result => result.data);
                setResults(resultsArray);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [db, values2])

  return (
    <table
        className="shadow-lg border bg-white text-center text-xs font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[70px] border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Tip
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Tip (N%)
                </th>
            </tr>
        </thead>
        <tbody className=''>
        {/* 1-qatar */}
        {listData.map((item,index)=> (
            <tr key={index} className={`${index % 2 == 1 ? "bg-gray-100" : ""} border-b font-medium h-[36.6px]`}>
                <td className='border-r px-2 min-w-[150px]'>{results[0][index]}</td>
                <td className='border-r'>{results[1][index]}</td>
            </tr> 
        ))}
    </tbody>
    </table>
  )
}
