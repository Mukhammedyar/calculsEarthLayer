import React from 'react'

export default function List3Input({jadvalQiymatlari,handleChange}) {
  return (
    <tbody className=''>
          {jadvalQiymatlari.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b'>
              {row.map((qiymat, colIndex) => (
                <td key={colIndex} className='w-[70px] md:w-[100px] text-sm md:text-md border-r-[1px]'>
                  <input
                    type="number"
                    value={qiymat}
                    step={colIndex >= 6 ? 0.0001 : 0.001}
                    onChange={(event) => handleChange(rowIndex, colIndex, event)}
                    className={`
                      ${colIndex === 0 && +qiymat < 0.25
                        ? 'border-0 text-red-500'
                        : colIndex === 1 && (+qiymat < 0.1 || +qiymat > 0.25)
                        ? 'border-0 text-red-500'
                        : colIndex === 2 && (+qiymat < 0.05 || +qiymat > 0.1)
                        ? 'border-0 text-red-500'
                        : colIndex === 3 && (+qiymat < 0.01 || +qiymat > 0.05)
                        ? 'border-0 text-red-500'
                        : colIndex === 4 && (+qiymat < 0.005 || +qiymat > 0.01)
                        ? 'border-0 text-red-500'
                        : colIndex === 5 && (+qiymat <  0.001 || +qiymat > 0.005)
                        ? 'border-0 text-red-500'
                        : colIndex === 6 && +qiymat > 0.001
                        ? 'border-[1px] border-red-500 text-red-500'
                        : colIndex === 7 && +qiymat < 0
                        ? "border-[1px] border-red-500 text-red-500"
                        : "border-none"
                      }
                        w-[70px] md:w-[100px] border-0 focus:outline-0`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
  )
}
