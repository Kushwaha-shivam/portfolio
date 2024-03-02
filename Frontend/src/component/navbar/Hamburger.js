import React, { useState } from 'react'
import { NavHashLink } from 'react-router-hash-link';
import './Hamburger.css'

const Hamburger = () => {
    // defining state for hamburger is open or not 
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <div className={`menu-items ${isOpen ? 'show' : ''}`}>
                <NavHashLink to="/">About</NavHashLink>
                <NavHashLink to="#skills">Skills</NavHashLink>
                <NavHashLink to="#projects">Projects</NavHashLink>
                <NavHashLink to="#contact">Contact Me</NavHashLink>
            </div>
        </>
    )
}

export default Hamburger
