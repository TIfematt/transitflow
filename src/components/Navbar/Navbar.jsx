import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';

import './Navbar.css'

// Navbar Component
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav_link'>
        {/* Navbar link */}
        {['Home', 'About', 'Pages', 'Project', 'Contact'].map((item, index) => (
          <li key={`link-${item}`}> 
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='nav_social'> 
        {[BsFacebook, BsTwitter, BsLinkedin, BsInstagram].map((Icon, index) => (
          <a key={`social-${index}`} href='https://www.facebook.com/'>
            <Icon className='Nav-social-icons'/>
          </a>
        ))}
      </div>
        <button className='nav_btn'>Request Quote</button>
    </nav>
  )
}

export default Navbar
