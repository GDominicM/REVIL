import React from 'react';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';

import './register.css';
import './register.scss';
// import '../../App.css';
// import '../../App.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='registerPage flex'>
     <div className="container flex">

      <div className="videoDiv">
       <video src="/Landingassets/Gifforcode.mp4" autoPlay muted loop></video> 

       <div className="textDiv">
        <h2 className='title'>Revil: Resources for Video Learning</h2>
        <p>Hello Madlang People Mabuhay ^^</p>
        </div>  

        <div className="footerDiv flex">
         <span className="text">Have an account?</span>
          <Link to={'/'}>
          <button className='btn'>Sign Up</button>
          </Link>
        </div> 
      </div>

      <div className="formDiv flex">
        <div className="headerDiv">
            <img src="/Landingassets/Screenshot__17_-removebg-preview.png" alt="Logo img" />
            <h3>Let Us Know You!</h3>
        </div>

        <form action="" className='form grid'>
            

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                 <MdMarkEmailRead className='icon' />
                 <input type="email" id='email' placeholder='Enter Email' /> 
                </div>  
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                 <BsFillShieldLockFill className='icon' />
                 <input type="password" id='password' placeholder='Enter Password' /> 
                </div>  
            </div>

            <button type='submit' className='btn flex'>
                <span>Register</span>
                <AiOutlineSwapRight className='icon'/>
            </button>

            <span className='forgotPassword'>
                Forgot your password? <a href="none">Click Here</a>

            </span>
         
        </form>
      </div>

     </div>
    </div>
  );
}

export default Register;
