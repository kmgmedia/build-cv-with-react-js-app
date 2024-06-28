import React from 'react';
import {  UIUXdesign } from "../../assets"; // Adjust the path according to your structure
import { Webdesign, Motiondesign, Brandidentity, Powerpoint, Graphicdesign } from "../../assets";
import './card.scss';
const Card = () => {
return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 justify-content-center overall-text">
        <div className="col">
            <div className=" h-100 small-card">
            <img src={UIUXdesign} className="card-img-top img-original-size pt-4" alt="Skyscrapers" />
            <div className="card-body">
                <h5 className="card-title pt-3">UI/UX Design</h5>
                <p className="card-text py-3">
                Crafting User-centric websites that <br /> tell your story and connect with <br /> your audience effectively.
                </p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className=" h-100 small-card">
            <img src={Webdesign} className="card-img-top img-original-size pt-4" alt="Skyscrapers" />
            <div className="card-body">
                <h5 className="card-title pt-3">Web Development</h5>
                <p className="card-text py-3">
                Web design transforms ordinary <br /> websites into engaging, user- <br /> friendly experiences.
                </p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className=" h-100 small-card">
            <img src={Motiondesign} className="card-img-top img-original-size pt-4" alt="Skyscrapers" />
            <div className="card-body">
                <h5 className="card-title pt-3">Motion Graphics</h5>
                <p className="card-text py-3">
                Motion graphics animation videos <br /> turn dull content into engaging <br /> material for your audience.
                </p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className=" h-100 small-card">
            <img src={Brandidentity} className="card-img-top img-original-size pt-4" alt="Skyscrapers" />
            <div className="card-body">
                <h5 className="card-title">Brand Identity</h5>
                <p className="card-text py-3">
                Brand identity design turns a plain business presence into a <br /> memorable experience.
                </p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className=" h-100 small-card">
            <img src={Powerpoint} className="card-img-top img-original-size pt-4" alt="Skyscrapers" />
            <div className="card-body">
                <h5 className="card-title pt-3">PowerPoint Design</h5>
                <p className="card-text py-3">
                PowerPoint design transforms <br /> ordinary slides into engaging, <br /> impactful presentations.
                </p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className=" h-100 small-card">
            <img src={Graphicdesign} className="card-img-top img-original-size pt-4" alt="Skyscrapers" />
            <div className="card-body">
                <h5 className="card-title pt-3">Graphic Design</h5>
                <p className="card-text py-3">
                Your business needs an effective <br /> visual strategy in order to make <br /> you standout from the crowd.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>

    );
}

export default Card;
