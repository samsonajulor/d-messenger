import React from 'react';
import { LoggedInUserContext } from './context/login/context';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Chat from './Chat'

import './Dashboard.css'

const Dashboard = () => {

  return (
    <div className='dashboard'>
        <Navbar></Navbar>
      <div className='dashboard__body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
};

export default Dashboard;
