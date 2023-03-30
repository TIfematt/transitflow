import React from 'react'
import './Testimonial.css'
import { images } from '../../constants'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <section className='testimonial__section_1'>
        <div className='testimonial__section_1__content'>
          <div className='testimonial_title'>
            <p>Testimonial</p>
            <h1>What Our Customer Say</h1>
          </div>
          <div className='testimonial_arrow'>
            <img src={images.leftArrow} alt='quote' />
            <img src={images.rightArrow} alt='quote' />
          </div>
        </div>
        <div className='testimonial_image'>
          <img src={images.user} alt='testimonial' />
        </div>
      </section>
    </div>
  )
}

export default Testimonial
