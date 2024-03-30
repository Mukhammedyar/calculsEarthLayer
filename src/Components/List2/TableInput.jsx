import React, { useEffect, useState } from 'react'
import './tableInput.css'
import List2Head from './List2Head';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useSelector } from 'react-redux';

export default function TableInput({ handleChange, jadvalQiymatlari, setJadvalQiymatlari, natijaValues , setNatiyjaValues}) {
    // const {natiyjaValues} = useSelector(state => state.valuesList2)
    useEffect(() => { 
        const getValue2Docs = async () => {
            try {
                const query = await getDocs(collection(db, "ValuesList2"))
                const newData = query.docs.map(doc => doc.data().data); // Verileri diziye dönüştür
                const resultValuesQuery = await getDocs(collection(db, "ResultValuesList2"))
                const newResultValues = resultValuesQuery.docs.map(doc => doc.data().data); // Verileri diziye dönüştür
                setJadvalQiymatlari(newData);
                setNatiyjaValues(newResultValues)

            } catch (error) {
                console.error('Error fetching Firestore values:', error);
            }
        }
        getValue2Docs()
    }, [db])
    
  return (
    <table
        className="mb-4 shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <List2Head/>
        <tbody className=''>
            {jadvalQiymatlari.map((row, rowIndex) => (
                <tr key={rowIndex} className='border-b border-neutral-300 text-xs'>
                {row?.map((qiymat, colIndex) => (
                    <td key={colIndex} className='w-[80px] border-r border-neutral-300 px-0 bg-white text-black'>
                        <input
                            type={"number"}
                            step={0.1}
                            value={qiymat.toString().slice(0,5)}
                            placeholder={"0"} 
                            onChange={(event) => handleChange(rowIndex, colIndex, event)}
                            className={`
                            ${ +qiymat > 100
                                ? 'border-1 border-red-500 text-red-500'
                                : "border-none focus:ring-0 text-gray-800 "
                            } py-[2px] max-w-[100px] md:w-[80px] lg:w-[80px] font-medium px-1 mx-0 focus:outline-0`}
                        />
                        <table className='w-full h-full'>
                            <tbody>
                                <tr>
                                    <td className='bg-slate-200 text-blue-800 w-[100px] md:w-[80px] text-start px-2 font-medium'>
                                       {natijaValues[rowIndex][colIndex]?.toString().slice(0,6)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}


