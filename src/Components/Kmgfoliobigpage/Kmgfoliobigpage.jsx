import React from 'react'
import './kmgfoliobigpage.scss';
import { Macpckmgfoliobig } from '../../assets';
import { Backgroundpatternherosession } from '../../assets';




const Kmgfoliobigpage = () => {
    return (
    <>
    
    <div className="row about-big-1">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
            <div className='aboutme-big'>
            <h2>Kmgfolio</h2>
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
            <img src= {Macpckmgfoliobig} alt="" />
            </div>
            </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3"></div>
        </div>
    
    </>

    )
}

export default Kmgfoliobigpage