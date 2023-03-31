import React from 'react'
import './Blog.css';
import { images } from '../../constants';

// Blog section 
const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog-header'>
        <p>Our Blog</p>
        <h3>Our Latest News</h3>
      </div>
      <img src={images.BlogContent} alt='blog'/>
      <div className='blogBtn'>
        <button>More Blog</button>
      </div>
    </div>
  )
}

export default Blog

