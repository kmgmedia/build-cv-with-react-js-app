import React from 'react'
import { Link } from "react-router-dom";
import './about.scss';
import { Heroimage } from "../../assets";
import { Heylogo } from "../../assets";
import { Backgroundpattern, Morufadebolaimage, Believephone, Believeimage } from "../../assets";
import { FaArrowRight } from "react-icons/fa";
import Card from '../Card/Card';
import Resume from '../Resume/Resume';



const About = () => {
    return (

    <>
        
        <div className="row about-1 url" style={{backgroundImage: `url(${Backgroundpattern})`}}>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <div className='aboutme2'>
                        <h4>ABOUT ME</h4>
                        <span className="line"></span>
                        <div data-aos='zoom-in'>
                            <p>
                            Here you will find more information about me, what i do, and my current <br />
                            skills mostly in terms of design and Technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="row pt-5">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
            <div data-aos='fade-right' className='get-to-knowme-text'>
            <h5>Get to know me!</h5>
            <div>
                <p>
                I’m a <span className='more-bold-body'>Product Designer</span> with deep passion for innovative designs, that <br />
                leads/play a crucial role in shaping the future by creating digital <br />
                experiences for diverse clientele. I have successfully collaborated <br />
                with private sectors and organizations. </p>
                <p>My dedication has led to great
                success in the <span className='more-bold-body'>Design Industry,</span> and I <br />can always eager to expand my knowledge
                to create stunning <br /> designs.</p>
                <p>
                When I’m not working, I love to <span className='more-bold-body'>see new places</span>, I continues to learn <br />and
                explore new technologies like NFT, Animations to enhance my <br /> impressive <span className='more-bold-body'>portfolio.</span> <br />
                </p>
                <p>I’m open to <span className='more-bold-body'>Job</span> opportunities where i can contribute, learn and grow. <br />
                If you have any opportunity that matches my skills and experience, <br /> then don’t hesitate to <span className='more-bold-body'>contact me.</span></p>
            </div>
            </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5">
            <div data-aos='fade-left' className='skills-text'>
            <h5>My Skills</h5>
            <div className='skills-list'>
                <p className='skills-list-1'>Figma</p>
                <p className='skills-list-1'>Adobe XD</p>
                <p className='skills-list-1'>Prototyping</p>
                <p className='skills-list-1'>ProtoPie</p>
            </div>
            <div className='skills-list'>
            <p className='skills-list-1'>UX Research</p>
                <p className='skills-list-1'>FigJam</p>
                <p className='skills-list-1'>User Experience Writing</p>
            </div>
            <div className='skills-list'>
            <p className='skills-list-1'>Adobe Protoshop</p>
                <p className='skills-list-1'>Illustration</p>
                <p className='skills-list-1'>Adobe Indesign</p>
            </div>
            </div>

            <div data-aos='fade-left' className='skills-text'>
            <h5>Other Skills</h5>
            <div className='skills-list'>
                <p className='skills-list-1'>JavaScript</p>
                <p className='skills-list-1'>Bootstrap</p>
                <p className='skills-list-1'>HTML</p>
                <p className='skills-list-1'>SASS</p>
                <p className='skills-list-1'>Github</p>

            </div>
            <div className='skills-list'>
            <p className='skills-list-1'>Mongo DB</p>
                <p className='skills-list-1'>React JS</p>
                <p className='skills-list-1'>Vercel</p>
                <p className='skills-list-1'>GIT</p>
                <p className='skills-list-1'>Tailwind</p>

            </div>
            <div className='skills-list'>
            <p className='skills-list-1'>Node JS</p>
                <p className='skills-list-1'>Agile</p>
                <p className='skills-list-1'>Postman</p>
                <p className='skills-list-1'>SQL</p>
                <p className='skills-list-1'>CSS</p>
                <p className='skills-list-1'>SEO</p>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
        </div>

        <div className="row about-1 ">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
            </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
        <div>
            <div className='hiremm-2 pb-5'>
                <h5 className='hiremm2'>Hire Me For Your Next Project</h5>
            </div>
        </div>


    <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="row pt-5">
            <div class="col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-sm-12 col-md-12 col-lg-10">
                <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-6">
                    <div data-aos='fade-right' className='get-to-knowme-text pt-4'>
                        <p>
                        <span className='more-bold-body'>💛  Passion is everything.</span> <br />
                        I found that because I enjoy what I do, I have the drive and initiative
                        to pour my heart into the things I believe in. I push for boundless
                        creativity and to join other passionate people to make the world a happier place.
                        </p>
                        <p>
                        <span className='more-bold-body'>📒  Never stop learning.</span> <br />
                        I am always seeking challenges to continually develop myself, such as participating
                        in competitions, collaborating on projects, reading blogs, and involving myself in
                        the design community where I learn from others and also give back through mentorship
                        and sharing my experiences and skills.
                        </p>
                        <p>
                        <span className='more-bold-body'>✊  Embrace the journey.</span> <br />
                        Embrace the learning curves and failures and discomfort. Open your mind and let
                        curiosity and optimism drive you. Believe in yourself, and also have fun along the way.
                        </p>
                        <p>
                        <span className='more-bold-body'>😊  Be human.</span> <br />
                        Empathy and kindness go a long way. Share our knowledge and take time to understand
                        different perspectives. Build towards a culture of inclusion and respect, and stay true
                        to yourself and to others.
                        </p>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5">
                    <div data-aos='fade-left' className=''>
                        <div>
                            <div className='knowimg'>
                                <img src= {Morufadebolaimage} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div>

    <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="row pt-5">
            <div class="col-sm-12 col-md-12 col-lg-1"></div>
                <div class="col-sm-12 col-md-12 col-lg-10">
                    <div class="row believe-group">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                            <div>
                                <div className='knowimg2'>
                                    <img src= {Believephone} alt="" />
                                </div>
                            </div>
                    </div>

                    <div class="col-sm-12 col-md-12 col-lg-6">
                            <div>
                                <div className='knowimg2'>
                                    <img src= {Believeimage} alt="" />
                                </div>
                            </div>
                    </div>
                    
                </div>

                
            </div>

            
            
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div>

    <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
            <div className='projectme'>
                <div>
                    <h4>My Services</h4>
                    <span className="line"></span>
                </div>
                {/* <div className='illustration'>Illustration</div> */}
            
            </div>
            <div data-aos='zoom-in' className='service-intro'>
                <p>
                Elevating your brand through expert UI/UX Design, Web <br/>
                Development, and Mobile App Creation.</p>
            </div>
            </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
        <div className='pb-2'>
        <Card/>
        </div>
        <div className='pb-5'>
        <Resume/>
        </div>
        
    </>
    
    )
}

export default About
