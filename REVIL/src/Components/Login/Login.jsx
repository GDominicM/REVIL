import React from 'react';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

import './login.css';
import './login.scss';
// import '../../App.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className="container flex">
        <div className="videoDiv">
            <video src="/Landingassets/Gifforcode.mp4" autoPlay muted loop></video> 
          <div className="textDiv">
            <h2 className='title'>Revil: Resources for Video Learning</h2>
            <p>Hello Madlang People Mabuhay ^^</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Dont have an account?</span>
            <Link to={'/register'}>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
                <img src="/Landingassets/Screenshot__17_-removebg-preview.png" alt="Logo img" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className='form grid'>
            <span className='showMessage'>Login Status will go here</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input type="text" id='username' placeholder='Enter Username' />
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
              <span>Login</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <a href='/dashboard'>Dashboard</a>
            <span className='forgotPassword'>
              Forgot your password? <a href="none">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
