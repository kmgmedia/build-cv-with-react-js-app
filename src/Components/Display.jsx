import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Hero from './Landingpage/Hero';
import Kmgfoliobigpage from './Kmgfoliobigpage/Kmgfoliobigpage';
import Nexcentfoliobigpage from './Nexcentfoliobigpage/Nexcentfoliobigpage';
import Sicklefolio from './Sicklefolio/Sicklefolio';
import Smarthomefolio from './Smarthomefolio/Smarthomefolio';
import Bycfolio from './Bycfolio/Bycfolio';
import Pethomefolio from './Pethomefolio/Pethomefolio';
import About from './About/About';
import Projects from './Projects/Project';
import Form from './Form/Form';
import Footer from './Footer/Footer';





    const Display = () => {
    return (
        <div>
        <Navbar/>
        {/* <Hero/> */}
        <Kmgfoliobigpage/>
        {/* <Nexcentfoliobigpage/> */}
        {/* <Sicklefolio/> */}
        {/* <Smarthomefolio/> */}
        {/* <Bycfolio/> */}
        {/* <Pethomefolio/> */}



        {/* <About/> */}
        {/* <Projects/> */}
        <Form/>
        <Footer/>

        </div>
    )
}

export default Display
