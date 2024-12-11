import React from 'react'
import { FaStarOfDavid } from "react-icons/fa";
import './Header.css'

const Header = () => {
  return (
    <div className='navBar'>
        <div className='header'>
            <div className='headerLogo'>
                <p><FaStarOfDavid/></p>
                <h2>MyApp</h2>
            </div>
            <div className='headerText'>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Pricing</p>
            </div>
            <div className='headerButton'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Header