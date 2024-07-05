import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">My App</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/page1">Page 1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/page2">Page 2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/page3">Page 3</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
