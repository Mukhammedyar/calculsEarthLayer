import { useDispatch, useSelector } from 'react-redux'
import { list3 } from '../../API/tableList'
import React, {  useEffect, useState } from 'react'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { shorlanishDarajasiSuccess } from '../../Reducer/List3Values'


export default function List3Result({ jadvalQiymatlari }) {
    const {length} = useSelector(state => state.tableLength)
    const listData = Array(length).fill(0)
    const { tigizQoldiqJami } = useSelector(state => state.valuesList3)
    const dispatch = useDispatch()
    var typeArray = [], typePer = []

    const [results, setResults] = useState(Array(6).fill(Array(8).fill("")))
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "ValuesList2")); // Firestore'dan belgeleri al
                const data = querySnapshot.docs.map(doc => doc.data()); // Verileri diziye dönüştür
                let valueInput = data.slice(0, length)
                let newdata = Array(length).fill(Array(6).fill(0))
                
                for (let i = 0; i < length; i++) {
                    for (let j = 0; j < 6; j++) {
                        newdata[i] = valueInput[i].data
                    }
                }
                newdata.forEach((item, index) => {
                    const ratio = item[2] / item[1];
                    typeArray[index] = 
                        ratio > 0 && ratio <= 0.5 ? "Xloridli" :
                        ratio > 0.5 && ratio <= 1 ? "Sulfat-xloridli" :
                        ratio > 1 && ratio <= 5 ? "Xlorid-sulfatli" :
                        ratio > 5 ? "SUlfsatli" : "---"
                    typePer[index] = 
                        ratio > 0 && ratio <= 0.5 ? "1" :
                        ratio > 0.5 && ratio <= 1 ? "2" :
                        ratio > 1 && ratio <= 5 ? "3" :
                        ratio > 5 ? "4" : "---"
                });
                
                function getTigizStatus(tigizQoldiqJami) {
                    return tigizQoldiqJami > 0 && tigizQoldiqJami <= 50 ? "Shorlanmagan" 
                        : tigizQoldiqJami > 50 && tigizQoldiqJami <= 100 ? "Kuchsiz shorlangan" 
                        : tigizQoldiqJami > 100 && tigizQoldiqJami <= 200 ? "O'rtacha shorlangan"
                        : tigizQoldiqJami > 200 && tigizQoldiqJami <= 300 ? "Kuchli shorlangan"
                        : tigizQoldiqJami > 300 ? "Juda kuchli shorlangan" : "--/--"
                }
                
                const shorlanishDarajasiQuery = getTigizStatus(tigizQoldiqJami)
                dispatch(shorlanishDarajasiSuccess(shorlanishDarajasiQuery))
                
                await setDoc(doc(db, "List3Results", "type"), { data: typeArray });
                await setDoc(doc(db, "List3Results", "typePer"), { data: typePer });
                await setDoc(doc(db, "List3Results", "shorlanishDarajasi"), { data: shorlanishDarajasiQuery });
                
                const resultsDoc = await getDocs(collection(db, "List3Results")); // Firestore'dan belgeleri al
                const getResults = resultsDoc.docs.map(doc => doc.data()); 
                
                const resultsArray = getResults.map(result => result.data);
                setResults(resultsArray);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [db, jadvalQiymatlari, tigizQoldiqJami])
    

  return (
    <table
        className="shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[80px] border-gray-300 font-medium dark:border-neutral-500 rounded">
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
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Sho'rlanish darajasi
                </th>
            </tr>
        </thead>
        <tbody className=''>
            {/* 1-qatar */}
            {listData.map((item ,index)=> (
                <tr key={index} className={`border-b font-medium text-sm h-[36.6px] ${index % 2 == 1 ? "bg-gray-100" : "bg-white"}`}>
                    <td className='border-r px-1 min-w-[150px]'>{results[3][index]}</td>
                    <td className='border-r px-1 '>{results[4][index]}</td>
                    <td className='border-r px-1 '>{""}</td>
                </tr> 
            ))}
            <tr className='border-b bg-blue-300 font-medium text-sm p-0 table-row-last'>
                <td className='border-r min-w-[100px]'></td>
                <td className='border-r '></td>
                <td className='border-r min-w-[160px] p-0'>
                    {results[2]}
                </td>
            </tr> 
        </tbody>
    </table>
  )
}
