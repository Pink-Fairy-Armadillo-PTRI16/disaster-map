import React from 'react';
import { Link } from 'react-router-dom'
import LoginModal from "./LoginModal.jsx";

const Header = () => {
    
    return (
        <div className='navBar'>
        <ul id='nav'>
            <li><Link to='/submit'>Submit</Link></li>
            <li><Link to='/gethelp'>Get Help</Link></li>
            <li><LoginModal /></li>
        </ul>
        </div>
    )
}
export default Header;