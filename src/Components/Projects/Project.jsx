import React from 'react'
import './project.scss';
import { Macpckmgfolio } from '../../assets';
import { Macnexcent } from '../../assets';


const Project = () => {
    return (
        <>
        <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
            <div className='projectme'>
            <h4>PROJECTS</h4>
            <span className="line"></span>
            <div>
                <p>
                Diverse works, personal & client projects showcased. 
                Dive into detailed case studies revealing <br /> creative processes, 
                challenges, & solutions for each.</p>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div>

{/* PROJECT SESSION  */}

        <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
            <div className='kmg-folio-img'>
            <img src= {Macpckmgfolio} alt="" />
            </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5">
                <div className='kmg-folio-text-1'>
                    <h5>
                        Kmgfolio
                    </h5>
                </div>
                <div className='kmg-folio-text-2'>
                    <p>
                    Kmgfolio sand as a victorious, born from my creative drive.
                    I created this project to quickly build a good-looking and fast
                    performing multi-stage portfolio. Feel free to check out
                    the project by visiting the project link below.
                    </p>
                </div>
                <div className='conta'>
                <button className='kmg-folio-btn'>Case Study</button>
            </div>
            </div>
            </div>
            
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        </div>
        
        
        <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-5">
                <div className='kmg-folio-text-1'>
                    <h5>
                        Nexcent
                    </h5>
                </div>
                <div className='kmg-folio-text-2'>
                    <p>
                    I created the UI design and develop the front-end of Nexcent
                    web app because I got attracted to the beautiful color and I
                    had the beautiful UI thinking right. Its was a great experience
                    for me to build the UI and the entire front-end.
                    </p>
                </div>
                <div className='conta'>
                    <button className='kmg-folio-btn'>Case Study</button>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-7">
            <div className='kmg-folio-img-2'>
            <img src= {Macnexcent} alt="" />
            </div>
            </div>
            
            </div>
            
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        </div>
        
        
        
        </>
    )
    }

export default Project
