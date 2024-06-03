import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../config/firebase';
import { valueSetSuccess } from '../../Reducer/ValuesList1';



export default function Inputs({handleInputChange, values1, setValues1}) {
  const { jamiNatiyja } = useSelector(state => state.valuesList1)
  const { length } = useSelector(state => state.tableLength)
  const EightArray = Array(8).fill('')
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getValueDocs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Values")); 
        const newData = querySnapshot.docs.map(doc => doc.data().data);
        newData.length = parseFloat(length)
        setValues1(newData);
        dispatch(valueSetSuccess([...newData]))
      } catch (error) {
        console.error('Error fetching Firestore values:', error);
      }
    };

    getValueDocs();
  }, [db, length]);

  return (
    <tbody className='text-xs md:text-sm'>
          {values1.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b'>
              {row.map((qiymat, colIndex) => (
                <td key={colIndex} className={`inputs-td ${rowIndex % 2 == 1 ? "bg-gray-100" : "bg-white"}`}>
                  <input
                    type="number"
                    value={qiymat}
                    step={1}
                    onChange={(event) => handleInputChange(rowIndex, colIndex, event)}
                    className={`${rowIndex % 2 == 1 ? "bg-gray-100" : "bg-white"} inputs-input`}
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr className='bg-blue-300 text-start h-[33px]'>
            {EightArray.map((item, index) => (
              <td key={index} className='inputs-last-list'>
                {jamiNatiyja[index]?.toFixed(3)}
              </td>
            ))}
          </tr>
        </tbody>
  )
}
