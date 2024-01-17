    import React from 'react'
    import './hero.scss';
    import { Heroimage } from "../../assets";
    import { Heylogo } from "../../assets";
    import { FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <>
        <div className=" body row">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7">
                    <div className='hey-session '>
                        <img src= {Heylogo} alt="" />
                        <div className='hero-text'>
                        <h1>I’m <span className='minename'>Moruf</span>, <br/> Product Designer</h1>
                    </div>
                    </div>
                    <div className='hero-p'>
                        <p>A product designer with years of experience, currently <br/>
                        shaping in coding the future, building digital worlds products <br/>
                            within energetic and dynamic cross-functional settings.
                        </p>
                    </div>
                    <div className="col-sm-12 colnpm run dev
                    -md-12 col-lg-6">
                    <div className="st-btn">
                    <button className='portfolio'>Projects</button>
                    <button className='hireme'>Hire me</button>
                    </div>
                    </div>
                    
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5">
                    <div className='hero-image'>
                        <img src= {Heroimage} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>




        <div className="row all-this-site">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7">
                <div className='hero-image-text'>
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
        <div class="col-sm-12 col-md-12 col-lg-1"></div>




        
        </>
    )
    }

    export default Hero
