import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../UI/button'
import 'boxicons'
import { useDispatch } from 'react-redux'
import { logOutUser } from '../Reducer/auth'


function Navbar() {
  const [hidden, setHidden] = useState(true)
  const dispatch = useDispatch()
  const navigate=useNavigate()
  
  const logOutHandler = () => {
    dispatch(logOutUser())
    navigate("/")
  }

  return (
    <div className='flex z-10 px-10 md:px-16 items-center justify-between sticky top-0 h-[40px] md:h-[50px] bg-[rgba(255,255,255,.5)] shadow-md backdrop-blur-sm'>
      <h1>logo</h1>
      <div className="flex items-center justify-between gap-5">
        <Link to={"/"}>list 1</Link>
        <Link Link to={"/list2"}>list 2</Link>
        <Link to={"/list3"}>list 3</Link>
      </div>
      
      <div className="flex items-center gap-3 relative">
        <Button
          onClick={logOutHandler}
          className={`text-red-400 ${hidden ? "hidden" : ""} rounded-xl px-2 bg-[rgba(0,0,0,0.1)] absolute top-12 -right-5`}>
          Log Out
        </Button>
        <p className="text-md">UserName</p>
        <box-icon onClick={()=> setHidden(!hidden)} className="relative text-red-600" name='user-circle' animation='tada-hover' type='solid' color="rgb(107, 107, 107)" size="md"></box-icon>
      </div>
    </div>
  )
}

export default Navbar