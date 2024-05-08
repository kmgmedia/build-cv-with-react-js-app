import React from 'react'
import './sicklefolio.scss';
import { mackbooksicklecellbig, Backgroundpattern } from '../../assets';

const Sicklefolio = () => {
    return (
        <>
        
        <div className="row about-big-1" style={{backgroundImage: `url(${Backgroundpattern})`}}>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
            <div className='aboutme-big'>
            <h2>Sickle Cell Foundation Nigeria</h2>
            <div>
                <p>
                This page contains the case study of Sickle Cell
                Foundation Nigeria  Project which includes <br />
                the Project Overview, Tools Used and Live Links to the
                official product.</p>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className="row about-big-11">
        <div class="col-sm-4 col-md-5 col-lg-5"></div>
        <div class="col-sm-4 col-md-5 col-lg-2">
            <div class="row">
            <div class="col-sm-4 col-md-5 col-lg-4">
            <div className='conta'>
                <button className='kmg-folio-big-btn'>Live Link</button>
            </div>
            </div>
            </div>
        </div>
        </div>
        <div className="row about-big-img-1">
        <div class="col-sm-12 col-md-12 col-lg-4"></div>
        <div class="col-sm-12 col-md-12 col-lg-2">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4">
            <div className='aboutme-big-img'>
            <img src= {mackbooksicklecellbig} alt="" />
            </div>
            </div>
            </div>
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
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
                        I created the UI design with a team and I had the
                        opportunity to make <br />some beautiful design
                        easy to understand for users. The UI Design of <br />
                        sickle Cell Foundation Nigeria web app. I got attracted
                        to this beautiful <br /> Card session of the the design and the
                        landing page sessions.  Its was a <br /> great experience for me
                        to build the UI Design.</p>
                        <p>
                        I used my UI/UX tools to build the
                        User Interface which works on all types <br />of devices to make the
                        frontend perform beautiful user experience.
                        </p>
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
                <div class="col-sm-12 col-md-12 col-lg-">
                <div className='folio-session folio-text'>
            <h5>Tools Used</h5>
            <div className='skills-list-12'>
                <p className='skills-list-13'>UX Research</p>
                <p className='skills-list-13'>User Experience Writing</p>
                <p className='skills-list-13'>Figma</p>
                <p className='skills-list-13'>Prototyping</p>

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

export default Sicklefolio
