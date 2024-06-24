import React from 'react'
import './nexcentfoliobigpage.scss';
import { Macnexcentbig, Backgroundpattern } from '../../assets';



const Nexcentfoliobigpage = () => {


return (
    
    <>

<div className="row about-big-1" style={{backgroundImage: `url(${Backgroundpattern})`}}>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10">
            <div className='nexcentfolio-big'>
            <h2>Nexcent</h2>
            <div>
                <p>
                This page contains the case study of Nexcent 
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
            <img src= {Macnexcentbig} alt="" />
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

        <div class="col-sm-12 col-md-12 col-lg-4"></div>
    
    </>
)
}

export default Nexcentfoliobigpage
