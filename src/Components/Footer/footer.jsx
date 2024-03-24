import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)
  return (
    <div className="flex items-center w-1/3 bg-blue-600 fixed h-[60px] rounded-t-2xl bottom-0 justify-evenly gap-5">
        <Link 
          onClick={() => {setActive1(true); setActive2(false); setActive3(false)}} 
          className={`${active1 ? "border-b-2 rounded-b-none border-spacing-x-48 border-white transition-2" : ""} hover:bg-blue-500 transition-all transition-2 text-white px-3 py-1`} 
          to={"/"}>1-Jadval</Link>
        <Link 
          onClick={()=> { setActive1(false); setActive2(true); setActive3(false)}} 
          className={`${active2 ? "border-b-2 rounded-b-none border-spacing-x-48 border-white transition-2" : ""} hover:bg-blue-500 transition-all transition-2 text-white px-3 py-1`} 
          to={"/list2"}>2-Jadval</Link>
        <Link 
          onClick={()=> { setActive1(false); setActive2(false); setActive3(true)}} 
          className={`${active3 ? "border-b-2 rounded-b-none border-spacing-x-48 border-white transition-2" : ""} hover:bg-blue-500 transition-all transition-2 text-white px-3 py-1`} 
          to={"/list3"}>3-Jadval</Link>
    </div>
  )
}
