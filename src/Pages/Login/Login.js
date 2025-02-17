import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import useAuth from '../../Hook/UseAuth';
import img from '../../Images/google.png'
import {
    
    faGoogle,
    faFacebook,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './Login.css'
const Login = () => {

    const [loginFromData , setLoginFromData] = useState()
    const { user,loginUser,authError,googleSignIn ,isLoading,handleFacebookSingIn, githubsignIn} = useAuth()
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(field, value)
        const newLogindata = {...loginFromData}
        newLogindata[field] = value
        console.log(newLogindata)
        setLoginFromData(newLogindata)

    }

    const handleLoginSubmit = e => {
        loginUser(loginFromData.email, loginFromData.password,location,navigate)
        e.preventDefault()
    }
    const handleGoogleSingin= () => {
        googleSignIn(location,navigate)
    }
    const facebookLogin = () => {
        handleFacebookSingIn()
    }
    const handleGithub = () => {
        githubsignIn()

    }


    return (
       <div className='main-section'>
           <div className='bg-img'></div>
           <div className='login-main'>
               <form onSubmit={handleLoginSubmit} action="" className='login'>
               <Typewriter

options={{
    strings: [
        "Ready to sign in",
       
    ],

    autoStart: true,
    loop: true,
    delay: 20,
}}
/>
              
                  {/* <input 
                  type="text"
                   name="name"
                    id="name"
                     placeholder='User name'
                      className='user-text' 
                      onBlur={handleOnBlur}
                      required
                      
                      /> */}
                      <label   htmlFor="">
                          
                    <input 
                        type="email"
                         name="email" 
                         id="email" 
                         label="email"
                          placeholder='User email' 
                          className='user-text'
                          onBlur={handleOnBlur}
                    
                          required />
                          </label>

                    <input 
                        type="password" 
                        name="password"
                         id=""  placeholder='password' className='user-text' 
                         label='password'
                         onBlur={handleOnBlur}
                         required/>
                         

                    <input type="submit" className='login-button' value="login" />
                    <p>Don't have a account? </p> 
                    <NavLink style={{color:'saddlebrown', textDecoration:'none'}} as={Link} to='/register'   >please Registered !</NavLink> <br />
                   <button className='login-icon' onClick={handleGoogleSingin}><FontAwesomeIcon  icon={faGoogle} /> </button>
                   <button className='login-icon' onClick={facebookLogin}><FontAwesomeIcon  icon={faFacebook} /></button>
                   <button className='login-icon' onClick={handleGithub} ><FontAwesomeIcon  icon={faGithub} /></button>
                   
                   
               </form>
           </div>
           
        </div>
    );
};

export default Login;