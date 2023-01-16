import React,{useState,useEffect} from 'react'
import{ useNavigate } from 'react-router-dom';
import '../App.css';
import loginImage from '../images/draw2.jpg';
import { useDispatch, useSelector } from 'react-redux'
import  { login,register,switcLogin } from '../Auth/auth'


function Login() {
  const { loading, userInfo, error, success,isLogin,message } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  useEffect(() => {
    if (userInfo){ 
      navigate('/')}
  }, [userInfo])
  useEffect(() => {
    if (success){  
      navigate('/')}
  }, [navigate, success])
  return (
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src={loginImage } className="img-fluid" alt="Sample image"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

          {
          error && 
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>{error}</strong>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
}
{
          message && 
          <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{message}</strong>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
}
{isLogin &&<LoginPanel/>}
{!isLogin &&<RegisterPanel/>}
        </div>
      </div>
    </div>
    <div
      className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>
    </div>
  </section>
  )
}

export default Login

const LoginPanel=()=>{
  const [email,setEmail]= useState("aa@aa.com");
const [password,setPassword]= useState("1234");
const dispatch=useDispatch();
const { loading, userInfo, error, success,isAuthenticated } = useSelector((state) => state.auth);


return(
  <form>
  <div className="form-outline mb-4">
    <input value={email} type="email" id="form3Example3" className="form-control form-control-lg"
      placeholder="Enter a valid email address" onChange={(s,e)=>{
        console.log(email)
        setEmail(s.target.value);
      }} />
    <label className="form-label" >Email address</label>
  </div>

  <div className="form-outline mb-3">
    <input value={password} type="password" id="form3Example4" className="form-control form-control-lg"
      placeholder="Enter password" onChange={(s,es)=>{
        setPassword(s.target.value);
      }} />
    <label className="form-label" >Password</label>
  </div>



  <div className="text-center text-lg-start mt-4 pt-2">
    <button type="button" className="btn btn-primary btn-lg"
      style={{paddingLefteft: 2.5+"rem", paddingRight:2.5+"rem"}} onClick={()=>{
        console.log(email)
        dispatch(login({email,password}));

      }}>Login 
      {loading&&<div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>}
      </button>
    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a 
        className="link-danger" onClick={()=>{
          dispatch(switcLogin());
        }}>Register</a></p>
  </div>

</form>

);


}

const RegisterPanel=()=>{
  const [email,setEmail]= useState();
const [password,setPassword]= useState();
const [confirmPassword,setConfirmPassword]= useState();
const dispatch=useDispatch();
const { loading, userInfo, error, success,isAuthenticated } = useSelector((state) => state.auth);

return(
  <form>
  <div className="form-outline mb-4">
    <input value={email} type="email" id="form3Example3" className="form-control form-control-lg"
      placeholder="Enter a valid email address" onChange={(s,e)=>{
        console.log(email)
        setEmail(s.target.value);
      }} />
    <label className="form-label" >Email address</label>
  </div>

  <div className="form-outline mb-3">
    <input value={password} type="password" id="form3Example4" className="form-control form-control-lg"
      placeholder="Enter password" onChange={(s,es)=>{
        setPassword(s.target.value);
      }} />
    <label className="form-label" >Password</label>
  </div>
  <div className="form-outline mb-3">
    <input value={confirmPassword} type="password" id="form3Example4" className="form-control form-control-lg"
      placeholder="Enter password" onChange={(s,es)=>{
        setConfirmPassword(s.target.value);
      }} />
    <label className="form-label" >Confirm Password</label>
  </div>


  <div className="text-center text-lg-start mt-4 pt-2">
    <button type="button" className="btn btn-primary btn-lg"
      style={{paddingLefteft: 2.5+"rem", paddingRight:2.5+"rem"}} onClick={()=>{
        console.log(email)
        dispatch(register({email,password,confirmPassword}));

      }}>Register 
      {loading&&<div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>}
      </button>
    <p className="small fw-bold mt-2 pt-1 mb-0">Have an account? <a
        className="link-danger"  onClick={()=>{
          dispatch(switcLogin());
        }}>Login</a></p>
  </div>

</form>

);
}