import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content';
import Profile from './Components/Profile/Profile';


const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard-content">
        <Content />
      </div>
    </div>
  )
}

export default App;
