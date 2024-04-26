import React from 'react';
import './project.scss';
import { Macpckmgfolio, Macnexcent, mackbooksicklecell, Phonesmarthom } from '../../assets';
import { Macbyc } from '../../assets';
import { Phonepethome } from '../../assets';
// import Aos from "aos";
// import 'aos/dist/aos.css'



// Event handler Property 
const handleClick = (event) => console.log(event);

{/* <script>
    const kmg-folio-btn = document.querySelector(".kmg-folio-btn");

    kmg-folio-btn.addEventListener("click", (e) = {
        e.preventDefault};
        kmg-folio-btn.classList.add("animate");

        setTimeout(() => {
            kmg-folio-btn.classList.remove("animate");
        }, 600); // 1s = 1000ms;
    });
</script> */}



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
            <div data-aos='zoom-in' >
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

        <div data-aos='fade-up' data-aos-duration="100" className="row project-1">
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
                <div
                className='conta'>
                <button className='kmg-folio-btn animate'
                onClick={handleClick}>Case Study</button>
            </div>
            </div>
            </div>
            
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        </div>
        
        
        <div className="row project-1 reverse">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div data-aos='fade-up' data-aos-duration="100" class="row reverse">
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
                    <button className='kmg-folio-btn'
                    onClick={handleClick}>Case Study</button>
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

        <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div data-aos='fade-up' data-aos-duration="100" class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
            <div className='kmg-folio-img'>
            <img src= {mackbooksicklecell} alt="" />
            </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5">
                <div className='kmg-folio-text-1'>
                    <h5>
                    Sickle Cell Foundation Nigeria
                    </h5>
                </div>
                <div className='kmg-folio-text-2'>
                    <p>
                    I created the UI design with a team and I had the opportunity
                    to make some beautiful design easy to understand for users.
                    The UI Design of sickle Cell Foundation Nigeria web app.
                    </p>
                </div>
                <div className='conta'>
                <button className='kmg-folio-btn'
                onClick={handleClick}>Case Study</button>
            </div>
            </div>
            </div>
            
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        </div>

        <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div data-aos='fade-up' data-aos-duration="100" class="row reverse">
            <div class="col-sm-12 col-md-12 col-lg-5">
                <div className='kmg-folio-text-1 pt-5'>
                    <h5>
                    Smart Home Real Estate
                    </h5>
                </div>
                <div className='kmg-folio-text-2'>
                    <p>
                    Dedicated to making this Smart Home App a difference for
                    both business and users. I introduced products and features
                    that significantly enhanced the conversion rate for Smart Home
                    Real Estate.
                    </p>
                </div>
                <div className='conta'>
                    <button className='kmg-folio-btn'
                    onClick={handleClick}>Case Study</button>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-7">
            <div className='kmg-folio-img-2'>
            <img src= { Phonesmarthom } alt="" />
            </div>
            </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        </div>


        <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div data-aos='fade-up' data-aos-duration="100" class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
            <div className='kmg-folio-img'>
            <img src= {Macbyc} alt="" />
            </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5">
                <div className='kmg-folio-text-1'>
                    <h5>
                        BYC  (Cloned BYC)
                    </h5>
                </div>
                <div className='kmg-folio-text-2'>
                    <p>
                    BYC is a multi-service E-commerce platform. I utilized my skills
                    in UI Design and Full-Stack Web Development to craft their
                    multi-page website, enhancing their online presence and
                    distinguishing them amidst competitors. This effort aimed to
                    enhance user experiences.
                    </p>
                </div>
                <div className='conta'>
                <button className='kmg-folio-btn'
                onClick={handleClick}>Case Study</button>
            </div>
            </div>
            </div>
            
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        </div>

        <div className="row project-1">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-8">
            <div data-aos='fade-up' data-aos-duration="100" class="row reverse">
            <div class="col-sm-12 col-md-12 col-lg-5">
                <div className='kmg-folio-text-1 pt-5'>
                    <h5>
                    PetHome
                    </h5>
                </div>
                <div className='kmg-folio-text-2 '>
                    <p>
                    Committed to transforming the Pet Home App for businesses
                    and users alike, I implemented innovative products and features.
                    These enhancements notably boosted Pet Home's conversion rates
                    </p>
                </div>
                <div className='conta'>
                    <button className='kmg-folio-btn'
                    onClick={handleClick}>Case Study</button>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-7">
            <div className='kmg-folio-img-2'>
            <img src= { Phonepethome } alt="" />
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
