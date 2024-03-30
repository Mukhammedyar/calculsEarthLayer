import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../config/firebase';
import { valueSetSuccess } from '../../Reducer/ValuesList1';



export default function List3Input({handleInputChange, values1, setValues1}) {
  const { jamiNatiyja,values } = useSelector(state => state.valuesList1)
  const dispatch = useDispatch()
  

  useEffect(() => {
    const getValueDocs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Values")); // Firestore'dan belgeleri al
        const newData = querySnapshot.docs.map(doc => doc.data().data); // Verileri diziye dönüştür
        setValues1(newData);
        dispatch(valueSetSuccess([...newData]))
      } catch (error) {
        console.error('Error fetching Firestore values:', error);
      }
    };

    getValueDocs();
  }, [db]);

  return (
    <tbody className='text-xs md:text-sm h-[300px]'>
          {values1.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b'>
              {row.map((qiymat, colIndex) => (
                <td key={colIndex} className='p-0 w-[50px] md:w-[50px] border-r-[1px]'>
                  <input
                    type="number"
                    value={qiymat}
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
                {jamiNatiyja[index]?.toFixed(3)}
              </td>
            ))}
          </tr>
        </tbody>
  )
}
