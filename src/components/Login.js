import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const[isSignForm,setSignForm] = useState(true);

  const toggleSignin = () =>{
      setSignForm(!isSignForm);
  };

  return (
    <div>
    <Header/>
    <div className='absolute'>
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg'/>
    </div>
     <form className='w-3/12 absolute p-12 my-36 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
     <h1 className='font-bold text-3xl '>{isSignForm ? 'Sign in' : 'Sign up'}</h1>
     {!isSignForm && (<input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>)}
     <input type='text' placeholder='Email or Phone Number' className='p-2 my-4 w-full bg-gray-700'/>
     <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700'/>
     <button className='p-3 my-4 bg-red-700 w-full rounded-lg' >{isSignForm ? 'Sign In' : 'Sign Up'}</button>
     <p className='py-6 cursor-pointer'onClick={toggleSignin}>{isSignForm ? 'New to Netflix? Sign up Now' : 'Already a Member  Sign in Now'}</p>
     </form>
    </div>
  )
}

export default Login
