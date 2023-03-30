import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <section className='footer-image'>
        <img src={images.FooterImage} alt='footer'/>
      </section>
      <section className='footer-content'>
        <div className='footer-nav'>
          <div className='footer-nav-logo'>
            <img src={images.Logo} alt='logo'/>
          </div>
          <div className='footer-nav-links'>
            {['Pages', 'Utility', 'Subscribe'].map((item, index) => {
              return (
                <div className='footer-nav-links-item'>
                  <p>{item}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className='footer-contact'>
          <div className='footer-contact-text'>
            <p>Leverage agile frameworks to provide a robust synopsis for 
              strategy  collaborative thinking to further the overall value 
              proposition.
            </p>
            <div className='footer-contact-text-address'>
              <img src={images.Address} alt='footerimage' />
            </div>
          </div>
          <div className='footer-contact-list'>
            <div className='footer-contact-list-items pages'>
              {['About Us', 'Our Team', 'Our Project', 'Pricing', 'Contact'].map((item, index) => {
                return (
                  <div className='footer-contact-list-pages-item'>
                    <a href={`#${item}`}>{item}</a>
                  </div>
                )
              })}
            </div>
            <div className='footer-contact-list-items utility'>
              {['Style Guide', 'Changelog', 'Licenses', 'Protected', 'Not Found'].map((item, index) => {
                return (
                  <div className='footer-contact-list-pages-item'>
                    <a href={`#${item}`}>{item}</a>
                  </div>
                )
              })}
            </div>
            <div className='footer-contact-list-subscibe'>
              <div className='footer-contact-list-subscibe-input'>
                <input type='email' placeholder='Email Here*'/>
                <button>Subscribe</button>
                <div className='footer-contact-list-subscibe-social'>
                  <a href='www.linkedin.com'> <BsLinkedin /> </a>
                  <a href='www.linkedin.com'> <BsTwitter/> </a>
                  <a href='www.linkedin.com'> <BsFacebook/> </a>
                </div>
            </div>
          </div>
        </div>
        </div>
        <div className='copyright'>
          <p>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
          {['Style Guide', 'Licenses', 'Changelog', 'Password'].map((item, index) => {
            return (
              <div className='copyright-links'>
                    <a href={`#${item}`}>{item}</a>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Footer
