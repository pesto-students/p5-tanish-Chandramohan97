// Header component for URL Shortener
import React from 'react';
import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <h3 className="logo"> Shortly</h3>  
            <ul className='left-items'>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
            </ul>

            <ul className='right-items'>

                <li><a href="#">Login</a></li>
                <li><a href="#">Sign up</a></li>
        
             </ul>

        </nav>
    );
}

export default Navbar;