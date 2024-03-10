import React from 'react'
import './tableInput.css'
import Input from '../../../UI/input'
import {list} from '../../../API/tableList'

export default function TableInput() {
    const leng=[1,2,3,4,5,6]
  return (
    <table
        className="my-10 shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    scope="col"
                    className="border-r py-4 border-neutral-300">
                    HCO<sub>3</sub>
                </th>
                <th
                    scope="col"
                    className="border-r px-2 border-neutral-300">
                    CI
                </th>
                <th
                scope="col"
                className="border-r border-r-slate-400 px-2 py-4">
                    CO
                    <sub>4</sub>
                    <sup>-2</sup>
                </th>
                <th
                scope="col"
                className="border-r border-r-slate-400 px-2 py-4">
                    Ca
                    <sup>+2</sup>
                </th>
                <th
                scope="col"
                className="border-r border-r-slate-400 px-2 py-4">
                    Mg
                    <sup>+2</sup>
                </th>
                <th
                scope="col"
                className="border-r border-r-slate-400 px-2 py-4">
                    Na
                    <sup>+</sup>
                </th>
            </tr>
        </thead>
        <tbody>
            {/* 1-qatar */}
            <tr className='border-b'>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
            </tr>
            <tr className="border-b">
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
            </tr>
            
            <tr className='border-b'>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
            </tr>
            <tr className="border-b">
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
            </tr>
            
            <tr className='border-b'>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
            </tr>
            <tr className="border-b">
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
            </tr>
            
            <tr className='border-b'>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
            </tr>
            <tr className="border-b">
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
            </tr>
            
            <tr className='border-b'>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
            </tr>
            <tr className="border-b">
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
            </tr>
            
            <tr className='border-b'>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
            </tr>
            <tr className="border-b">
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
            </tr>
            
            <tr className='border-b'>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
            </tr>
            <tr className="border-b">
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
            </tr>
            
            <tr className='border-b'>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
                <td className='border-r px-0 bg-yellow-500 text-black'>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[150px] mx-0"} 
                        placeholder={"0"}/>
                </td>
            </tr>
            <tr className="border-b">
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
                <td className='border-r px-0 bg-blue-500 text-white'>
                    0.0
                </td>
            </tr>
            
        </tbody>
    </table>
  )
}


