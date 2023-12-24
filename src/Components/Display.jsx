import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Hero from './Landingpage/Hero';



    const Display = () => {
    return (
        <div>
        <Navbar/>
        <Hero/>
        </div>
    )
}

export default Display
