import React from 'react'
import { useSelector } from 'react-redux'

export default function List3Input({ jadvalQiymatlari, handleChange }) {
  const { jamiNatiyja,values } = useSelector(state => state.valuesList1)
  const array = Array(8).fill(0)
  return (
    <tbody className='text-xs'>
          {jadvalQiymatlari.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b'>
              {row.map((qiymat, colIndex) => (
                <td key={colIndex} className='p-0 w-[50px] md:w-[50px] text-sm md:text-md border-r-[1px]'>
                  <input
                    type="number"
                    value={values=="" ? qiymat : values[rowIndex][colIndex]}
                    step={1}
                    onChange={(event) => handleChange(rowIndex, colIndex, event)}
                    className={`text-xs font-medium px-1
                      ${ +qiymat > 100
                        ? 'border-1 border-red-500  text-red-500'
                        : "border-none"
                      }
                        w-[50px] md:w-[50px] focus:outline-0 text-xs font-medium px-1`}
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr className='bg-blue-300 text-start'>
            {array.map((item, index) => (
              <td key={index} className='w-[50px] md:w-[50px] text-xs px-1 md:text-md border-r-[1px] text-gray-800 font-medium'>
                {jamiNatiyja[index]?.toString().slice(0,9)}
              </td>
            ))}
          </tr>
        </tbody>
  )
}
