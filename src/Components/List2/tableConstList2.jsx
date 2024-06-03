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
    const [valuesList2, setValuesList2] = useState(Array(length).fill(''))
    const header = [["Kesma N0", "Chuqurlik.sm", "Zich qoldiq"], ["Yuqorgi chegara", "Pastgi chegara"]]

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
                let newDataCutted = newData.slice(0, length)
                let data = newDataCutted.map(row => row.slice(0,2))
                setValues(data)
                let tigizQoldiq = tigizQoldiqArray[0]
                let tigizQoldiqCutted = tigizQoldiq.slice(0, length)
                setValuesList2(tigizQoldiqCutted)
            } catch (error) {
                console.log(error);
            }
        }
        dataFetching()
    }, [db, length])


  return (
    <table
        className="shadow-lg border font-medium bg-white text-center dark:border-neutral-500 rounded-lg">
        <thead className="border border-gray-300 text-xs h-[70px] border-b-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-400 font-normal'>
                {header[0].map((item, index) => (
                    <th
                        rowSpan={index == 0 || index == 2 ? 2 : 1}
                        colSpan={index !== 0 ? 2 : 1}
                        scope="col"
                        className={`${index == 2 ? "border-0" : "border-r"} w-[50px] border-neutral-400`}>
                        {item}
                    </th>
                ))}
            </tr>
            <tr className='bg-gray-200'>
              {header[1].map((item, index) => (
                <th
                    scope="col"
                    className="border-r px-2 font-medium border-neutral-400">
                    {item}
                </th>
              ))}  
            </tr>
        </thead>
        <tbody className='text-xs'>
            {values.map((item, index) => (
                <tr key={index} className={`border-b font-normal tablerow h-[36.6px] ${index % 2 == 1 ? "bg-gray-100" : "bg-white"}`}>
                <th className='border-r px-1 w-[30px]'>{listData[index].id}</th>
                <td className='border-r p-0'>{values[index][0]}</td>
                <td className='border-r p-0'>{values[index][1]}</td>
                <input
                    type="number"
                    step={1}
                    value={valuesList2[index]}
                    onChange={(event) => handleInputChange(index, event)}
                    className={`text-xs font-medium px-1 w-[100px] h-[30px] md:w-[95px] focus:outline-0 md:text-sm ${index % 2 == 1 ? "bg-gray-100" : "bg-white"} `}
                />
                </tr> 
            ))}
        </tbody>
    </table>
  )
}
