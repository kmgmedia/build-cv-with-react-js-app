import React from 'react'
import './footer.scss';
import { FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
    <>
        <div className="row footers">
            <div class="col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-sm-12 col-md-12 col-lg-10">
                <div className="row footer-bold-text">
                    <div data-aos='fade-right' data-aos-delay="200" class="col-sm-12 col-md-12 col-lg-5">
                    <span className="line2"></span>
                        <h3>MORUF ADEBOLA</h3>
                    <p>
                    A product designer with years of experience, currently
                    shaping in coding the future, building digital worlds
                    products within energetic and dynamic cross-functional
                    settings.
                    </p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>

                    <div  class="col-sm-12 col-md-12 col-lg-3">
                    <h5>Contact</h5>
                    <p>+234 915 096 2867</p>
                    <p>morufbadebola@gmail.com</p>
                    <p>hellokmgmedia@gmail.com</p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>

                    <div  class="col-sm-12 col-md-12 col-lg-2">
                    <div>
                    <h5>Social</h5>
                    <div className='all-social-icons'>
                    <p><span className='bbtn1'><FaLinkedin size={25}/></span>LinkedIn</p>
                    <p><span className='bbtn1'><FaBehance size={25}/></span>Behance</p>
                    <p><span className='bbtn1'><FaGithub size={25}/></span>GitHub</p>
                    </div>
                    </div>
                    </div>
                    <p>
                    Copyright© 2023 Moruf Adebola, All Rights reserved.
                    </p>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
    
    
    
    
    
    
    </>
    )
    }

export default Footer
