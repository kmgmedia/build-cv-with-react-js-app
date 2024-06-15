    import React from 'react'
    import { useEffect, useState } from "react";
    import './hero.scss';
    import {Heroimage, Backgroundpattern, Rectangle1029, Ellipse1104, Ellipse1105, Ellipse1106} from "../../assets";
    import { Heylogo } from "../../assets";
    import { FaLinkedin, FaBehance, FaGithub, FaArrowUp, FaArrowAltCircleUp, } from "react-icons/fa";
    import { ArrowTop, FaceIcon, } from '@radix-ui/react-icons';

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
        <div className='' style={{backgroundImage: `url(${Backgroundpattern})`}}>
            <div class="container-fluid">
                <div class="row top-container">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <div class="row">
                            <div class="col-lg-7 col-md-12">
                                <div className='hey'>
                                    <img data-aos='zoom-in-down' src= {Heylogo} alt="" />
                                </div>
                                <div className='hero-text'>
                                    <h1>I’m <span className='minename b1 '>Moruf</span>
                                    <span className='minename b2'>Adebola,</span> <br/>Product Designer</h1>
                                </div>
                                
                                <div data-aos= "zoom-in" className='hero-p'>
                                    <p>A product designer with years of experience, currently <br/>
                                        shaping in coding the future, building digital worlds products <br/>
                                        within energetic and dynamic cross-functional settings.
                                    </p>
                                </div>
                                <div className='st-btn '>
                                    <button className='portfolio'>Projetcs <i></i></button>
                                    <button className='hireme'>Hire me</button>
                                </div>
                                
                                {/* <h1>I’m <span className='minename b1 '>Moruf</span>
                                <span className='minename b2'>Adebola,</span> <br/>Product Designer</h1> */}
                            </div>
                            <div class="col-lg-5 col-md-12">
                                <div data-aos='fade-left' data-aos-delay="500" className='hero-img1'>
                                    <img src= {Heroimage} alt="" />
                                </div>
                                
                                {/* <img src= {Heroimage} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-1"></div>
                <div className="row all-this-site">
                    <div className="col-sm-12 col-md-12 col-lg-1"></div>
                    <div className="col-sm-12 col-md-12 col-lg-11">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-7">
                                <div data-aos='fade-right' className='hero-image-text'>
                                    <p>This site is <span className='boldpart-1'>Part portfolio,</span> <span className='boldpart-2'>Part hand crafted works,</span> Full work in progress. <br />
                                    To learn more about current projects and get InTouch, hit the link below.</p>
                                <div className='icons-all'>
                                    <p><FaLinkedin/>LinkedIn, <FaBehance/>Behance, <FaGithub/>GitHub</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>


                
                {/* <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <div class="row">
                            <div class="col-lg-7 col-md-12">
                               <p>A product designer with years of experience, currently <br/>
                                shaping in coding the future, building digital worlds products <br/>
                                within energetic and dynamic cross-functional settings.
                                </p> 
                            </div>
                            <div class="col-lg-5 col-md-12">
                                {/* <p>A product designer with years of experience, currently <br/>
                                shaping in coding the future, building digital worlds products <br/>
                                within ergetic and dynamic cross-functional settings.
                            </p> *
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                </div> */}
            </div>
            

        </div>

        
    )
}

export default Hero
