import React from 'react'
import List3Head from './list3Head'
import { useDispatch, useSelector } from 'react-redux'

export default function List3Input({ jadvalQiymatlari,handleChange,valueResultArray }) {
    const {valuesList2} = useSelector(state => state.valuesList2)
    const {jamiQiymatlar, valuesResult} = useSelector(state => state.valuesList3)
    const dispatch = useDispatch()
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
                            value={valuesList2 == "" ? qiymat?.slice(0,5) : valuesList2[rowIndex][colIndex]}
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
                                        {valuesResult == '' ? valueResultArray[rowIndex][colIndex]?.toString().slice(0,8) : valuesResult[rowIndex][colIndex]?.toString().slice(0,8)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                ))}
                </tr>
            ))}
              <tr className='border-b border-neutral-300 text-xs h-[20px]'>
                {jamiQiymatlar.map((qiymat, index) => (
                    <td key={index} className='w-[80px] border-r border-neutral-30 font-medium bg-blue-300 text-start px-1 text-black'>
                        {qiymat.toString().slice(0,6)}
                    </td>
                ))}
                </tr>
        </tbody>
    </table>
  )
}
