import React from 'react'
import './sicklefolio.scss';
import { mackbooksicklecellbig, Backgroundpattern,kmgbigg, kmgphones, kmgphones2, sickbulkimg, sicklepcimg } from '../../assets';


const Kmgfoliobigpage = () => {

    return (

    <>

        <div className="row about-big-1" style={{backgroundImage: `url(${Backgroundpattern})`}}>
            <div class="col-sm-12 col-md-12 col-lg-2"></div>
                <div class="col-sm-12 col-md-12 col-lg-10">
                    <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-10">
                    <div className='nexcentfolio-big'>
                    <h2>Sickle Cell Foundation Nigeria</h2>
                    <div>
                        <p>
                        This page contains the case study of Sickle Cell Foundation Nigeria  Project which includes 
                        <br /> the Project Overview, Tools Used and Live Links to the official product.
                        </p>
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
                    <img src= {mackbooksicklecellbig} alt="" />
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-2"></div>
                </div>
            </div>
        </div>

        <div className="row footers">
    <div class="col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-sm-12 col-md-12 col-lg-10">
                <div className='header'><h3>Project Overview:</h3></div>
                <div className="row overall-container">
                    <div data-aos='fade-right' data-aos-delay="200" class="col-sm-12 col-md-12 col-lg-7">

                    <p>
                    I created the UI design with a team and I had the opportunity to make some beautiful 
                    design easy to understand for users. The UI Design of sickle Cell Foundation Nigeria 
                    web app. I got attracted to this beautiful Card session of the the design and the 
                    landing page sessions.  Its was a great experience for me to build the UI Design
                    </p>
                    <p>
                    This idea originated from the real-life experiences of Sickle Cell 
                    patients who often require immediate attention. You can effortlessly
                    schedule prompt appointments with our available doctors. Additionally,
                    you have the convenience of donating blood, medicine, or funds to 
                    support Sickle Cell patients in need of hospital assistance, all from the comfort of your home.
                    </p>
                    
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div  class="col-sm-12 col-md-12 col-lg-4 get-to-know-me2">
                    <div className='description'>
                            <h4>Role</h4>
                            <h4>Team Lead Designer </h4>
                            <p>
                            U X Research, Information Architecture, Wire-framing, User Interface Design, Prototyping.
                            </p>
                            <h4>Scope</h4>
                            <div>
                                12 weeks, June-August  2023
                            </div>
                            <div>
                                <h4>Tools Used</h4>
                                <div className='skills-container'>
                                    <div className='skills'>UX Research</div>
                                    <div className='skills'>Figma</div>
                                    <div className='skills'>UI Design</div>
                                    
                                </div>
                                <div className='skills-container'>
                                    <div className='skills'>Prototyping</div>
                                    <div className='skills'>User Experience Writing</div>
                                    
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                </div>
                </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        //! Do something, I just tried this comment way out. This is a new way to comment

    {/* <div className="row footers2">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-sm-12 col-md-12 col-lg-10">
                <div className='header'><h3>Some Final Designs:</h3></div>
                <div className="row overall-container2">
                    <div data-aos='fade-right' data-aos-delay="200" class="col-sm-12 col-md-12 col-lg-7">

                    <p>
                    The primary objective behind Kmgfolio was to develop a platform that enables the rapid
                    creation of professional portfolios. Recognizing the need for a solution that is both
                    aesthetically pleasing and functionally robust, I embarked on this project to efficiently
                    address these requirements.
                    </p>
                    <p>
                    Through Kmgfolio, I had the opportunity to enhance my skills in web development, particularly
                    with React.js, and to significantly advance my UI design capabilities. This project not only
                    allowed me to showcase my technical skills but also to create designs that are simple, beautiful,
                    and highly functional.
                    </p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                </div>
                </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div> */}


    <div className="row portfolio-bg">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
        <div className="row full-width-image-container">
            <img src= {sickbulkimg} alt="" className='full-width-image'/>
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div>

    <div className="row portfolio-bgs">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
        <div className="row full-width-image-container">
            <img src= {sicklepcimg} alt="" className='full-width-image'/>
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div>

    <div className="row sickle-footers">
    <div class="col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-sm-12 col-md-12 col-lg-10">
                
                <div className="row overall-container">
                    <div data-aos='fade-right' data-aos-delay="200" class="col-sm-12 col-md-12 col-lg-7">
                        <div>
                            <div className='header'><h3>Real-time Notifications and Alerts:</h3></div>
                            <p>
                                Real-time alerts for patients when their test results are available,
                                allowing them to access their medical records promptly and stay informed
                                about their health status. Timely reminders for patients to refill their
                                prescriptions, ensuring continuity of care and medication adherence.
                            </p>
                        </div>

                    
                    <div>
                    <h3 className=''>Comprehensive Hospital Descriptions with
                    Multimedia Components:</h3>
                    <p>
                    Create multimedia presentations or slideshows showcasing hospital amenities, 
                    services, and special features. Include audio narration or text captions to 
                    provide context and enhance the user experience. Ensure that multimedia 
                    components are optimized for mobile devices, allowing users to access 
                    and view content seamlessly on smartphones and tablets.
                    </p>
                    </div>
                    
                    
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div  class="col-sm-12 col-md-12 col-lg-4 get-to-know-me2">
                    <div className='description'>
                        <div>
                            <h3 className=''>Comprehensive Hospital Descriptions withMultimedia Components:</h3>
                            <p>
                                Create multimedia presentations or slideshows showcasing hospital amenities, 
                                services, and special features. Include audio narration or text captions to 
                                provide context and enhance the user experience. Ensure that multimedia 
                                components are optimized for mobile devices, allowing users to access 
                                and view content seamlessly on smartphones and tablets.
                            </p>
                        </div>
                        <div>
                            <h3 className=''>Comprehensive Hospital Descriptions withMultimedia Components:</h3>
                            <p>
                                Create multimedia presentations or slideshows showcasing hospital amenities, 
                                services, and special features. Include audio narration or text captions to 
                                provide context and enhance the user experience. Ensure that multimedia 
                                components are optimized for mobile devices, allowing users to access 
                                and view content seamlessly on smartphones and tablets.
                            </p>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                </div>
                </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

    {/* <div className="row portfolio-bgs2">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
        <div className="row full-width-image-container">
            <img src= {kmgphones} alt="" className='full-width-image' />
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div> */}

    <div className="row portfolio-bgs">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
        <div className="row full-width-image-container">
            <img src= {kmgbigg} alt="" className='full-width-image'/>
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div>

    <div className="row portfolio-bgs3">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
        <div className="row full-width-image-container">
            <img src= {kmgphones2} alt="" className='full-width-image' />
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div>



        <div className="row footers">
    <div class="col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-sm-12 col-md-12 col-lg-10">
                <div className='header'><h3>Market Research for Portfolio Development</h3></div>
                <div className="row overall-container">
                    <div data-aos='fade-right' data-aos-delay="200" class="col-sm-12 col-md-12 col-lg-7">

                    <p>
                    In today's competitive job market, having a standout portfolio is crucial for catching
                    the attention of employers and stakeholders. To ensure my portfolio,  I effectively
                    showcases my skills and achievements, I conducted thorough market research.
                    </p>
                    <p>
                    This strategic approach allowed me to tailor my portfolio to the needs and
                    expectations of job searchers and stakeholders, making it more appealing and
                    relevant. Here’s how market research informed the development of my portfolio:
                    </p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div  class="col-sm-12 col-md-12 col-lg-4 get-to-know-me2">

                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                </div>
                </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        <div className="row footers3">
    <div class="col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-sm-12 col-md-12 col-lg-10">
                <div className='header2'><h3>Key Insights</h3></div>
                <div className="row overall-container3">
                    <div data-aos='fade-right' data-aos-delay="200" class="col-sm-12 col-md-12 col-lg-7">

                    <p>
                    <span className='bold-text'>1. Identified Target Audience:</span> Clearly defined the demographic and professional characteristics
                    of the audience most likely to engage with the portfolio.
                    </p>
                    <p>
                    <span className='bold-text'>2. Highlighted Competitive Advantages:</span> Identified unique strengths and attributes that
                    set my portfolio apart from competitors in the field.
                    </p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div  class="col-sm-12 col-md-12 col-lg-4 get-to-know-me2">

                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                </div>
                </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        <div className="row footers2">
    <div class="col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-sm-12 col-md-12 col-lg-10">
                <div className='header2'><h3>Competitive Analysis</h3></div>
                <div className="row overall-container2">
                    <div data-aos='fade-right' data-aos-delay="200" class="col-sm-12 col-md-12 col-lg-7">

                    <p>
                    <span className='bold-text'>Highlight My Unique Style and Expertise: </span>I showcase my distinctive design aesthetic
                    or technical skills that make my portfolio stand out. I emphasize how my creative
                    approach or specialized knowledge sets me apart from other designers in my industry.
                    </p>
                    <p>
                        <span className='bold-text'>Compare My Portfolio Presentation and Impact:</span> I evaluate how my portfolio compares
                        to competitors in terms of visual presentation, user experience, and the overall
                        impression it leaves. I identify areas where I excel and where I can further enhance
                        the presentation to make a lasting impact on stakeholders.
                    </p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div  class="col-sm-12 col-md-12 col-lg-4 get-to-know-me2">

                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                </div>
                </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>

        </div>


        <div className="row portfolio-bgs2">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
        <div className="row full-width-image-container">
            <img src= {kmgphones} alt="" className='full-width-image' />
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div>

        <div className="row portfolio-bgs">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">

        <div className="row full-width-image-container">
            <img src= {kmgbigg} alt="" className='full-width-image'/>
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div>


        <div className="row footers2">
    <div class="col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-sm-12 col-md-12 col-lg-10">
                <div className='header2'><h3>Key Lessons Learned</h3></div>
                <div className="row overall-container2">
                    <div data-aos='fade-right' data-aos-delay="200" class="col-sm-12 col-md-12 col-lg-7">

                    <p>
                    <span className='bold-text'>1. Value of In-Depth Research:</span> Working on this project reinforced the importance of thorough
                    research. I realized how crucial it is for making informed decisions that align with the
                    project’s objectives and the solutions it aims to provide.
                    </p>
                    <p>
                    <span className='bold-text'>2. Importance of a Structured Process:</span> To achieve a bespoke design, having a well-defined
                    process is fundamental. Implementing a structured workflow not only helped me work more
                    efficiently and systematically but also allowed me to complete the project well ahead of the scheduled.
                    </p>
                    <h3>What I Would Have Done Differently:</h3>
                    <p>
                    If I had the chance to revisit this project, I would have pushed the boundaries of my visual
                    implementation even further. While the current interface is excellent, I believe that with
                    deeper consideration of the overall visual style, I could have created an even sleeker and
                    more polished design.
                    </p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div  class="col-sm-12 col-md-12 col-lg-4 get-to-know-me2">

                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-sm-12 col-md-12 col-lg-1"></div>
                </div>
                </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div>


    {/* <div className="row footers">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
            <div className="row full-width-image-container">
                <img src= {kmgphones} alt="" className='full-width-image' />
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
    </div> */}






        <div className="row">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
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
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
    </>

    )
}

export default Kmgfoliobigpage