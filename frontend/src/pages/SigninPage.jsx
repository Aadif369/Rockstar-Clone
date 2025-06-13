import { Check } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SigninPage = () => {

  const [checked, setChecked] = useState(false)

  return (
    <div className='w-full bg-black'>

      <img src="logo.png" alt="" className='size-28 mt-14 ml-173'/>

      <div className='w-125 mt-5 ml-125 border-2 bg-white  border-white'>

        <h1 className='text-[#564e4e] mt-3 ml-5 font-semibold text-2xl'>Sign In</h1>
        
        
        <input
          placeholder='Email'
          name='Email'
          value={""}
          onChange={""}
          className='w-110 h-12 mt-4 ml-5 text-xl border-1 border-[#ece1e1]'
        />
        
        <input
          placeholder='Password'
          name='Password'
          value={""}
          onChange={""}
          className='w-110 h-12 mt-4 ml-5 text-xl border-1 border-[#ece1e1]'
        />

        <div className='flex mt-4 ml-4'>
        <div className='mr-5 w-5 h-5 border-2 border-gray-500 rounded 
            cursor-pointer'
            onClick={() => setChecked(!checked)}>
          {checked && <Check className='w-4 h-4 text-blue-900'/> }
        </div>
        <p>Keep me signed in</p>
        </div>

        <div className='flex items-center mb-6 mt-7 ml-5'>
            <Link to={"/forgot-password"} className='underline' >
              Forgot password?
            </Link>
            <button className='ml-60 py-1.5 px-3 bg-[#ffb100] text-black  font-bold rounded-md shadow-lg
            hover:bg-[#ffb300e9] transition duration-200 cursor-pointer'>

              <Link to={""}>Sign in</Link> 
        
            </button>
        </div>

        
        

      </div>

      



    </div>
    
    
  )
}

export default SigninPage