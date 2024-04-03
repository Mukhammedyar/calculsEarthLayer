import React, { useEffect, useState } from 'react'
import { qqalList1 } from '../../API/tableList2'
import { useDispatch } from 'react-redux'
import { MexanikTarkibJamiSuccess, MexanikTarkibSuccess, fizikLoySuccess, fizikQumSuccess, jamiNatiyjatSuccess, jamiPercentSuccess } from '../../Reducer/ValuesList1'

export default function TableNatija({values1}) {
    const [listData, setListData] = useState(qqalList1)
    const dispatch = useDispatch()
    const [results, setResults] = useState(Array(6).fill(Array(8).fill('')))
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fizikQumArray = [],
                    fizikLoyArray = [],
                    jamiPerArray = Array(9).fill(0),
                    jamiQiymatlar = Array(10).fill(0),
                    mexanikTarkib = Array(8).fill('');
                let mexanikTarkibJami = '';
                
                values1.forEach((row, index) => {
                    let sum1 = 0,sum2 = 0,sum3 = 0,sum4 = 0,sum5 = 0,XajmOgirligiJami = 0,sum6 = 0

                    for (let colIndex = 0; colIndex < 4; colIndex++) {
                        sum1 += parseFloat(values1[index][colIndex]);
                        fizikQumArray[index] = sum1
                    }
                    sum1 = 0
                    // 5 - 8 ustunlar yigindisi 
                    for (let colIndex = 4; colIndex < 7; colIndex++) {
                        sum2 += parseFloat(values1[index][colIndex]);
                        fizikLoyArray[index] = sum2
                    }
                    sum2 = 0
                    jamiPerArray[index] = fizikLoyArray[index] + fizikQumArray[index]
                    
                    for (let i = 0; i < 8; i++) {
                        XajmOgirligiJami += (parseFloat(listData[i].qqal) * values1[i][7])
                        sum3 += parseFloat(values1[i][7]) * parseFloat(listData[i].qqal) * parseFloat(values1[i][index])
                    }
                    sum3 = sum3 / XajmOgirligiJami
                    jamiQiymatlar[index] = sum3
                    jamiQiymatlar[7] = XajmOgirligiJami / parseFloat(listData[8].qqal)
                    XajmOgirligiJami = 0
                    sum3 = 0; sum4 = 0;
                    
                    for (let i = 0; i < 8; i++) {
                        sum4 += parseFloat(values1[index][7]) * parseFloat(listData[index].qqal) * fizikQumArray[i]      
                        sum5 += parseFloat(values1[index][7]) * parseFloat(listData[index].qqal) * fizikLoyArray[i]
                        sum6 += jamiQiymatlar[i]
                        
                        fizikLoyArray[i] <= 10 ? mexanikTarkib[i] = "Қум"
                        : fizikLoyArray[i] >= 10 && fizikLoyArray[i] <= 20 ? mexanikTarkib[i] = "Qumloq"
                        : fizikLoyArray[i] >= 20 && fizikLoyArray[i] <= 30 ? mexanikTarkib[i] = "Yengil Qumloq" 
                        : fizikLoyArray[i] >= 30 && fizikLoyArray[i] <= 45 ? mexanikTarkib[i] = "Orta Qumloq" 
                        : fizikLoyArray[i] >= 45 && fizikLoyArray[i] <= 60 ? mexanikTarkib[i] = "Ogir qumloq" 
                        : fizikLoyArray[i] >= 60 && fizikLoyArray[i] <= 100 ? mexanikTarkib[i] = "Loy" 
                        : mexanikTarkib[i] = "Nimadir Xato"
                    }
                    sum4 /= parseFloat(listData[8].qqal) * parseFloat(values1[7][7])
                    sum5 /= parseFloat(listData[8].qqal) * parseFloat(values1[7][7])
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
                let getResults = []
                getResults.length = 6
                getResults[0]= jamiPerArray
                getResults[1]= jamiQiymatlar
                getResults[2]= fizikQumArray
                getResults[3]= fizikLoyArray
                getResults[4]= mexanikTarkib
                getResults[5]= mexanikTarkibJami
                setResults(getResults);

                dispatch(jamiPercentSuccess(jamiPerArray))
                dispatch(fizikQumSuccess(results[2]))
                dispatch(fizikLoySuccess(results[3]))
                dispatch(jamiNatiyjatSuccess(jamiQiymatlar))
                dispatch(MexanikTarkibSuccess(mexanikTarkib))
                dispatch(MexanikTarkibJamiSuccess(mexanikTarkibJami))

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [values1])
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
            <tr key={item.id} className='border-b font-medium'>
                <td className='border-r'>{results[2][index]}</td>
                <td className='border-r'>{results[3][index]}</td>
                <td className='border-r min-w-[100px]'>{results[4][index]}</td>
            </tr> 
            : ""
        ))}
        <tr className={'bg-blue-300 h-[33px] font-medium'}>
            <td className='border-r'>{results[1][8]?.toString().slice(0,6)}</td>
            <td className='border-r py-[2px]'>{results[1][9]?.toString().slice(0,6)}</td>
            <td className='border-r py-[2px]'>{results[5]}</td>
        </tr>
    </tbody>
    </table>
  )
}
