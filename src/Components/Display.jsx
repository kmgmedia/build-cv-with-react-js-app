import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Hero from './Landingpage/Hero';
// import About from './About/About';
import Projects from './Projects/Project';
import Form from './Form/Form';
import Footer from './Footer/Footer';





    const Display = () => {
    return (
        <div>
        <Navbar/>
        <Hero/>
        {/* <About/> */}
        <Projects/>
        <Form/>
        <Footer/>

        </div>
    )
}

export default Display
