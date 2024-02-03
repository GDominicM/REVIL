  import React, { useState } from 'react';

  import './style.css';
  import logo from './images/logo.png';

  
  function Sidebar() {

    return (
      <div className='bg-white sidebar p-2' >
        <div className='m-2'>
          <i className=' me-3 fs-4'> </i>
          <div>
            <span className='brand-name fs-3 me-3'>
              <img src={logo} alt='Logo' className='logo-image' /> Revil
            </span>
          </div>
        </div>

        <hr className='text-dark' />

      
        <div className='list-group list-group-flush'>
          <div to="/dashboard" className='list-group-item py-2'>
            <i className='bi bi-speedometer2 fs-5 me-3'></i>
            <span className='fs-5'>Instructor Dashboard</span>
          </div> 

          
            <a className='list-group-item list-group-item-action my-2'>
              <i className='bi bi-table fs- me-3'></i>
              <span className='fs-5'>Video list</span>
            </a>
          

          
            <a className='list-group-item py-2'>
            <i className='bi bi-clipboard-data fs-5 me-3'></i>
              <span className='fs-5'>Report</span>
            </a>
          
            <a className='list-group-item list-group-item-action my-2'>
              <i className='bi bi-power fs-5 me-3'></i>
              <span className='fs-5'>Logout</span>
            </a>
          
        </div>

      
          </div>
        )}
      
    


  export default Sidebar;
