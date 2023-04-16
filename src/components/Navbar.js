import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="logo">
                <Link to="/">#VANLIFE</Link>
            </div>

            <div className="nav__menu">
                <ul className="nav__list">
                    <li><Link to="/about" className="nav__link">About</Link></li>
                    <li><Link to="/vans" className="nav__link">Vans</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;