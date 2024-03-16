import React from 'react'
import { useSelector } from 'react-redux'

export default function Jami() {
  const {isLoading, jamiPercent}=useSelector(state => state.valuesList1)

  return (
    <table className='shadow-lg w-[100px] md:min-w-[100px] border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg'>
        <thead className="text-xs border-b border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
            <th
                rowSpan={2}
                scope="col"
                className="border-r py-12 md:py-8 border-neutral-300">
                Жами %
            </th>
            </tr>
        </thead>
        <tbody> 
        {!isLoading && jamiPercent.map((item, index) => (
            <tr key={index} className='bg-white border-b text-xs border-neutral-300 font-normal'>
                <td
                scope="col"
                className="border-b border-neutral-300 py-[2px]">
                {item == NaN ? '0' : item?.toString()?.slice(0,7)}
                </td>
            </tr>
        ))}
        </tbody>
    </table>
  )
}
