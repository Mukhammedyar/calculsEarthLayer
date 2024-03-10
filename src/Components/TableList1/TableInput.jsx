import React, { useState } from 'react'
import Input from '../../UI/input'
import TableInputHead from './tableInputHead'
import { useDispatch, useSelector } from 'react-redux'
import { value12Change, value13Change, value14Change, value15Change, value16Change, value17Change, value18Change, value1Change } from '../../functionsForInput/Row1'
import { value21Change, value22Change, value23Change, value24Change, value25Change, value26Change, value27Change, value28Change } from '../../functionsForInput/Row2'
import { value31Change, value32Change, value33Change, value34Change, value35Change, value36Change, value37Change, value38Change } from '../../functionsForInput/Row3'
import { value41Change, value42Change, value43Change, value44Change, value45Change, value46Change, value47Change, value48Change } from '../../functionsForInput/Row4'
import { value51Change, value52Change, value53Change, value54Change, value55Change, value56Change, value57Change, value58Change } from '../../functionsForInput/Row5'
import { value61Change, value62Change, value63Change, value64Change, value65Change, value66Change, value67Change, value68Change } from '../../functionsForInput/Row6'
import { value71Change, value72Change, value73Change, value74Change, value75Change, value76Change, value77Change, value78Change } from '../../functionsForInput/Row7'
import Button from '../../UI/button'
import { calculateFizikLoy1Start, calculateFizikQum1Start, calculateFizikQum1Success, calculateFizikQum2Success, calculateFizikQum3Success, calculateFizikQum4Success, calculateFizikQum5Success, calculateFizikQum6Success, calculateFizikQum7Success, calculateFizikQum8Success, calculateMexanikTarkib1Start } from '../../Reducer/CalculateList1Row1'

function TableInput() {
    const [value1, setValue1] = useState({value1: 0, value2: 0, value3: 0, value4:0,value5:0,value6:0,value7:0,value8:0 })
    const [value2, setValue2] = useState({value1: 0, value2: 0, value3: 0, value4:0,value5:0,value6:0,value7:0,value8:0 })
    const [value3, setValue3] = useState({value1: 0, value2: 0, value3: 0, value4:0,value5:0,value6:0,value7:0,value8:0 })
    const [value4, setValue4] = useState({value1: 0, value2: 0, value3: 0, value4:0,value5:0,value6:0,value7:0,value8:0 })
    const [value5, setValue5] = useState({value1: 0, value2: 0, value3: 0, value4:0,value5:0,value6:0,value7:0,value8:0 })
    const [value6, setValue6] = useState({value1: 0, value2: 0, value3: 0, value4:0,value5:0,value6:0,value7:0,value8:0 })
    const [value7, setValue7] = useState({value1: 0, value2: 0, value3: 0, value4:0,value5:0,value6:0,value7:0,value8:0 })
    const dispatch = useDispatch()
    const { errors11, errors12, errors13, errors14, errors15, errors16, errors17, errors18 } = useSelector(state => state.error1)
    const { errors21, errors22, errors23, errors24, errors25, errors26, errors27, errors28 } = useSelector(state => state.error2)
    const { errors31, errors32, errors33, errors34, errors35, errors36, errors37, errors38 } = useSelector(state => state.error3)
    const { errors41, errors42, errors43, errors44, errors45, errors46, errors47, errors48 } = useSelector(state => state.error4)
    const { errors51, errors52, errors53, errors54, errors55, errors56, errors57, errors58 } = useSelector(state => state.error5)
    const { errors61, errors62, errors63, errors64, errors65, errors66, errors67, errors68 } = useSelector(state => state.error6)
    const { errors71, errors72, errors73, errors74, errors75, errors76, errors77, errors78 } = useSelector(state => state.error7)


    const calculateHandler = async () => {
        dispatch(calculateFizikQum1Success(parseFloat(value1.value1) + parseFloat(value2.value1) + parseFloat(value3.value1) + parseFloat(value4.value1)))  
        dispatch(calculateFizikQum2Success(parseFloat(value1.value2) + parseFloat(value2.value2) + parseFloat(value3.value2) + parseFloat(value4.value2)))
        dispatch(calculateFizikQum3Success(parseFloat(value1.value3) + parseFloat(value2.value3) + parseFloat(value3.value3) + parseFloat(value4.value3)))
        dispatch(calculateFizikQum4Success(parseFloat(value1.value4) + parseFloat(value2.value4) + parseFloat(value3.value4) + parseFloat(value4.value4)))
        dispatch(calculateFizikQum5Success(parseFloat(value1.value5) + parseFloat(value2.value5) + parseFloat(value3.value5) + parseFloat(value4.value5)))
        // dispatch(calculateFizikQum6Success(parseFloat(value1.value6) + parseFloat(value2.value6) + parseFloat(value3.value6) + parseFloat(value4.value6)))
        // dispatch(calculateFizikQum7Success(parseFloat(value1.value7) + parseFloat(value2.value7) + parseFloat(value3.value7) + parseFloat(value4.value7)))
        // dispatch(calculateFizikQum8Success(parseFloat(value1.value8) + parseFloat(value2.value8) + parseFloat(value3.value8) + parseFloat(value4.value8)))
        console.log(value1, value2, value3, value4, value5, value6, value7);
    }
    
  return (
    <>
    <table
        className="shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <TableInputHead/>
        <tbody>
            {/* 1-qatar */}
            <tr className='border-b'>
                <td className={`${errors11 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input
                        type={"number"}
                        className={` border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[130px] mx-0`} 
                        placeholder={"0"}
                        onchange={(e)=> value1Change(e,setValue1,value1, dispatch)}
                    /> 
                </td>
                <td className={`${errors21 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value21Change(e,setValue2,value1, dispatch)}
                        />
                </td>
                <td className={`${errors31 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"} 
                        onchange={(e)=> value31Change(e,setValue3,value1, dispatch)}/>
                </td>
                <td className={`${errors41 ? "border-[1px] border-red-500 text-red-500": ""}border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:right-4 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"} 
                        onchange={(e)=> value41Change(e,setValue4,value1, dispatch)}/>
                </td>
                <td className={`${errors51 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"} 
                        step={0.001}
                        onchange={(e)=> value51Change(e,setValue5,value1, dispatch)}/>
                </td>
                <td className={`${errors61 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        step={0.001}
                        onchange={(e)=> value61Change(e,setValue6,value1, dispatch)}
                    />
                </td>
                <td className={`${errors71 ? "border-[1px] border-red-500 text-red-500": ""} border-0 px-0 flex justify-start overflow-hidden`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 md:w-[150px] w-[50px] font-medium px-2 mx-0"} 
                        placeholder={"0"}
                        step={0.0001}
                        onchange={(e)=> value71Change(e,setValue7,value1, dispatch)}
                        />
                </td>
            </tr>
            {/* 2-qatar */}
            <tr className='border-b'>
                <td className={`${errors12 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input
                        type={"number"}
                        className={`border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[130px] mx-0`} 
                        placeholder={"0"}
                        onchange={(e)=> value12Change(e,setValue1,value1,dispatch)}
                        />
                </td>
                <td className={` ${errors22 ? "border-[1px] border-red-500 text-red-500": ""}border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value22Change(e,setValue2,value2, dispatch)}
                        />
                </td>
                <td className={`${errors32 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value32Change(e,setValue3,value2, dispatch)}/>
                </td>
                <td className={`${errors42 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:right-4 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value42Change(e,setValue4,value2, dispatch)}/>
                </td>
                <td className={`${errors52 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}  
                        step={0.001}
                        onchange={(e)=> value52Change(e,setValue5,value2, dispatch)}/>
                </td>
                <td className={`${errors62 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        step={0.001}
                        onchange={(e)=> value62Change(e,setValue6,value2, dispatch)}
                    />
                </td>
                <td className={`${errors72 ? "border-[1px] border-red-500 text-red-500": ""}border-0 px-0 flex justify-start overflow-hidden`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 md:w-[150px] w-[50px] font-medium px-2 mx-0"} 
                        placeholder={"0"}
                        step={0.0001}
                        onchange={(e)=> value72Change(e,setValue7,value2, dispatch)}
                    />
                </td>
            </tr>
            {/* 3-qatar */}
            <tr className='border-b'>
                <td className={`${errors13 ? "border-[1px] border-red-500 text-red-500": ""}  border-r px-0`}>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[130px] mx-0"} 
                        placeholder={"0"}
                        onchange={ e => value13Change(e,setValue1,value3,dispatch)}/>
                </td>
                <td className={`${errors23 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}  
                        onchange={(e)=> value23Change(e,setValue2,value3, dispatch)}/>
                </td>
                <td className={`${errors33 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value33Change(e,setValue3,value3, dispatch)}/>
                </td>
                <td className={`${errors43 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:right-4 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value43Change(e,setValue4,value3, dispatch)}/>
                </td>
                <td className={`${errors53 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"} 
                        step={0.001}
                        onchange={(e)=> value53Change(e,setValue5,value3, dispatch)}/>
                </td>
                <td className={`${errors63 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        step={0.001}
                        onchange={(e)=> value63Change(e,setValue6,value3, dispatch)}
                    />
                </td>
                <td className={`${errors73 ? "border-[1px] border-red-500 text-red-500": ""} border-0 px-0 flex justify-start overflow-hidden`}>
                    <Input 
                          type={"number"}
                          className={"border-0 focus:ring-0 text-gray-800 md:w-[150px] w-[50px] font-medium px-2 mx-0"}
                          placeholder={"0"}
                          step={0.0001}
                          onchange={(e) => value73Change(e, setValue7, value3, dispatch)}
                    />
                </td>
            </tr>
            {/* 4-qatar */}
            <tr className='border-b'>
                <td className={`${errors14 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[130px] mx-0"} 
                        placeholder={"0"}
                        onchange={e => value14Change(e,setValue1,value4,dispatch)}
                        />
                </td>
                <td className={`${errors24 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"} 
                        onchange={(e)=> value24Change(e,setValue2,value4, dispatch)}/>
                </td>
                <td className={`${errors34 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value34Change(e,setValue3,value4, dispatch)}/>
                </td>
                <td className={`${errors44 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:right-4 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value44Change(e,setValue4,value4, dispatch)}/>
                </td>
                <td className={`${errors54 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"} 
                        step={0.001}
                        onchange={(e)=> value54Change(e,setValue5,value4, dispatch)}/>
                </td>
                <td className={`${errors64 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        step={0.001}
                        onchange={(e)=> value64Change(e,setValue6,value4, dispatch)}
                        />
                </td>
                <td className={`${errors74 ? "border-[1px] border-red-500 text-red-500": ""} border-0 px-0 flex justify-start overflow-hidden`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 md:w-[150px] w-[50px] font-medium px-2 mx-0"} 
                        placeholder={"0"}
                        step={0.0001}
                        onchange={(e) => value74Change(e, setValue7, value4, dispatch)}
                        />
                </td>
            </tr>
            {/* 5-qatar */}
            <tr className='border-b'>
                <td className={`${errors15 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[130px] mx-0"} 
                        placeholder={"0"}
                        onchange={ e => value15Change(e,setValue1,value5,dispatch)}
                        />
                </td>
                <td className={`${errors25 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}  
                        onchange={(e)=> value25Change(e,setValue2,value5, dispatch)}/>
                </td>
                <td className={`${errors35 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value35Change(e,setValue3,value5, dispatch)}/>
                </td>
                <td className={`${errors45 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:right-4 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value45Change(e,setValue4,value5, dispatch)}/>
                </td>
                <td className={`${errors55 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"} 
                        step={0.001}
                        onchange={(e)=> value55Change(e,setValue5,value5, dispatch)}/>
                </td>
                <td className={`${errors65 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        step={0.001}
                        onchange={(e)=> value65Change(e,setValue6,value5, dispatch)}
                        />
                </td>
                <td className={`${errors75 ? "border-[1px] border-red-500 text-red-500": ""} border-0 px-0 flex justify-start overflow-hidden`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 md:w-[150px] w-[50px] font-medium px-2 mx-0"} 
                        placeholder={"0"}
                        step={0.0001}
                        onchange={(e) => value75Change(e, setValue1, value5, dispatch)}
                        />
                </td>
            </tr>
            {/* 6-qatar */}
            <tr className='border-b'>
                <td className={`${errors16 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[130px] mx-0"} 
                        placeholder={"0"}
                        onchange={e=> value16Change(e,setValue1,value6,dispatch)}
                    />
                </td>
                <td className={`${errors26 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}  
                        onchange={(e)=> value26Change(e,setValue2,value6, dispatch)}/>
                </td>
                <td className={`${errors36 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value36Change(e,setValue3,value6, dispatch)}/>
                </td>
                <td className={`${errors46 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:right-4 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value46Change(e,setValue4,value6, dispatch)}/>
                </td>
                <td className={`${errors56 ? "border-[1px] border-red-500 text-red-500": ""}border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"} 
                        step={0.001}
                        onchange={(e)=> value56Change(e,setValue5,value6, dispatch)}/>
                </td>
                <td className={`${errors66 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        step={0.001}
                        onchange={(e)=> value66Change(e,setValue6,value6, dispatch)}
                        />
                </td>
                <td className={`${errors76 ? "border-[1px] border-red-500 text-red-500": ""} border-0 px-0 flex justify-start overflow-hidden`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 md:w-[150px] w-[50px] font-medium px-2 mx-0"} 
                        placeholder={"0"}
                        step={0.0001}
                        onchange={(e) => value76Change(e, setValue7,value6, dispatch)}
                        />
                </td>
            </tr>
            {/* 7-qatar */}
            <tr className='border-b'>
                <td className={`${errors17 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[130px] mx-0"} 
                        placeholder={"0"}
                        onchange={e=> value17Change(e,setValue1,value7,dispatch)}
                        />
                </td>
                <td className={`${errors27 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}  
                        onchange={(e)=> value27Change(e,setValue2,value7, dispatch)}/>
                </td>
                <td className={`${errors37 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value37Change(e,setValue3,value7, dispatch)}/>
                </td>
                <td className={`${errors47 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:right-4 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value47Change(e,setValue4,value7, dispatch)}/>
                </td>
                <td className={`${errors57 ? "border-[1px] border-red-500 text-red-500": ""}border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"} 
                        step={0.001}
                        onchange={(e)=> value57Change(e,setValue5,value7, dispatch)}/>
                </td>
                <td className={`${errors67 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        step={0.001}
                        onchange={(e)=> value67Change(e,setValue6,value7, dispatch)}
                        />
                </td>
                <td className={`${errors77 ? "border-[1px] border-red-500 text-red-500": ""} border-0 px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 md:w-[150px] w-[50px] px-2 mx-0"} 
                        placeholder={"0"}
                        step={0.0001}
                        onchange={(e) => value77Change(e, setValue7, value7, dispatch)}
                        />
                </td>
            </tr>
            {/* 8-qatar */}
            <tr className='border-b'>
                <td className={`${errors18 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 w-[50px] md:w-[130px] mx-0"} 
                        placeholder={"0"}
                        onchange={e => value18Change(e,setValue1,value8,dispatch)}
                        />
                </td>
                <td className={`${errors28 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}  
                        onchange={(e)=> value28Change(e,setValue2,value8, dispatch)}/>
                </td>
                <td className={`${errors38 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value38Change(e,setValue3,value8, dispatch)}/>
                </td>
                <td className={`${errors48 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:right-4 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        onchange={(e)=> value48Change(e,setValue4,value8, dispatch)}/>
                </td>
                <td className={`${errors58 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"} 
                        step={0.001}
                        onchange={(e)=> value58Change(e,setValue5, value8, dispatch)}/>
                </td>
                <td className={`${errors68 ? "border-[1px] border-red-500 text-red-500": ""} border-r px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-medium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        step={0.001}
                        onchange={(e)=> value68Change(e,setValue6, value8, dispatch)}
                        />
                </td>
                <td className={`${errors78 ? "border-[1px] border-red-500 text-red-500": ""} border-0 px-0`}>
                    <Input 
                        type={"number"}
                        className={"border-0 focus:ring-0 text-gray-800 font-me5ium px-2 md:w-[130px] w-[50px] mx-0"} 
                        placeholder={"0"}
                        step={0.0001}
                        onchange={(e)=> value78Change(e,setValue7, value8, dispatch)}
                        />
                </td>
            </tr>
          </tbody>
        </table>
        <Button
            onClick={calculateHandler}
            className={"bg-blue-500 my-2 text-white"}>
            Hisoblash
        </Button>
    </>
  )
}

export default TableInput