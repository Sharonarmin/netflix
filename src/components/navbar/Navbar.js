import React from 'react'
import './navbar.css'
import logo from '../assets/Netflix_2015_logo.svg.png'
import avatar from '../assets/user.png'


function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="logo" />
        <img src={avatar} alt="avatar" className='avatar' />
    </div>
  )
}

export default Navbar
