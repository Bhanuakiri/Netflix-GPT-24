import React, { useState,useRef } from 'react';
import Header from './Header';
import { validData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { Background_IMG } from '../utils/constants';

const Login = () => {
  const[isSignForm,setSignForm] = useState(true);
  const[errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);


  const submitHandler =(event)=>{
    event.preventDefault();
      const message = validData(email.current.value,password.current.value);
      setErrorMessage(message);
      if(message) return ;

      if(!isSignForm){
   createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://i.pinimg.com/originals/06/63/ee/0663eeacca54ae7ca42e17acbb369b32.png"
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    }).catch((error) => {
      // An error occurred
      setErrorMessage(errorMessage);
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
      }
      else{
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => { 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage );
        });
      
      }

  };

  const toggleSignin = () =>{
      setSignForm(!isSignForm);
  };

  return (
    <div>
    <Header/>
    <div className='absolute'>
     <img src={Background_IMG} alt='bg'/>
    </div>
     <form className='w-3/12 absolute p-12 my-36 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
     <h1 className='font-bold text-3xl '>{isSignForm ? 'Sign in' : 'Sign up'}</h1>
     {!isSignForm && (<input ref={name} type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>)}
     <input ref={email} type='text' placeholder='Email or Phone Number' className='p-2 my-4 w-full bg-gray-700'/>
     <input ref={password} type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700'/>
     <p className='text-red-500  text-lg py-2'>{errorMessage}</p>
     <button className='p-3 my-4 bg-red-700 w-full rounded-lg' onClick={submitHandler} >{isSignForm ? 'Sign In' : 'Sign Up'}</button>
     <p className='py-6 cursor-pointer'onClick={toggleSignin}>{isSignForm ? 'New to Netflix? Sign up Now' : 'Already a Member  Sign in Now'}</p>
     </form>
    </div>
  )
}

export default Login
