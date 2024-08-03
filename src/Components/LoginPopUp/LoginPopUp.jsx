import { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowPopUp}) => {
  const [currentForm,setCurrentForm] =useState('Sign Up') 
  return (
    <>
  <div className="login-popup">
    <form action="" className="login-popup-container">
      <div className="login-popup-title">
        <h2>{currentForm}</h2>
        <button onClick={()=>setShowPopUp(false)} className='cross-btn' >X</button>
      </div>

      {/* all the inpiuts will come */}
      <div className="login-inputs">
   {currentForm==='Login' ? <></> :  <input type="text" placeholder='Enter your name' required />}
        <input type="email" placeholder='Enter your email' required />
        <input type="password" placeholder='Enter your password' required />
      </div>
      <button className='condition-btn'>{currentForm==='Sign Up' ? "create Auccont" :'Login' }</button>
      <div className="login-popup-condition">
        <input type="checkbox" required/>
        <p>by contuning, i agree the terms of use & privacy policy</p>
      </div>
      {currentForm==='Login'?
       <p>Create a new account ? <span onClick={()=> setCurrentForm('Sign Up')} className='mini-links'>Click Here</span></p>
        :<p>Already have an account ? <span onClick={()=> setCurrentForm('Login')} className='mini-links'>Login</span></p>
    }
      
    </form>
  </div>
    </>
  )
}

export default LoginPopUp