import React from 'react';

import './Footer.css';

function Footer (props) {
    return (
        <footer className="footer">
            <p className='footer-author'><i className='fab fa-react'/> Marcelo Angel Fanego </p>
            <p className='footer-data'><i class='fas fa-laptop-code'/> API: {props.data}</p>
        </footer>
    )
}

export default Footer;