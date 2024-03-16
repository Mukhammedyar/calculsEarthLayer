import React, { useState } from 'react'
import './tableInput.css'
import List2Head from './List2Head';
import { useSelector } from 'react-redux';

export default function TableInput({jadvalQiymatlari, handleChange, newArray}) {
  const { valuesList2  } = useSelector(state => state.valuesList2)
    
  return (
    <table
        className="mb-4 shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <List2Head/>
        <tbody>
            {jadvalQiymatlari.map((row, rowIndex) => (
                <tr key={rowIndex} className='border-b border-neutral-300 text-sm'>
                {row.map((qiymat, colIndex) => (
                    <td key={colIndex} className='w-[80px] border-r border-neutral-300 px-0 bg-white text-black'>
                        <input
                            type={"number"}
                            step={1}
                            value={valuesList2 == "" ? qiymat : valuesList2[rowIndex][colIndex]}
                            placeholder={"0"} 
                            onChange={(event) => handleChange(rowIndex, colIndex, event)}
                            className={`
                            ${ +qiymat > 100
                                ? 'border-1 border-red-500 text-red-500'
                                : "border-none focus:ring-0 text-gray-800 "
                            } py-[2px] max-w-[100px] md:w-[80px] lg:w-[80px] font-medium px-1 mx-0 focus:outline-0`}
                        />
                        <td className='bg-slate-200 text-neutral-800 w-[100px] md:w-[80px] text-start px-2 font-medium'>
                            {newArray[rowIndex][colIndex]?.toFixed(3)}
                        </td>
                    </td>
                ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}


