import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import{createBrowserRouter} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adduser, removeuser } from '../utils/userSlice';


const Body = () => {
  const dispatch=useDispatch();
    const appRoute= createBrowserRouter(
      [
        {
          path:"/",
          element:<Login/>
        },
        {
          path:"/browse",
          element:<Browse/>
        }
      ]
    )
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) 
        {
          const {uid,email,displayName,photoURL} = user;
          dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        } 
        else 
        {
          dispatch(removeuser());
        }
      });
      
    },[]);
  return (
    <div>
        <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body