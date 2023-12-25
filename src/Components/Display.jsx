import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Hero from './Landingpage/Hero';
import About from './About/About';
import Footer from './Footer/Footer';




    const Display = () => {
    return (
        <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Footer/>

        </div>
    )
}

export default Display
