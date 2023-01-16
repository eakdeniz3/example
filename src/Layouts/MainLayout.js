import React,{useEffect} from 'react'
import {  useSelector } from 'react-redux'
import{ useNavigate,Navigate } from 'react-router-dom';
import { 
    MainHeader
  } from '../global';


function MainLayout({children}) {
    const { userInfo } = useSelector((state) => state.auth);
const navigate=useNavigate();
   if(!userInfo){
    return(
        
    <Navigate to="/login"></Navigate>);
}
  return (
    <>
    <MainHeader/>
    <main className='container content'>
{children}
    </main>
    </>
  )
}

export default MainLayout