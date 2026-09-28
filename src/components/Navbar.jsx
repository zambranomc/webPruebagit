import React from 'react'
import logo from '../assets/logo.png'



const Navbar = () => {
    return (
        <div className="navbar">
            <div className='logo'>
                <img src={ logo }  alt="" />
            </div>
        
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Get Started</button>
        </div>
    )
}

export default Navbar