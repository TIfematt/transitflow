import React from 'react'

import './Header.css';
import { images } from '../../constants';
import AddressBar from '../../components/AddressBar/AddressBar.jsx';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_obj'>
        <div className='logo'>
          <img src={images.Logo} alt="Logo" />
        </div>
        <AddressBar />
      </div>
    </div>
    

  )
}

export default Header
