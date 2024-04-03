import { useDispatch, useSelector } from 'react-redux'
import { list3 } from '../../API/tableList'
import React, {  useEffect, useState } from 'react'
import { shorlanishDarajasiSuccess, tipPerList3Success, tipSuccess } from '../../Reducer/List3Values'


export default function List3Result({jadvalQiymatlari}) {
    const [listData, setListData] = useState(list3)
    const { valuesList2 } = useSelector(state => state.valuesList2)
    const { tigizQoldiqJami, tip, tipPerList3} = useSelector(state => state.valuesList3)
    const dispatch = useDispatch()
    var typeArray = [], typePer = []

    const [results, setResults] = useState(Array(6).fill(Array(8).fill("")))
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                valuesList2 == [] ? jadvalQiymatlari : valuesList2.forEach((item, index) => {
                    const ratio = item[2] / item[1];
                    typeArray[index] = 
                        ratio > 0 && ratio <= 0.5 ? "Хлоридли" :
                        ratio > 0.5 && ratio <= 1 ? "Сульфат-хлоридли" :
                        ratio > 1 && ratio <= 5 ? "Хлорид-сульфатли" :
                        ratio > 5 ? "Сульфатли" : "---"
                    typePer[index] = 
                        ratio > 0 && ratio <= 0.5 ? "1" :
                        ratio > 0.5 && ratio <= 1 ? "2" :
                        ratio > 1 && ratio <= 5 ? "3" :
                        ratio > 5 ? "4" : "---"
                });
                
                function getTigizStatus(tigizQoldiqJami) {
                    return tigizQoldiqJami > 0 && tigizQoldiqJami <= 50 ? "Шурланмаган" 
                        : tigizQoldiqJami > 50 && tigizQoldiqJami <= 100 ? "Кучсиз шурланган" 
                        : tigizQoldiqJami > 100 && tigizQoldiqJami <= 200 ? "Уртача шурланган"
                        : tigizQoldiqJami > 200 && tigizQoldiqJami <= 300 ? "Кучли шурланган"
                        : tigizQoldiqJami > 300 ? "Жуда кучли шўрланган" : "xato"
                }
                
                const shorlanishDarajasiQuery = getTigizStatus(tigizQoldiqJami)
                dispatch(shorlanishDarajasiSuccess(shorlanishDarajasiQuery))
               
                const resultsArray = Array(3).fill('')
                resultsArray[0] = typeArray
                resultsArray[1] = typePer
                resultsArray[2] = shorlanishDarajasiQuery

                dispatch(tipSuccess(typeArray))
                dispatch(tipPerList3Success(typePer))
                dispatch(shorlanishDarajasiSuccess(shorlanishDarajasiQuery))
                setResults(resultsArray);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [jadvalQiymatlari, tigizQoldiqJami])
    

  return (
    <table
        className="shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[80px] border-gray-300 font-medium dark:border-neutral-500 rounded">
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
                    Шурланиш даржаси
                </th>
            </tr>
        </thead>
        <tbody className='h-[377px]'>
            {/* 1-qatar */}
            {listData.map((item ,index)=> (
                index < 8 ? 
                <tr key={ item.id} className='border-b font-medium text-sm'>
                    <td className='border-r px-1 min-w-[150px]'>{tip[index]}</td>
                    <td className='border-r px-1 '>{tipPerList3[index]}</td>
                    <td className='border-r px-1 '>{""}</td>
                </tr> 
                : <tr key={ item.id} className='border-b bg-blue-300 font-medium text-sm h-[21px]'>
                    <td className='border-r min-w-[100px]'></td>
                    <td className='border-r '></td>
                    <td className='border-r '>
                        {results[2]}
                    </td>
                </tr> 
            ))}
        </tbody>
    </table>
  )
}
