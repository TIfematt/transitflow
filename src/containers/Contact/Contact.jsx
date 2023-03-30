import React from 'react'
import { images } from '../../constants';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <section className='contact-content'>
        <div className='contact-content-text'>
          <p>Contact</p>
          <h1>Get In Touch With Us</h1>
          <p className='cText'>Leverage agile frameworks to provide a robust synopsis for 
            strategy foster collaborative thinking to further the overall value.</p>  
          <div className='contact-content-media'>
            <img src={images.cSocial} alt='social'/>
          </div>
        </div>
        <form className='contact-form'>
          <div className='contact-form-input'>  
            <input type='text' placeholder='Your Name*' required/>
            <input type='email' placeholder='Email*' required/>
          </div>
          <div className='contact-form-input'>  
            <input type='text' placeholder='Phone Number*' required/>
            <input type='email' placeholder='City*' required/>
          </div>
          <div className='contact-form-textarea'>
            <textarea placeholder='Your Message' />
          </div>
          <div className='contact-form-button'>
            <button type='submit'>Submit Message</button>
          </div>
        </form>
      </section>
      <section className='contact-images'>
        <img src={images.ClientLogo} alt='logo'/>
      </section>
    </div>
  )
}

export default Contact
