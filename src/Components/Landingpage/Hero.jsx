    import React from 'react'
    import { useEffect, useState } from "react";
    import './hero.scss';
    import {Heroimage, Backgroundpattern, Rectangle1029, Ellipse1104, Ellipse1105, Ellipse1106} from "../../assets";
    import { Heylogo } from "../../assets";
    import { FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";
    
    // aos animation library
    
    import Aos from "aos";
    import 'aos/dist/aos.css'

const Hero = () => {
    const [toggle, setToggle] = useState(false);
    useEffect(()=>{
        Aos.init({duration:1000, delay:500, easing: "linear"})
    },[])

    const clickHandler =
    () => console.log('mouse over')

    return (
        <>
        <div className=" body row" style={{backgroundImage: `url(${Backgroundpattern})`}}>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-7">
                    <div className='hey-session'>
                        <img data-aos='zoom-in-down'src= {Heylogo} alt="" />
                        <div className='hero-text'>
                        <h1>I’m <span className='minename'>Moruf</span>, <br/> Product Designer / <br /> Full-Stack Developer</h1>
                    </div>
                    <div data-aos= "zoom-in" className='hero-p'>
                        <p>A product designer with years of experience, currently <br/>
                        shaping in coding the future, building digital worlds products <br/>
                            within energetic and dynamic cross-functional settings.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="st-btn">
                    <button className='portfolio'>Projects</button>
                    <button className='hireme'>Hire me</button>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <div data-aos='fade-left' data-aos-delay="500" className='hero-image'>
                        <img src= {Heroimage} alt="" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5">
                <div className='all-ellipse'>
                    {/* <img src={Rectangle1029} alt="" /> */}
                    <img src={Ellipse1106} alt="" />
                    <img src={Ellipse1104} alt="" />
                    <img src={Ellipse1105} alt="" />
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>




        <div className="row all-this-site">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-7">
                <div data-aos='fade-up' className='hero-image-text'>
                        <p>This site is <span className='boldpart-1'>Part portfolio,</span> <span className='boldpart-2'>Part hand crafted works,</span> Full work in progress. <br />
                        To learn more about current projects and get InTouch, hit the link below.
                        </p>
                        <div className='icons-all'>
                        <p><FaLinkedin/>LinkedIn, <FaBehance/>Behance, <FaGithub/>GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        
        </>
    )
    }

    export default Hero
