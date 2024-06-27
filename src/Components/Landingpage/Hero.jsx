import React, { useEffect, useState } from "react";
import './hero.scss';
import { Heroimage, Backgroundpattern, Rectangle1029, Heylogo } from "../../assets";
import { FaLinkedin, FaBehance, FaGithub, FaArrowUp, FaArrowAltCircleUp } from "react-icons/fa";
import { ArrowTop, FaceIcon } from '@radix-ui/react-icons';
import Aos from "aos";
import 'aos/dist/aos.css';

const Hero = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000, delay: 500, easing: "linear" });
    }, []);

    const clickHandler = () => console.log('mouse over');

    return (
        <div className='hero-section' style={{ backgroundImage: `url(${Backgroundpattern})` }}>
        <div className="container-fluid">
            <div className="row top">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
                <div className="row">
                <div className="col-lg-7 col-md-12">
                    <div className='hey'>
                    <img data-aos='zoom-in-down' src={Heylogo} alt="" />
                    </div>
                    <div className='hero-text'>
                    <h1>I’m <span className='minename b1'>Moruf</span>
                        <span className='minename b2'>Adebola,</span> <br />Product Designer</h1>
                    </div>

                    <div data-aos="zoom-in" className='hero-p'>
                    <p>A product designer with years of experience, currently <br />
                        shaping in coding the future, building digital worlds products <br />
                        within energetic and dynamic cross-functional settings.
                    </p>
                    </div>
                    <div className='st-btn'>
                    <button className='portfolio'>Projects <i></i></button>
                    <button className='hireme'>Hire me</button>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div data-aos='fade-left' data-aos-delay="500" className='hero-img1'>
                    <img src={Heroimage} alt="" />
                    </div>
                </div>
                </div>
                <div className="section-center">
                <div className="section-path">
                    <div className="globe">
                    <div className="wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-1"></div>
            </div>
            <div className="row all-this-site">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
                <div className="row">
                <div className="col-lg-7">
                    <div data-aos='fade-right' className='hero-image-text'>
                    <p>This site is <span className='boldpart-1'>Part portfolio,</span> <span className='boldpart-2'>Part hand crafted works,</span> Full work in progress. <br />
                        To learn more about current projects and get InTouch, hit the link below.</p>
                    <div className='icons-all'>
                        <p><FaLinkedin /> LinkedIn, <FaBehance /> Behance, <FaGithub /> GitHub</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-5"></div>
                </div>
            </div>
            <div className="col-lg-1"></div>
            </div>
        </div>
        </div>
    );
};

export default Hero;
