import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)
  return (
    <div className="flex px-2 items-center text-xs md:sm lg:text-lg w-[80%] md:w-1/2 lg:w-1/3 bg-[rgba(230,230,230,.3)] backdrop-blur-sm shadow-lg shadow-gray-300 border-[1px] border-b-0 border-gray-300 fixed h-[40px] md:h-[50px] lg:h-[60px] bottom-0 justify-evenly gap-5">
        <Link 
          onClick={() => {setActive1(true); setActive2(false); setActive3(false)}} 
          className={`${active1 ? "border-b-2 rounded-b-none border-spacing-x-48 border-indigo-800 text-indigo-800 hover:text-indigo-800 transition-2" : ""} hover:text-gray-800 flex items-center h-full font-sans lowercase font-medium transition-all transition-2 text-gray-600 px-3 py-1`} 
          to={"/"}>
            <p>1-Jadval</p>
          </Link>
        <Link 
          onClick={()=> { setActive1(false); setActive2(true); setActive3(false)}} 
          className={`${active2 ? "border-b-2 rounded-b-none border-spacing-x-48 border-indigo-800 text-indigo-800 hover:text-indigo-800 transition-2" : ""} hover:text-gray-800 flex items-center h-full font-sans lowercase font-medium transition-all transition-2 text-gray-600 px-3 py-1`} 
          to={"/list2"}>
            <p>2-Jadval</p>
          </Link>
        <Link 
          onClick={()=> { setActive1(false); setActive2(false); setActive3(true)}} 
          className={`${active3 ? "border-b-2 rounded-b-none border-spacing-x-48 border-indigo-800 text-indigo-800 hover:text-indigo-800 transition-2" : ""} hover:text-gray-800 flex items-center h-full font-sans lowercase font-medium transition-all transition-2 text-gray-600 px-3 py-1`} 
          to={"/list3"}>
            <p>3-Jadval</p>
          </Link>
    </div>
  )
}
