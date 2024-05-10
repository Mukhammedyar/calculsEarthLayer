import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/button'
import 'boxicons'
import { useDispatch } from 'react-redux'
import { logOutUser } from '../../Reducer/auth'
import { lengthEdit } from '../../Reducer/TableLength'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'


function Navbar() {
  const [hidden, setHidden] = useState(true)
  const dispatch = useDispatch()
  const [value, setValue]=useState(0)
  const navigate = useNavigate()
  const logOutHandler = () => {
    dispatch(logOutUser())
    navigate("/")
  }
  const changeHandler = (e) => {
    e.target.value < 0 ? e.target.value = 0 : e.target.value > 8 ? e.target.value = 8 : setValue(e.target.value)
  }
  
  const saveHandler = async (e) => {
    e.preventDefault()
    dispatch(lengthEdit(parseInt(value)))
    await setDoc(doc(db, "TableLength", "length"), { data: parseInt(value) });
  }

  return (
    <div className='flex z-10 px-10 md:px-16 items-center justify-between sticky top-0 h-[40px] md:h-[50px] bg-[rgba(255,255,255,.7)] shadow-md backdrop-blur-sm'>
      <h1 className=' font-bold text-cyan-700 text-2xl'>ЭМБ Дастур</h1>
      <form action="">
        <input 
        style={{width: "160px"}}
        value={value}
        placeholder='Qatlam qalinligi (m)'
        className='border-[1px] h-[30px] text-sm border-slate-400 px-2 focus:outline-0 focus:ring-2 ml-2 rounded-l-md'
        type="number" 
          onChange={changeHandler} />
        <button
          className='h-[30px] rounded-r-md bg-cyan-700 text-medium text-white px-2'
          onClick={saveHandler}>Save</button>
      </form>
      <div className="flex items-center gap-3 relative">
        <Button
          onClick={logOutHandler}
          className={`text-red-400 ${hidden ? "hidden" : ""} rounded-xl px-2 bg-[rgba(0,0,0,0.1)] absolute top-12 -right-5`}>
          Log Out
        </Button>
        <p className="text-md">UserName</p>
        <box-icon 
          onClick={()=> setHidden(!hidden)} 
          className="relative text-red-600" 
          name='user-circle' 
          animation='tada-hover' 
          type='solid' 
          color="rgb(107, 107, 107)" 
          size="md"></box-icon>
      </div>
    </div>
  )
}

export default Navbar