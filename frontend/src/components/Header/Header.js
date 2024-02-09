import React, { useState } from 'react';
import CSS from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={CSS.header}>
            <div className={CSS.navBar}>
                <div className={CSS.logos}>
                    <Link className={CSS.logo} to='/'>Farming Product</Link>
                </div>
                <ul className={CSS.links}>
                    <li className={CSS.items}><Link className={`${CSS.navItem} ${CSS.active}`} to=''>Home</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to=''>Categories</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to=''>Blog</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to=''>Contact</Link></li>
                    <li className={CSS.items}><Link className={CSS.navItem} to=''>About</Link></li>
                </ul>
                <Link to='/' className={CSS.action_btn}>Get Started</Link>
                <div className={CSS.toggle_btn} onClick={toggleMenu}>
                    <i className={isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
                </div>
            </div>
            <div className={`${CSS.dropdown_menu} ${isOpen ? CSS.open : ''}`}>
                <li className={CSS.items}><Link className={`${CSS.navItem} ${CSS.active}`} to=''>Home</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to=''>Categories</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to=''>Blog</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to=''>Contact</Link></li>
                <li className={CSS.items}><Link className={CSS.navItem} to=''>About</Link></li>
                <li className={CSS.items}><Link className={CSS.action_btn} to='/'>Get Started</Link></li>
            </div>
        </header>
    );
};

export default Header;
