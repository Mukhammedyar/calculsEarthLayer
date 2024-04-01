import React from 'react'
import { useSelector } from 'react-redux'

export default function List3Input({handleInputChange, values1}) {
  const { jamiNatiyja, values } = useSelector(state => state.valuesList1)

  return (
    <tbody className='text-xs md:text-sm h-[300px]'>
          {values1.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b'>
              {row.map((qiymat, colIndex) => (
                <td key={colIndex} className='p-0 w-[50px] md:w-[50px] border-r-[1px]'>
                  <input
                    type="number"
                    value={values == '' ? qiymat : values[rowIndex][colIndex]}
                    step={1}
                    onChange={(event) => handleInputChange(rowIndex, colIndex, event)}
                    className={`text-xs font-medium px-1
                      ${ +qiymat > 100 || +qiymat < 0
                        ? 'border-1 border-red-500  text-red-500'
                        : ""
                      }
                        w-[50px] md:w-[75px] focus:outline-0 text-xs md:text-sm font-medium px-1`}
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr className='bg-blue-300 text-start h-[33px]'>
            {values1.map((item, index) => (
              <td key={index} className='w-[50px] border-2 md:w-[50px] px-2 border-r-[1px] text-gray-800 font-medium'>
                {jamiNatiyja[index]?.toString().slice(0,6)}
              </td>
            ))}
          </tr>
        </tbody>
  )
}
