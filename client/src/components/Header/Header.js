import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css';

function Header () {
    return (
        <header className="header">
            <Navbar />
            <img src={process.env.PUBLIC_URL + 'club-la-nacion-logo.svg'} className="logo" alt="Logo Club La Nación" />
            <form className="search-navbar">
                <input type="text" placeholder="Busca un comercio..." className="search-commerce" />
                <input type="text" placeholder="Ingresa una ubicación..." className="search-location" />
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
            <div className="extra-navbar">
                <i className="far fa-bell" style={{color: 'white'}} />
                <i className="far fa-heart" style={{color: 'white'}} />
                <i className="fas fa-smile-beam" style={{color: '#fbba08'}} />
            </div>
        </header>
    )
}

export default Header;