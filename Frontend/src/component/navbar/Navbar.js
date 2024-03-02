import React from 'react'
import "./Navbar.css";
import { NavHashLink } from 'react-router-hash-link';
import Hamburger from '../../component/navbar/Hamburger';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <p>PortFolio</p>
            </div>
            <ul className="nav-links">
                <li><NavHashLink to="/">About</NavHashLink></li>
                <li><NavHashLink to="#projects">Projects</NavHashLink></li>
                <li><NavHashLink to="#skills">Skills</NavHashLink></li>
                <li><NavHashLink to="#contact">Contact Me</NavHashLink></li>
            </ul>
            <Hamburger />
        </nav>
    )
}

export default Navbar
