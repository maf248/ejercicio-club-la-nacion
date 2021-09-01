import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

function Navbar() {

    const [toggleNavbar, setToggleNavbar] = useState(true);

    const toggleButton = () => {
        toggleNavbar ? setToggleNavbar(false) : setToggleNavbar(true);
    };

    return (
            <nav className={`navbar ${toggleNavbar ? 'hamburger-border' : ''}`}>
                <div className={`navbar-top ${toggleNavbar ? 'hamburger-transparent' : ''}`} onClick={toggleButton}>
                    <i className="fas fa-bars" style={{fontSize: '1.1rem'}}></i> <h2 className={`navbar-top-title ${toggleNavbar ? 'toggle-navbar' : ''}`}>Ejercicio Club La Nación</h2>
                </div>
                <ul className={`nav-list ${toggleNavbar ? 'toggle-navbar' : ''}`}>
                    { MenuItems.map((item, index) => {
                        return (<a href={item.url} key={`menuitem${index}`} target="_blank" rel="noreferrer">
                                    <li className={item.clases} >
                                        <i className={item.icon}></i> <span>{item.title}</span>
                                    </li>
                                </a>)
                    })}
                </ul>
            </nav>
        );
}
export default Navbar;