import React, { useEffect, useState } from 'react'
import { qqalList1 } from '../../API/tableList2'
import { useDispatch } from 'react-redux'
import { fizikLoySuccess, fizikQumSuccess, jamiNatiyjatSuccess, jamiPercentSuccess } from '../../Reducer/ValuesList1'
import { db } from '../../config/firebase'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'

export default function TableNatija({values1}) {
    const [listData, setListData] = useState(qqalList1)
    const dispatch = useDispatch()
    const [results, setResults] = useState(Array(6).fill(Array(8).fill("")))
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Values")); // Firestore'dan belgeleri al
                const data = querySnapshot.docs.map(doc => doc.data()); // Verileri diziye dönüştür
                let newdata = Array(8).fill(Array(8).fill(0))

                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {
                        newdata[i] = data[i].data
                    }
                }
                const fizikQumArray = [],
                    fizikLoyArray = [],
                    jamiPerArray = Array(9).fill(0),
                    jamiQiymatlar = Array(10).fill(0),
                    mexanikTarkib = Array(8).fill('');
                let mexanikTarkibJami = '';
                
                newdata.forEach((row, index) => {
                    let sum1 = 0,sum2 = 0,sum3 = 0,sum4 = 0,sum5 = 0,XajmOgirligiJami = 0,sum6 = 0

                    for (let colIndex = 0; colIndex < 4; colIndex++) {
                        sum1 += parseFloat(newdata[index][colIndex]);
                        fizikQumArray[index] = sum1
                    }
                    sum1 = 0
                    // 5 - 8 ustunlar yigindisi 
                    for (let colIndex = 4; colIndex < 7; colIndex++) {
                        sum2 += parseFloat(newdata[index][colIndex]);
                        fizikLoyArray[index] = sum2
                    }
                    sum2 = 0
                    jamiPerArray[index] = fizikLoyArray[index] + fizikQumArray[index]
                    
                    for (let i = 0; i < 8; i++) {
                        XajmOgirligiJami += (parseFloat(listData[i].qqal) * newdata[i][7])
                        sum3 += parseFloat(newdata[i][7]) * parseFloat(listData[i].qqal) * parseFloat(newdata[i][index])
                    }
                    sum3 = sum3 / XajmOgirligiJami
                    jamiQiymatlar[index] = sum3
                    jamiQiymatlar[7] = XajmOgirligiJami / parseFloat(listData[8].qqal)
                    XajmOgirligiJami = 0
                    sum3 = 0; sum4 = 0;
                    
                    for (let i = 0; i < 8; i++) {
                        sum4 += parseFloat(newdata[index][7]) * parseFloat(listData[index].qqal) * fizikQumArray[i]      
                        sum5 += parseFloat(newdata[index][7]) * parseFloat(listData[index].qqal) * fizikLoyArray[i]
                        sum6 += jamiQiymatlar[i]
                        
                        fizikLoyArray[i] <= 10 ? mexanikTarkib[i] = "Қум"
                        : fizikLoyArray[i] >= 10 && fizikLoyArray[i] <= 20 ? mexanikTarkib[i] = "Qumloq"
                        : fizikLoyArray[i] >= 20 && fizikLoyArray[i] <= 30 ? mexanikTarkib[i] = "Yengil Qumloq" 
                        : fizikLoyArray[i] >= 30 && fizikLoyArray[i] <= 45 ? mexanikTarkib[i] = "Orta Qumloq" 
                        : fizikLoyArray[i] >= 45 && fizikLoyArray[i] <= 60 ? mexanikTarkib[i] = "Ogir qumloq" 
                        : fizikLoyArray[i] >= 60 && fizikLoyArray[i] <= 100 ? mexanikTarkib[i] = "Loy" 
                        : mexanikTarkib[i] = "Nimadir Xato"
                    }
                    sum4 /= parseFloat(listData[8].qqal) * parseFloat(newdata[7][7])
                    sum5 /= parseFloat(listData[8].qqal) * parseFloat(newdata[7][7])
                    jamiQiymatlar[8] = sum4
                    jamiQiymatlar[9] = sum5
                    jamiPerArray[8]= sum6
                    sum4 = 0; sum5 = 0; sum6 = 0
                    
                    jamiQiymatlar[9] <= 10 ? mexanikTarkibJami = "Qum"
                    : jamiQiymatlar[9] >= 10 && jamiQiymatlar[9] <= 20 ? mexanikTarkibJami = "Qumloq"
                    : jamiQiymatlar[9] >= 20 && jamiQiymatlar[9] <= 30 ? mexanikTarkibJami = "Yengil qumloq" 
                    : jamiQiymatlar[9] >= 30 && jamiQiymatlar[9] <= 45 ? mexanikTarkibJami = "Orta qumloq" 
                    : jamiQiymatlar[9] >= 45 && jamiQiymatlar[9] <= 60 ? mexanikTarkibJami = "Ogir qumloq" 
                    : jamiQiymatlar[9] >= 60 && jamiQiymatlar[9] <= 100 ? mexanikTarkibJami= "Loy" 
                    : mexanikTarkibJami = "Nimadir Xato"
                         
                })

                await setDoc(doc(db, "Results", "jamiYigindi"), { data: jamiPerArray });
                await setDoc(doc(db, "Results", "jamiInputs"), { data: jamiQiymatlar });
                await setDoc(doc(db, "Results", "fizikQum"), { data: fizikQumArray });
                await setDoc(doc(db, "Results", "fizikLoy"), { data: fizikLoyArray });
                await setDoc(doc(db, "Results", "mexanikTarkib"), { data: mexanikTarkib });
                await setDoc(doc(db, "Results", "MexanikTarkibJami"), { data: mexanikTarkibJami });
                
                const resultsDoc = await getDocs(collection(db, "Results")); // Firestore'dan belgeleri al
                const getResults = resultsDoc.docs.map(doc => doc.data()); 
                
                const resultsArray = getResults.map(result => result.data);
                setResults(resultsArray);
                

                dispatch(jamiPercentSuccess(resultsArray[4]))
                dispatch(fizikQumSuccess(resultsArray[1]))
                dispatch(fizikLoySuccess(resultsArray[0]))
                dispatch(jamiNatiyjatSuccess(resultsArray[3]))

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [db, values1])
    
  return (
    <table
        className="shadow-lg border bg-white text-center font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[82px] text-xs md:text-sm border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Физик қум
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Физик лой
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Механик таркиб
                </th>
            </tr>
        </thead>
        <tbody className='h-[300px] text-xs md:text-sm'>
        {/* 1-qatar */}
        {listData.map((item ,index)=> (
            index < 8 ? 
            <tr key={ item.id} className='border-b font-medium'>
                <td className='border-r'>{results[2][index]?.toString().slice(0,5)}</td>
                <td className='border-r'>{results[1][index]?.toString().slice(0,7)}</td>
                <td className='border-r min-w-[100px]'>{results[5][index]}</td>
            </tr> 
            : ""
        ))}
        <tr className={'bg-blue-300 h-[33px] font-medium'}>
            <td className='border-r'>{results[3][8]?.toString().slice(0,5)}</td>
            <td className='border-r py-[2px]'>{results[3][9]?.toString().slice(0,5)}</td>
            <td className='border-r py-[2px]'>{results[0]}</td>
        </tr>
    </tbody>
    </table>
  )
}
