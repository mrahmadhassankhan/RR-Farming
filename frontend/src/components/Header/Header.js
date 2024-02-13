import React, { useState } from 'react';
import CSS from './Header.module.css';
import { Link } from 'react-router-dom';
import RR_Logo from '../../images/RR192.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={CSS.header}>
            <div className={CSS.navBar}>
                <div className={CSS.logos}>
                    <Link className={CSS.logo} to={'/'}><img className={CSS['RR-logo']} src={RR_Logo} alt='RR Farming'/></Link>
                </div>
                <ul className={CSS.links}>
                    <li className={CSS.items}><Link className={`${CSS.navItem} ${CSS.active}`} to={'/'}>Home</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to={'/category'}>Categories</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to={'/blog'}>Blog</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to={'/contact'}>Contact</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to={'/aboutus'}>About</Link></li>
                </ul>
                <div>
                   
                    <Link to={'/checkout'} className={CSS.action_btn}> <i className="fa-solid fa-cart-shopping"></i></Link>
                    <Link to={'/login'} className={CSS.action_btn}><i className="fa-solid fa-user"></i></Link>
                </div>

                <div className={CSS.toggle_btn} onClick={toggleMenu}>
                    <i className={isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
                </div>
            </div>
            <div className={`${CSS.dropdown_menu} ${isOpen ? CSS.open : ''}`}>
                <li className={CSS.items}><Link className={`${CSS.navItem} ${CSS.active}`} to={'/'}>Home</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to={'/category'}>Categories</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to={'/blog'}>Blog</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to={'/contact'}>Contact</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to={'/aboutus'}>About</Link></li>
                <li className={CSS.items}><Link className={CSS.action_btn} to={'/login'}>Login</Link></li>
            </div>
        </header>
    );
};

export default Header;
