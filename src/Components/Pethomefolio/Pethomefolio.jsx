import React from 'react'
import './pethomefolio.scss';
import { Phonepethomebig, Backgroundpattern } from '../../assets';

const Pethomefolio = () => {
    return (
        <>
        
        <div className="row about-big-1" style={{backgroundImage: `url(${Backgroundpattern})`}}>
            <div class="col-sm-12 col-md-12 col-lg-2"></div>
                <div class="col-sm-12 col-md-12 col-lg-10">
                    <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-10">
                    <div className='nexcentfolio-big'>
                    <h2>PETHOME</h2>
                    <div>
                        <p>
                        This page contains the case study of Pethome 
                        Project which includes the Project Overview, <br />
                        Tools Used and Live Links to the official product.</p>
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
                    <img src= {Phonepethomebig} alt="" className="img-fluid" />
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
                        Committed to transforming the Pet Home App for businesses
                        and users alike, I implemented innovative products and
                        features.</p>
                        <p>
                        These enhancements notably boosted Pet Home's conversion
                        rates, facilitating seamless purchases of pet food,
                        accessories, and pet adoptions worldwide.</p>
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

export default Pethomefolio
