import React from 'react'
import { useSelector } from 'react-redux'

export default function Jami() {
  const {isLoading, jamiPercent}=useSelector(state => state.valuesList1)

  return (
    <table className='shadow-lg w-[50px] md:w-[70px] border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg'>
        <thead className="text-xs md:text-sm border-b h-[82px] border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    rowSpan={2}
                    scope="col"
                    className="border-r border-neutral-300">
                    Жами %
                </th>
            </tr>
        </thead>
        <tbody className='text-xs md:text-sm h-[300px]'> 
        {!isLoading && jamiPercent.map((item, index) => (
            <tr key={index} className={`${index == 8 ? "bg-blue-300" : "bg-white"} border-b  border-neutral-300 font-normal`}>
                <td
                scope="col"
                className="border-b border-neutral-300">
                {item == NaN ? '0' : item?.toString()?.slice(0,7)}
                </td>
            </tr>
        ))}
        </tbody>
    </table>
  )
}
