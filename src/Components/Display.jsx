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
        <React.Fragment>
            <BrowserRouter>
            <Navbar />
            <Routes>
                
                <Route index element={<Hero />}/>
                <Route path='Projects' element={<Projects />}/>
                <Route path='About' element={<About />}/>
                <Route path='Form' element={<Form />}/>
                <Route path='Footer' element={<Footer />}/>
                
                
            </Routes>
            </BrowserRouter>
            {/* <Navbar/>
            <Hero/>
            <Projects/>
            <Form/>
            <Footer/> */}
        </React.Fragment>
    )
}

export default Display
