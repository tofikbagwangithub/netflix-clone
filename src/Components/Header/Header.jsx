import React from 'react'
import logo from '../../logo.png';
import {Link} from 'react-router-dom';
import {ImSearch} from 'react-icons/im'


const Header = () => {
  return (
    <nav className='header'>

      <img src={logo} alt='logo'/>
    
        <ul>
          <li href="#"> Home </li>
          <li href="#"> TV Shows </li>
          <li href="#"> Movies </li>
          <li href="#"> New & Popular </li>
          <li href="#"> Recently Added </li>
          <li href="#"> My List </li>
          <li href="#"> Browse by Languages </li>
        </ul>
    

      <ImSearch/> 
      
      
      </nav>
  )
}

export default Header;