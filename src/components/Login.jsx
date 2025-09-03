import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);

    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg' alt='background'/>
        </div>
        <form className='absolute p-12 
        bg-black/80 text-white w-3/12 my-36 mx-auto left-0 right-0'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder='Full Name' className='p-2.5 my-4 bg-gray-700 w-full'/>}
            {!isSignInForm && <input type="number" placeholder='Contact Number' className='p-2.5 my-4 bg-gray-700 w-full'/>}
            
            <input type="text" placeholder='Email Address'className='p-2.5 my-4 bg-gray-700 w-full'/>
            <input type="password" placeholder='Password' className='p-2.5 my-4 bg-gray-700 w-full' />
            <button className='p-2 my-6 bg-red-700 w-full rounded-lg '> {isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer'  onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
        </form>
    </div>
  ) 
}

export default Login