import React from 'react'
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './navbar.scss';
import Logo from "../../assets/Kmg.png"
import { FaArrowRight } from "react-icons/fa";



const Navbar = () => {

    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };


    return (
        
        <>

        <div className="row b-g-all fixed-top pt-3">
            <div className='bg-all'>
            <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid navbar-flex">
                <a className="navbar-brand" href="#"><img src={Logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <ul className="navbar-nav flex-grow-1 justify-content-end">
                            {/* set useState styling=nav-item-1 if each links onClick set 'active' else remove active  */}
                                <li className={`nav-item-1 ${activeLink === 'Home' ? 'active' : ''}`}>
                                    <Link className='link' to="/" onClick={() => handleLinkClick('Home')}>Home</Link>
                                </li>
                                <li className={`nav-item-1 ${activeLink === 'About' ? 'active' : ''}`}>
                                    <Link className='link' to="/About" onClick={() => handleLinkClick('About')}>About</Link>
                                </li>
                                <li className={`nav-item-1 ${activeLink === '{Projects}' ? 'active' : ''}`}>
                                    <Link className='link' to="/Projects" onClick={() => handleLinkClick('Projects')}>Projects</Link>
                                </li>
                                {/* <li className={`nav-item-1 ${activeLink === 'Form' ? 'active' : ''}`}>
                                    <Link className='link' to="/Form" onClick={() => handleLinkClick('Form')}>Download CV</Link>
                                </li> */}
                                {/* <li className={`nav-item-1 ${activeLink === 'Footer' ? 'active' : ''}`}>
                                    <Link className='link' to="/Footer" onClick={() => handleLinkClick('Footer')}>Contact</Link>
                                </li> */}
                                <div>
                                    <span className='nav-item-2'>Resume</span>
                                </div>
                                <div>
                                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDDDfxMsltMgwtRvxjdxMJZrPWSRcnTzbqrkFbJgWDBDKTPVfvsVRbpRlTxhhkxJCNBDvf">
                                        

                                        <button className='nav-btn'>Let's talk <FaArrowRight size={15}/></button>
                                    </a>
                                    
                                </div>
                    </ul>
                    
                </div>
            </div>
            </nav>
            </div>
        
        </div>
        
        
        
        
        
        </>
        
        
    )
}

export default Navbar
