import React, { useEffect, useState } from 'react'
import { qqal } from '../../API/tableList2'
import { useDispatch, useSelector } from 'react-redux'
import { calculsStart, fizikLoySuccess, fizikQumSuccess, jamiNatiyjatSuccess, jamiPercentSuccess } from '../../Reducer/ValuesList1'

export default function TableNatija() {
    const [listData, setListData] = useState(qqal)
    const dispatch = useDispatch()
    const { values,fizikQum,fizikLoy, jamiNatiyja } = useSelector(state => state.valuesList1)

   
    useEffect(() => {
        const fizikQumArray = [],
            fizikLoyArray = [],
            mexanikTarkibArray = [];
        fizikQumArray.length = 8
        fizikLoyArray.length = 8
        mexanikTarkibArray.length = 8
        const jamiPerArray = Array(9).fill(0)
        const jamiQiymatlar= Array(9).fill(0)
        dispatch(calculsStart())
        try {
            let sum1 = 0,sum2 = 0,sum3 = 0,sum4 = 0,sum5 = 0,XajmOgirligiJami = 0,sum6 = 0
            
            values.map((row,index ) => {
                // 1 - 4 ustunlar yigindisi 
                for (let colIndex = 0; colIndex < 4; colIndex++) {
                    sum1 += parseFloat(values[index][colIndex]);
                    fizikQumArray[index] = sum1
                }index
                sum1 = 0
                // 5 - 8 ustunlar yigindisi 
                for (let colIndex = 4; colIndex < 7; colIndex++) {
                    sum2 += parseFloat(values[index][colIndex]);
                    fizikLoyArray[index] = sum2
                }
                sum2 = 0
                jamiPerArray[index] = fizikLoyArray[index] + fizikQumArray[index]
                for (let i = 0; i < 8; i++) {
                    XajmOgirligiJami += (parseFloat(listData[i].qqal) * values[i][7])
                    sum3 += parseFloat(values[i][7]) * parseFloat(listData[i].qqal) * parseFloat(values[i][index])
                }
                sum3 = sum3 / XajmOgirligiJami
                jamiQiymatlar[index] = sum3
                jamiQiymatlar[7] = XajmOgirligiJami / parseFloat(listData[8].qqal)
                XajmOgirligiJami = 0
                sum3 = 0; sum4 = 0;
                
                for (let i = 0; i < 8; i++) {
                    sum4 += parseFloat(values[i][7]) * parseFloat(listData[i].qqal) * fizikQumArray[i]      
                    sum5 += parseFloat(values[i][7]) * parseFloat(listData[i].qqal) * fizikLoyArray[i]
                   
                    sum6 += jamiQiymatlar[i]
                }
                sum4 /= parseFloat(listData[8].qqal) * parseFloat(values[7][7])
                sum5 /= parseFloat(listData[8].qqal) * parseFloat(values[7][7])
                jamiQiymatlar[8] = sum4
                jamiQiymatlar[9] = sum5
                jamiPerArray[8]= sum6
                sum4 = 0; sum5 = 0; sum6 = 0
            }) 
            dispatch(jamiPercentSuccess([...jamiPerArray]))
            dispatch(fizikQumSuccess([...fizikQumArray]))
            dispatch(fizikLoySuccess([...fizikLoyArray]))
            dispatch(jamiNatiyjatSuccess(jamiQiymatlar))
        } catch (error) {
            console.log(error);
        }
    },[values])

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
                <td className='border-r'>{fizikQum[index]?.toString().slice(0,5)}</td>
                <td className='border-r'>{fizikLoy[index]?.toString().slice(0,7)}</td>
                <td className='border-r min-w-[100px]'>{fizikLoy[index] <= 10 ? "Қум"
                : fizikLoy[index] >= 10 && fizikLoy[index] <= 20 ? "Kumloq"
                : fizikLoy[index] >= 20 && fizikLoy[index] <= 30 ? "Yengil Qumloq" 
                : fizikLoy[index] >= 30 && fizikLoy[index] <= 45 ? "Orta Qumloq" 
                : fizikLoy[index] >= 45 && fizikLoy[index] <= 60 ? "Ogir qumloq" 
                : fizikLoy[index] >= 60 && fizikLoy[index] >= 100 ? "Loy" 
                : "Nimadir Xato"}</td>
            </tr> 
            : ""
        ))}
        <tr className={'bg-blue-300 h-[33px]'}>
        <td className='border-r'>{jamiNatiyja[8]?.toString().slice(0,7)}</td>
            <td className='border-r py-[2px]'>{jamiNatiyja[9]?.toString().slice(0,7)}</td>
            <td className='border-r py-[2px]'>{jamiNatiyja[9] <= 10 ? "Қум"
            : jamiNatiyja[9] >= 10 && jamiNatiyja[9] <= 20 ? "Kumloq"
            : jamiNatiyja[9] >= 20 && jamiNatiyja[9] <= 30 ? "Yengil Qumloq" 
            : jamiNatiyja[9] >= 30 && jamiNatiyja[9] <= 45 ? "Orta Qumloq" 
            : jamiNatiyja[9] >= 45 && jamiNatiyja[9] <= 60 ? "Ogir qumloq" 
            : jamiNatiyja[9] >= 60 && jamiNatiyja[9] >= 100 ? "Loy" 
            : "Nimadir Xato"}</td>
        </tr>
    </tbody>
    </table>
  )
}
