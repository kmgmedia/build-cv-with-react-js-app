import React from 'react'
import './pethomefolio.scss';
import { Phonepethomebig } from '../../assets';

const Pethomefolio = () => {
    return (
        <>
        
        <div className="row about-big-1">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
            <div className='aboutme-big'>
            <h2>PETHOME</h2>
            <div>
                <p>
                This page contains the case study of Pethome  Project
                which includes the Project Overview, <br />Tools Used and Live
                Links to the official product.</p>
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
            <img src= { Phonepethomebig } alt="" />
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
                        Committed to transforming the Pet Home App for businesses
                        and users alike, I implemented innovative products and
                        features.</p>
                        <p>
                        These enhancements notably boosted Pet Home's conversion
                        rates, facilitating seamless purchases of pet food,
                        accessories, and pet adoptions worldwide.</p>
                        <p>Feel free to check out the Project by visiting the Live Link.</p>
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

export default Pethomefolio
