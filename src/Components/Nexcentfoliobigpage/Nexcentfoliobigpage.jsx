import React from 'react'
import './nexcentfoliobigpage.scss';
import { Macnexcentbig } from '../../assets';

const Nexcentfoliobigpage = () => {
  return (
    <>

<div className="row about-big-1">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
            <div className='aboutme-big'>
            <h2>Nexcent</h2>
            <div>
                <p>
                This page contains the case study of Kmgfolio 
                Project which includes the Project Overview, <br />
                Tools Used and Live Links to the official product.</p>
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
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

        <div className="row about-big-img-1">
        <div class="col-sm-12 col-md-12 col-lg-4"></div>
        <div class="col-sm-12 col-md-12 col-lg-2">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4">
            <div className='aboutme-big-img'>
            <img src= {Macnexcentbig} alt="" />
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
                            <h5>Project Overview</h5>
                        </div>
                        <p>
                        Kmgfolio sand as a victorious, born from my creative drive.
                        I created this project to quickly build a good-looking and fast
                        performing multi-stage portfolio. Feel free to check out the project
                        by visiting the project link below.
                        </p>
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
                <p className='skills-list-13'>React JS</p>

            </div>
            <div className='skills-list-12'>
            <p className='skills-list-13'>SASS</p>
                <p className='skills-list-13'>JavaScript</p>
                <p className='skills-list-13'>Node JS</p>
                <p className='skills-list-13'>Mongo DB</p>
                <p className='skills-list-13'>GIT</p>
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
                            <h5>See Live</h5>
                        </div>
                        <div className='btnn-111'>
                            <button className='btnn1'>Live Link</button>
                            <button className='btnn-2'>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        </div>
    
    </>
  )
}

export default Nexcentfoliobigpage
