import React from 'react';
import './header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="page-logo">
                <img src={logo} alt="" />
            </div>
            <div className='menu'>
                <a href="#home">Home</a>
                <a href="#items">Items</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#help">Help</a>
            </div>
        </div>
    );
};

export default Header;