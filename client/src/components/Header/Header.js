import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css';

function Header () {
    return (
        <header className="header">
            <Navbar />
            <img src={process.env.PUBLIC_URL + 'club-la-nacion-logo.svg'} className="logo" alt="Logo Club La Nación" />
        </header>
    )
}

export default Header;