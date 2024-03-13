import React, { useState } from 'react'
import Input from '../UI/input'
import { useDispatch } from 'react-redux'
import { signUserStart, signUserSuccess } from '../Reducer/auth'
import { useNavigate } from 'react-router-dom'
import Button from '../UI/button'

function Auth() {
    const [value,setValue]=useState({login: "", password: ""})
    const dispatch = useDispatch()
    const navigate= useNavigate()

    const signInHandler =async (e) => {
        e.preventDefault()
        dispatch(signUserStart())
        try {
            dispatch(signUserSuccess())
        } catch (error) {
            console.log(error);
        }
    }

  return (
      <div className='flex h-[100vh] justify-center items-center'>    
          <form action="" className='shadow-2xl p-4 py-3 rounded-lg lg:w-1/4 w-[60%] md:w-1/3 flex flex-col gap-2'>
            <p className="text-3xl font-bold text-yellow-600 relative text-center py-3">SignIn</p> 
            <Input 
                placeholder={"login..."}
                type={"text"}
                className={"text-gray-800 focus:ring-2 w-full"}
                value={value.login}
                onchange={(e)=> setValue({...value,login: e.target.value})}
                />
            <Input 
                placeholder={"password..."}
                type={"password"}
                className={"text-gray-800 focus:ring-2 w-full"}
                value={value.password}
                onchange={(e)=> setValue({...value,password: e.target.value})}
              />
        <Button
          className={"bg-blue-500 text-white font-medium rounded-md mt-4"}
          onClick={signInHandler}
        >
          SignIn
        </Button>
        </form>
    </div>
  )
}

export default Auth