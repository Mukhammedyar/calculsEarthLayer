import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { footerStyles } from '../../UI/footerStyles'

export default function Footer() {
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)
  return (
    <div className={`${footerStyles.flexCenter} ${footerStyles.responsiveStyle  } ${footerStyles.backgroundStyle} bottom-1 px-2 fixed `}>
        <Link 
          onClick={() => {setActive1(true); setActive2(false); setActive3(false)}} 
          className={`${active1 ? footerStyles.borderBottomStyle : ""} ${footerStyles.defaultStyles}`} 
          to={"/"}>
            <p>1-Jadval</p>
          </Link>
        <Link 
          onClick={()=> { setActive1(false); setActive2(true); setActive3(false)}} 
          className={`${active2 ? footerStyles.borderBottomStyle : ""} ${footerStyles.defaultStyles}`} 
          to={"/list2"}>
            <p>2-Jadval</p>
          </Link>
        <Link 
          onClick={()=> { setActive1(false); setActive2(false); setActive3(true)}} 
          className={`${active3 ? footerStyles.borderBottomStyle : ""} ${footerStyles.defaultStyles}`} 
          to={"/list3"}>
            <p>3-Jadval</p>
          </Link>
    </div>
  )
}
