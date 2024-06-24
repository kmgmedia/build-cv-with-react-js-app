import React from 'react'
import './smarthomefolio.scss';
import { Phonesmarthombig, Backgroundpattern } from '../../assets';

const Smarthomefolio = () => {
    return (
        <>
        
        <div className="row about-big-1" style={{backgroundImage: `url(${Backgroundpattern})`}}>
            <div class="col-sm-12 col-md-12 col-lg-2"></div>
                <div class="col-sm-12 col-md-12 col-lg-10">
                    <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-10">
                    <div className='nexcentfolio-big'>
                    <h2>Smart Home Real Estate</h2>
                    <div>
                        <p>
                        This page contains the case study of Smart Home Real Estate
                        Project which includes the <br /> Project Overview, Tools Used and
                        Live Links to the official product.</p>
                    </div>
                    </div>
                    <div className='nexconta'>
                        <button className='nexcent-big-btn'>Live Link</button>
                    </div>
                    </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-2"></div>
                </div>
                <div className="row">
                <div class="col-sm-12 col-md-12 col-lg-2"></div>
                <div class="col-sm-12 col-md-12 col-lg-10">
                    <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-10">
                    <div class="nexvent-body">
                    <div className='nex-big-img'>
                    <img src= {Phonesmarthombig} alt="" />
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-2"></div>
                </div>
            </div>
        </div>

        <div className="row">
        <div class="col-sm-12 col-md-12 col-lg-4"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7">
                    <div className='folio-session '>
                        <div className='folio-text'>
                            <h5>Project Overview</h5>
                        </div>
                        <p>
                        Dedicated to making this Smart Home App a difference for
                        both business and users. I introduced products and features
                        that significantly enhanced the conversion rate for Smart
                        Home Real Estate and the easy way clients can purchase properties
                        from anywhere in the world.</p>
                        <p>Feel free to check out the Project by visiting the Full CaseStudy Link.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-4"></div>

        <div className="row">
        <div class="col-sm-12 col-md-12 col-lg-4"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7">
                    <div className='folio-session '>
                        <div className='folio-text'>
                            <h5>The Approach</h5>
                        </div>
                        <p>
                        Improving the user experience (UX) in real estate starts
                        with a <br /> comprehensive understanding of distinct user
                        segments, including <br /> international buyers, sellers, and
                        agents. This entails conducting thorough <br /> research to
                        pinpoint their challenges and preferences. Subsequently, <br />
                        implementing usability testing and continuously gathering
                        feedback is essential.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-4"></div>


        <div className="row">
        <div class="col-sm-12 col-md-12 col-lg-4"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-">
                <div className='folio-session folio-text'>
            <h5>Tools Used</h5>
            <div className='skills-list-12'>
                <p className='skills-list-13'>UX Research</p>
                <p className='skills-list-13'>User Experience Writing</p>
                <p className='skills-list-13'>Figma</p>
                <p className='skills-list-13'>Prototying</p>
                

            </div>
            <div className='skills-list-12'>
            <p className='skills-list-13'>UI Design</p>
            </div>
            </div>
                </div>
            </div>
        </div>
        </div>

        <div className="row">
        <div class="col-sm-12 col-md-12 col-lg-4"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7">
                    <div className='folio-session '>
                        <div className='folio-text'>
                            <h5>See Full</h5>
                        </div>
                        <div className='btnn-111'>
                            <button className='btnn1'>Full CaseStudy</button>
                            <button className='btnn-2'>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-3"></div>

        
        
        </>
    )
    }

export default Smarthomefolio
