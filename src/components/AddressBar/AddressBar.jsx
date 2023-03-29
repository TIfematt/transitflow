import React from 'react'
import './AddressBar.css';
import { images } from '../../constants';

const AddressBar = () => {
  return (
    <div className='address_bar'>
        <div className='time'>
            <img src={images.TimeIcon} alt="time icon" />
            <p>
                Mon - Sat 9.00 - 18.00
                <span>Sunday Closed</span>
            </p>
        </div>
        <div className='email'>
            <img src={images.EmailIcon} alt="email icon" />
            <p>
                Email
                <span>contact@logistics.com</span>
            </p>
        </div>
        <div className='call'>
            <img src={images.callIcon} alt="phone icon" />
            <p>
                Call Us 
               <span>(00) 112 365 489</span>
            </p>
        </div>
     </div>
  )
}

export default AddressBar
