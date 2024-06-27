import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import {  UIUXdesign } from "../../assets"; // Adjust the path according to your structure
import { Teacherpointingfinger, Maskgroup, bag } from "../../assets";
import './resume.scss';
const Resume = () => {
return (
        <div className="container">
        <div className="row gy-5 justify-content-center">
            <div className='resume-group'>
                <div className='illustration1'><img src={Maskgroup} alt="" srcset="" /></div>
                <div className='resume-text'>
                    <h1 className='bigText'>
                        Check out my <br /> resume! Let get to <br /> work.
                        <img src={Teacherpointingfinger} alt="" srcset="" />
                        <img src={bag} alt="" srcset="" />
                    </h1>
                    <div className='resumeBtn'>
                        <button>Learn More    <FaArrowRight/></button>
                    </div>
                </div>
                <div className='illustration2'><img src={Maskgroup} alt="" srcset="" /></div>
            </div>
        {/* <div className="col">
            <div className=" h-100 small-card">
            <img src={UIUXdesign} className="card-img-top img-original-size pt-4" alt="Skyscrapers" />
            <div className="card-body">
                <h5 className="card-title pt-3">UI/UX Design</h5>
                <p className="card-text py-3">
                Crafting User-centric websites that <br /> tell your story and connect with <br /> your audience effectively.
                </p>
            </div>
            </div>
        </div> */}
        
        </div>
    </div>

    );
}

export default Resume;
