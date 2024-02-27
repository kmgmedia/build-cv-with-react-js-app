import React from 'react'
import './form.scss';
import { Backgroundpattern } from "../../assets";
import { FaPhoneSquareAlt, FaEnvelopeSquare } from "react-icons/fa";


const Form = () => {
    return (
        <>

<div className="row about-1 url" style={{backgroundImage: `url(${Backgroundpattern})`}}>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
            <div className='aboutme'>
            <h4>CONTACT</h4>
            <span className="line"></span>
            <div data-aos='zoom-in'>
                <p>
                Embracing compelling challenges and opportunities, feel free to <br />
                contact me via the details below.</p>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div className="row pt-5">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row bg-primary">
            <div class="col-sm-12 col-md-12 col-lg-6">
            <div data-aos='fade-right' className='get-to-know-me'>
            <h5>Get in touch</h5>
            <div><i class="fa-solid fa-square-phone"></i>
                <p>
                I'm very approachable and would love to speak <br /> to you.
                Feel free to call, send me an email. Follow <br /> me in social media or
                simply complete the <br /> enquiry for.</p>
                {/* <p>I’m open to <span className='more-bold-body'>Job</span> opportunities where i can contribute, learn and grow. <br />
                If you have any opportunity that matches my skills and experience, <br /> then don’t hesitate to <span className='more-bold-body'>contact me.</span></p> */}
            </div>
              <section>
                <div className='call-number'>
                <h4><FaPhoneSquareAlt/>+234 915 096 2867</h4>
              </div>
              <div className='email-envelop'>
                <h4><FaEnvelopeSquare/>morufbadebola@gmail.com</h4>
              </div>
              </section>
            </div>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-5">
            <div data-aos='fade-left' className='get-to-know-me'>
            <h5>Send me a message</h5>

            <section className='form-body'>
              <form action="">

                <label htmlFor="FirstName">First Name</label>
                <div>
                <input id="FirstName" type="text" name="firstName" />
                </div>

                <label htmlFor="email">Email</label>
                <div>
                <input id="email" type="email" name="email" />
                </div>

                <label htmlFor="yourMessage">Your Message</label>
                <textarea name="" id="yourMessage"></textarea>
                
              </form>

              <input type="submit" value="Submit"/>

            </section>
            
            </div>
            </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-2"></div>
        </div>
        </div>

        
        </>
    )
    }

export default Form
