import React from 'react'
import './bycfolio.scss';
import { Macbycbig, Backgroundpattern } from '../../assets';


const Bycfolio = () => {
    return (
        <>

<div className="row about-big-1" style={{backgroundImage: `url(${Backgroundpattern})`}}>
            <div class="col-sm-12 col-md-12 col-lg-2"></div>
                <div class="col-sm-12 col-md-12 col-lg-10">
                    <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-10">
                    <div className='nexcentfolio-big'>
                    <h2>BYC</h2>
                    <div>
                        <p>
                        This page contains the case study of Byc  Project
                        which includes the Project Overview, Tools <br />
                        Used and Live Links to the official product.</p>
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
                    <img src= {Macbycbig} alt="" />
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
                                BYC is a multi-service E-commerce platform. I utilized my skills
                                in UI Design and Full-Stack Web Development to craft their multi-page
                                website, enhancing their online presence and distinguishing them amidst
                                competitors. This effort aimed to enhance user experiences across diverse devices.
                                </p>
                                <p>
                                Drawing inspiration from various websites with similar purposes, I curated
                                User Interface concepts. Platforms like Behance also guided my design process.
                                Explore the project through the Full CaseStudy button provided.
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
                        <p className='skills-list-13'>Figma</p>
                        <p className='skills-list-13'>UI Design</p>
                        <p className='skills-list-13'>Prototyping</p>
                        <p className='skills-list-13'>GIT</p>

                    </div>
                    <div className='skills-list-12'>
                    <p className='skills-list-13'>HTML</p>
                    <p className='skills-list-13'>CSS</p>
                    <p className='skills-list-13'>JavaScript</p>
                    <p className='skills-list-13'>Node JS</p>
                    <p className='skills-list-13'>Mongo DB</p>



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

export default Bycfolio
