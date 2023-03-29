import React from 'react'
import './AddressBar.css';
import { images } from '../../constants';

const AddressBar = () => {
  return (
    <div className='address_bar'>
        <div className='time'>
            <img src={images.TimeIcon} alt="time icon" />
            
        </div>
        <div className='email'>
            <img src={images.EmailIcon} alt="email icon" />
        </div>
        <div className='email'>
            <img src={images.callIcon} alt="phone icon" />
        </div>
     </div>
  )
}

export default AddressBar
