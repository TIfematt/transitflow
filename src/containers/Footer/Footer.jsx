import React from 'react'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <section className='footer-image'>
        <img src={images.FooterImage} alt='footer'/>
      </section>
      <section className='footer-content'>
        
      </section>
    </div>
  )
}

export default Footer
