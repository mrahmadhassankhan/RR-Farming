// Header.js

import React, { useState } from 'react';
import CSS from './Header.module.css';
import { Link } from 'react-router-dom';
import RR_Logo from '../../images/RR192.png';
import Login from '../../pages/Login/Login'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleLoginPopup = () => {
        setShowLoginPopup(!showLoginPopup);
    };

    return (
        <header className={CSS.header}>
            <div className={CSS.navBar}>
                <div className={CSS.logos}>
                    <Link className={CSS.logo} to={'/'}>
                        <img className={CSS['RR-logo']} src={RR_Logo} alt='RR Farming' />
                    </Link>
                </div>
                <ul className={CSS.links}>
                    <li className={CSS.items}><Link className={`${CSS.navItem} ${CSS.active}`} to={'/'}>Home</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to={'/category'}>Categories</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to={'/contact'}>Contact</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to={'/aboutus'}>About</Link></li>
                </ul>
                <div className={CSS['cart-login-container']}>
                    {/* <Link to={'/checkout'} className={CSS.action_btn}>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Link> */}
                    <div className={CSS.action_btn} onClick={toggleLoginPopup}>
                        <i className="fa-solid fa-user"></i>
                    </div>
                </div>
                <div className={CSS.toggle_btn} onClick={toggleMenu}>
                    <i className={isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
                </div>
            </div>
            <div className={`${CSS.dropdown_menu} ${isOpen ? CSS.open : ''}`}>
                <li className={CSS.items}><Link className={`${CSS.navItem} ${CSS.active}`} to={'/'}>Home</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to={'/category'}>Categories</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to={'/contact'}>Contact</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to={'/aboutus'}>About</Link></li>
                <li onClick={toggleLoginPopup} className={CSS.items}><Link  className={CSS.action_btn} >Login</Link></li>
            </div>
            {showLoginPopup && (
                <div className={CSS.login_popup}>
                    <Login />
                    <div className={CSS.close_popup} onClick={toggleLoginPopup}>
                        <span className={CSS.close_popup_btn}>&times;</span>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
