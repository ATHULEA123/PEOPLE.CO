import React from 'react'
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import userlogo from "../../assets/userlogo.jpg"
const Header = () => {
  return (
    <div className='header'>
    <div>
    <h1>PEOPLE.CO</h1>
    </div>
    <div>
   
    <div className='user'>
    <FontAwesomeIcon icon={faBell} />
        <img src={userlogo}/>
        <p>ATHUL EA</p>
    </div>
    </div>
   


    </div>
  )
}

export default Header