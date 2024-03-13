import React from 'react'
import { useSelector } from 'react-redux'

export default function List3Input({ jadvalQiymatlari, handleChange }) {
  const { jamiNatiyja } = useSelector(state => state.valuesList1)
  const array = Array(8).fill(0)
  
  return (
    <tbody className=''>
          {jadvalQiymatlari.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b'>
              {row.map((qiymat, colIndex) => (
                <td key={colIndex} className='w-[70px] md:w-[100px] text-sm md:text-md border-r-[1px]'>
                  <input
                    type="number"
                    value={qiymat}
                    step={1}
                    onChange={(event) => handleChange(rowIndex, colIndex, event)}
                    className={`
                      ${ +qiymat > 100
                        ? 'border-1 border-red-500 text-red-500'
                        : "border-none px-2"
                      }
                        w-[70px] md:w-[100px] focus:outline-0`}
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr className='bg-blue-300 text-start'>
            {array.map((item, index) => (
              <td key={index} className='w-[70px] md:w-[100px] text-sm md:text-md border-r-[1px] px-2 text-gray-800 font-medium'>
                {jamiNatiyja[index].toString().slice(0,9)}
              </td>
            ))}
          </tr>
        </tbody>
  )
}
