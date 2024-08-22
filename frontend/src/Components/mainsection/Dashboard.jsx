import React from 'react'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faFilter } from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {
  return (
    <div className='dashboard'>
    <div className='sidebar'>
      <div>
        <a href=''><FontAwesomeIcon icon={faBars} /> Overview</a>
        </div>
        <div>
        <a href=''><FontAwesomeIcon icon={faBars} />People Directory</a>
        
      </div>

    </div>
    <div className='main'>
    <div className='headsection'>
    <div className='leftsection'>
    <h4>Team Members</h4>
    <h4><span>100</span>Users</h4>
    </div>
      <div className='rightsection'>
        <input placeholder='Serach' className='searchinput'/>
          <span><FontAwesomeIcon icon={faFilter} /></span>
        <button className='btn'>Add New User</button>
      </div>

    </div>
      
    </div>
        
    </div>
  )
}

export default Dashboard