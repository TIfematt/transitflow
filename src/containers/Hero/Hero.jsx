import React from 'react'

import { images } from '../../constants';
import './Hero.css';
import Navbar from '../../components/Navbar/Navbar.jsx';

const Hero = () => {

  //Assigned image to a variable
  const background = images.photo


  // const onHover = () => {
  //   return (

  //     this.style.backgroundImage=`url(${images.YellowBtnHover})`
  //   )
  // }

  return (
      <div className='hero' style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',  
        width: '100%',
        height: '100vh'                 
        }}

        >
        <Navbar />
        <div className='hero_content'>
          <p className='sub_text'>Logistics & Supply Chain Solutions</p>  
          <h1 className='title'>Your Gateway
            <br /> to any Destination
            <br /> in the World
          </h1>
          <p className='sub_title'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, 
            molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, 
            enim diam interdum nulla, sed laoreet risus lectus.
          </p>    
          <button className='hero_btn' style={{ width: '194px', height: '60px'}}>
            Explore More
          </button>           
      </div>
    </div>
  )
}

export default Hero
