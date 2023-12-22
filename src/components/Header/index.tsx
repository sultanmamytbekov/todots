import React from 'react';
import { NavLink } from 'react-router-dom';

const Header:React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <h1>LOGO</h1>
                    <nav>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/'>Bascet</NavLink>
                        <NavLink to='/'>Admin</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;