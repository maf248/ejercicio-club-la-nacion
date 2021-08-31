import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

function Navbar() {

    const [toggleNavbar, setToggleNavbar] = useState(true);

    const toggleButton = () => {
        toggleNavbar ? setToggleNavbar(false) : setToggleNavbar(true);
    };

    return (
            <nav className="navbar">
                <div className="navbar-top" onClick={toggleButton}>
                    <i className="fas fa-bars"></i> <h2 className={`navbar-top-title ${toggleNavbar ? 'toggle-navbar' : ''}`}>Ejercicio Club La Nación</h2>
                </div>
                <ul className={`nav-list ${toggleNavbar ? 'toggle-navbar' : ''}`}>
                    { MenuItems.map((item, index) => {
                        return (<li className={item.clases} key={`menuitem${index}`}>
                                <a href={item.url} target="_blank" rel="noreferrer"><i className={item.icon}></i> {item.title}</a>
                                </li>)
                    })}
                </ul>
            </nav>
        );
}
export default Navbar;