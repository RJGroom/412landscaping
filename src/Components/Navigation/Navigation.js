import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </div>
    )
}

export default Navigation;