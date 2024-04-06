import React, { useEffect, useState } from 'react'
import List3Head from './list3Head'
import { useDispatch } from 'react-redux'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { value2SetSuccess } from '../../Reducer/ValueList2'

export default function List3Input({ jadvalQiymatlari, setJadvalQiymatlari, handleChange , valueResult, setValueResult}) {
    const [jamiQiymatArray, setJamiQiymatlarArray] = useState([])
    const dispatch = useDispatch()
    
    useEffect(() => { 
        const getValue2Docs = async () => {
            try {
                const query = await getDocs(collection(db , "ValuesList2"))
                const newData = query.docs.map(doc => doc.data().data); // Verileri diziye dönüştür
                setJadvalQiymatlari(newData);
                dispatch(value2SetSuccess(newData))
                
                const valueResultquery = await getDocs(collection(db, "Results3"))
                const newResult = valueResultquery.docs.map(doc => doc.data().data); // Verileri diziye dönüştür
                setValueResult(newResult);

                const jamiQiymatquery = await getDocs(collection(db, "Jami3"))
                const jamiQiymat = jamiQiymatquery.docs.map(doc => doc.data().data); // Verileri diziye dönüştür
                setJamiQiymatlarArray(jamiQiymat[0]);
            } catch (error) {
                console.error('Error fetching Firestore values:', error);
            }
        }
        getValue2Docs()
    }, [db])

  return (
    <table
        className="mb-4 shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <List3Head/>
        <tbody>
            {jadvalQiymatlari.map((row, rowIndex) => (
                <tr key={rowIndex} className='border-b border-neutral-300 text-xs'>
                {row.map((qiymat, colIndex) => (
                    <td key={colIndex} className='w-[80px] border-r border-neutral-300 px-0 bg-white text-black'>
                        <input
                            type={"number"}
                            step={0.1}
                            value={qiymat.toString().slice(0,7)}
                            placeholder={"0"} 
                            onChange={(event) => handleChange(rowIndex, colIndex, event)}
                            className={`
                            ${ +qiymat > 100
                                ? 'border-1 border-red-500 text-red-500'
                                : "border-none focus:ring-0 text-gray-800 "
                            } py-[3px] max-w-[100px] md:w-[80px] lg:w-[80px] font-medium px-1 mx-0 focus:outline-0`}
                        />
                        <table className='w-full h-full'>
                            <tbody>
                                <tr>
                                    <td className='bg-slate-200 py-[2px] text-blue-800 w-[100px] md:w-[80px] text-start px-1 font-medium'>
                                        {valueResult[rowIndex][colIndex]?.toString().slice(0,5)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                ))}
                </tr>
            ))}
              <tr className='border-b border-neutral-300 text-xs h-[20px]'>
                {jamiQiymatArray.map((qiymat, index) => (
                    <td key={index} className='w-[80px] border-r border-neutral-30 font-medium bg-blue-300 text-start px-1 text-black'>
                        {qiymat.toString().slice(0,6)}
                    </td>
                ))}
                </tr>
        </tbody>
    </table>
  )
}
