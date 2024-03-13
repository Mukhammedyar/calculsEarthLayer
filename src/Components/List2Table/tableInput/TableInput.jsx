import React, { useState } from 'react'
import './tableInput.css'
import Input from '../../../UI/input'
import {list} from '../../../API/tableList'
import List2Head from '../List2Head';
import { useDispatch, useSelector } from 'react-redux';
import { valueSetSuccess } from '../../../Reducer/ValuesList1';

export default function TableInput() {
    const [jadvalQiymatlari, setJadvalQiymatlari] = useState(Array(8).fill(Array(6).fill('')));
    const { isLoading, jamiPercent } = useSelector(state => state.valuesList1)
    const dispatch = useDispatch()
    

    const handleChange = (row, col, event) => {
        dispatch(valueSetStart())
        const newJadvalQiymatlari = jadvalQiymatlari.map(row => [...row]);
        try {
            newJadvalQiymatlari[row][col] = event.target.value;
            dispatch(valueSetSuccess([...newJadvalQiymatlari]))
            setJadvalQiymatlari(newJadvalQiymatlari);
        } catch (error) {
          console.log(error);
        }
    };
    
  return (
    <table
        className="my-10 shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <List2Head/>
        <tbody>
            {jadvalQiymatlari.map((row, rowIndex) => (
                <tr key={rowIndex} className='border-b border-neutral-300'>
                {row.map((qiymat, colIndex) => (
                    <td key={colIndex} className='border-r border-neutral-300 px-0 bg-white text-black'>
                        <Input
                            type={"number"}
                            step={1}
                            placeholder={"0"}
                            onChange={(event) => handleChange(rowIndex, colIndex, event)}
                            className={`
                            ${ +qiymat > 100
                                ? 'border-1 border-red-500 text-red-500'
                                : "border-none focus:ring-0 text-gray-800 font-medium px-2 mx-0"
                            } sm:w-[100px] md:w-[150px] lg:w-[160px] focus:outline-0`}
                        />
                        <td className=' px-0 bg-slate-200 text-neutral-800'>
                            0.0
                        </td>
                    </td>
                ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}


