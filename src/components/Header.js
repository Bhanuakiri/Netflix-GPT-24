import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeuser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const user =useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const onHandleSignOut =()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });

  };

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) 
      {
        const {uid,email,displayName,photoURL} = user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } 
      else 
      {
        dispatch(removeuser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[]);

  const handleGPTSearchClick =()=>{
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img className='w-44'
    src={LOGO}
    alt='Logo'
    />
    {user && (<div className='flex p-2'>
    <select onClick={handleLanguageChange} className='m-2 p-2 bg-gray-900 text-white rounded-md'>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
    </select>
    <button className='py-2 px-2 mx-4 my-2 bg-red-700 text-white rounded-lg'
     onClick={handleGPTSearchClick}>GPT Search</button>
     <img className='w-12 h-12' alt='usericon' src={user?.photoURL}/>
    <button onClick={onHandleSignOut} className='font-bold text-white'>(Sign out)</button>
    </div>)}
    </div>
    
  )
}

export default Header