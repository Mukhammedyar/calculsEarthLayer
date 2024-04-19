import React, { useEffect, useState } from 'react'
import { list1 } from '../../API/tableList'
import { plo } from '../../API/tableList2'
import { useSelector } from 'react-redux'
import { db } from '../../config/firebase'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'

export default function TableConst() {
    const [listData, setListData]=useState(list1)
    const { length } = useSelector(state => state.tableLength)
    const [values, setValues] = useState(Array(length).fill(Array(3).fill('')))
    const [valuesList2, setValuesList2] = useState(Array(8).fill(''))
    const [results, setResults] = useState([])

    const handleInputChange = async (index, event) => { 
        try {
            const newArray = [...valuesList2]
            event.target.value <= 101 && event.target.value >= -2 ? newArray[index] = event.target.value : event.target.value;
            setValuesList2(newArray);
            await setDoc(doc(db, "List2TableLists", "tigizQoldiq"), { newArray });
        } catch (error) {
            console.error('Error updating Firestore:', error);
        }
    };
    
    useEffect(() => {
        const dataFetching =async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "List1TableLists")); 
                const newData = querySnapshot.docs.map(doc => doc.data().data);
                const tigizQoldiqQuery = await getDocs(collection(db, "List2TableLists")); 
                const tigizQoldiqArray = tigizQoldiqQuery.docs.map(doc => doc.data().newArray);
                newData.length = parseFloat(length)
                let data = newData.map(row => row.slice(0,2))
                setValues(data)
                setValuesList2(tigizQoldiqArray[0])
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
                    Kesma N0
                </th>
                <th
                    colSpan={2}
                    scope="col"
                    className="border-r  px-2 border-neutral-300">
                    Chuqurlik.sm
                </th>
                <th
                    colSpan={2}
                    rowSpan={2}
                    scope="col"
                    className="border-r  px-2 border-neutral-300">
                    Zich qoldiq
                </th>
            </tr>
            <tr className='bg-gray-200'>
                <th
                    scope="col"
                    className="border-r px-2 font-medium border-neutral-300">
                    Yuqorgi chegara 
                </th>
                <th
                    scope="col"
                    className="border-r px-2 font-medium border-neutral-300">
                    Pastgi chegara 
                </th>
        </tr>
        </thead>
        <tbody className='text-xs'>
            {valuesList2.map((item, index) => (
                <tr key={index} className={`bg-white border-b font-normal tablerow h-[36.6px]`}>
                <th className='border-r px-1 w-[30px]'>{listData[index].id}</th>
                <td className='border-r p-0'>{values[index][0]}</td>
                <td className='border-r p-0'>{values[index][1]}</td>
                <input
                    type="number"
                    step={1}
                    value={valuesList2[index]}
                    onChange={(event) => handleInputChange(index, event)}
                    className={`text-xs font-medium px-1 w-[100px] h-[30px] md:w-[95px] focus:outline-0 md:text-sm`}
                />
                </tr> 
            ))}
        </tbody>
    </table>
  )
}
{/* <tr key={rowIndex} className={`bg-white border-b font-normal tablerow h-[36.6px]`}>
            <th className='border-r px-1 w-[30px]'>{listData[rowIndex].id}</th>
            <td key={colIndex} className='border-r p-0'>{qiymat}</td>
            <input
                type="number"
                step={1}
                onChange={(event) => handleInputChange(rowIndex, event)}
                className={`text-xs font-medium px-1 w-[100px] h-[30px] md:w-[95px] focus:outline-0 md:text-sm`}
                // ${ + > 100 || +qiymat < 0
                //     ? 'border-1 border-red-500  text-red-500'
                //     : ""
                // }
                
            />
        </tr>  */}


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