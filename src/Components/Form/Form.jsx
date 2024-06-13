import React from 'react';
import './form.scss';
import { Backgroundpattern } from "../../assets";
import { FaPhoneSquareAlt, FaEnvelopeSquare, FaLocationArrow } from "react-icons/fa";



const Form = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log( 'Submitted' );
  }


    return (
        <>
        <form onSubmit={handleSubmit}>
          
        <div className="row about-1 url" style={{backgroundImage: `url(${Backgroundpattern})`}}>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
            <div className='aboutmecont'>
            <h4>CONTACT ME</h4>
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
        <div className="row pt-5 for-bottom">
        <div class="col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row hold-background">
            <div class="col-sm-12 col-md-12 col-lg-5">
            <div data-aos='fade-right' className='get-to-know-me get-well'>
            <h5>Get in touch</h5>
            <div><i class="fa-solid fa-square-phone"></i>
                <p>
                I'm very approachable and would love to speak to you.
                Feel free to call, send me an email. Follow  me in social media or
                simply complete the enquiry for.</p>
                {/* <p>I’m open to <span className='more-bold-body'>Job</span> opportunities where i can contribute, learn and grow. <br />
                If you have any opportunity that matches my skills and experience, <br /> then don’t hesitate to <span className='more-bold-body'>contact me.</span></p> */}
            </div>
              <section>
                <div className='call-number pt-4'>
                <h4><span className='bbtn2'><FaPhoneSquareAlt size={30}/></span>+234 915 096 2867</h4>
              </div>
              <div className='email-envelop'>
                <h4><span className='bbtn2'><FaEnvelopeSquare size={30} /></span>morufbadebola@gmail.com</h4>
              </div>
              <div className='email-envelop'>
                <h4><span className='bbtn2'><FaLocationArrow size={30} /></span>Lagos, Nigeria</h4>
              </div>
              </section>
            </div>
            </div>


{/* Form Session */}

               {/* Name input */}
            <div class="col-sm-12 col-md-12 col-lg-5">
            <div data-aos='' className='get-to-know-me'>
            <h5>Send me a message</h5>
            <section className='form-body'>
              <form action="width: 26rem">
                <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form-1">Name</label>
                    <input type="text" id="form-1" class="form-control" placeholder='Enter Your Name'/>
                </div>

                {/* Email input */}
                <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form-2">Email</label>
                    <input type="text" id="form-2" class="form-control" placeholder='Enter Your Email'/>
                </div>

                {/* Message input */}
                <div data-mdb-input-init class="form-outline mb-2">
                    <label class="form-label" for="form-3">Message</label>
                    <textarea class="form-control" id="form-3" rows="4" placeholder='Enter Your Message'></textarea>
                </div>
                <button className="btn btn-send" type='submit'>Send</button>
              </form>
            </section>
            
            </div>
          </div>
        </div>
      </div>
        <div className="col-sm-12 col-md-12 col-lg-2"></div>
      </div>
    </div>
        </form>



        </>
    )
    }

export default Form
