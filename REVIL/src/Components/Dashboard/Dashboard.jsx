// Dashboard.jsx

import React, { useEffect } from 'react';
import Sidebar from './SideBarSection/Sidebar';
import Body from './Body Section/Body';
import '../../App.css';

const Dashboard = () => {
  useEffect(() => {
    // Add the 'body-app' class to the body when the component mounts
    document.body.classList.add('body-app');

    // Remove the 'body-app' class when the component unmounts
    return () => {
      document.body.classList.remove('body-app');
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className='dashboard flex'>
      <div className='container dashboardContainerflex'>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Dashboard;
