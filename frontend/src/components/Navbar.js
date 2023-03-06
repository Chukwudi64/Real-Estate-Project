import React from "react";
import logo from '../image/logo2.jpg'
import { Link } from 'react-router-dom'


function Navbar() {
    let authUser = sessionStorage.getItem('user');
    console.log(authUser);
    if(authUser === 'USER'){
        return (
            <nav>
                <a href="/hello" to='/' className="logo">
                    <img src={logo} alt="logo" />
                </a>
                <label className="menu-icon" for='menu-btn' >
                    <span className="nav-icon">
    
                    </span>
                </label>
                <ul className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/property'>Property</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Logout'>Logout</Link></li>
                    <li><Link to='/Add'>Add</Link></li>
                    <li><Link to='/delete'>Delete</Link></li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav>
                <a href="/hello" to='/' className="logo">
                    <img src={logo} alt="logo" />
                </a>
                <label className="menu-icon" for='menu-btn' >
                    <span className="nav-icon">
    
                    </span>
                </label>
                <ul className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Register'>Signup</Link></li>
                    <li><Link to='/Login'>Login</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/About'>About</Link></li>
                </ul>
            </nav>
        )
    }
    
}
export default Navbar