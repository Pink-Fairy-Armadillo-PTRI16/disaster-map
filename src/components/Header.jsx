import React from 'react';
import { Route, Link } from 'react-router-dom'
import LoginModal from "./LoginModal.jsx";

const Header = () => {
    
    return (
        <div className='navBar'>
        <ul id='nav'>
            <button><Link to='/submit' className='submit-btn'>Submit</Link></button>
            <button><Link to='/gethelp' path='/getgelp' className='get-help-btn'>Get Help</Link></button>
            
            <LoginModal />
        </ul>
        </div>
    )
}
export default Header;