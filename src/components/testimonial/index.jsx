import React from 'react'
import './index.scss'
import image4 from "../../assets/image4Testimonial.png"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Testimonial = () => {
  return (
    <div className='testimonial-section' id='testimonial-section'>
      <p className='header'>Testimonial</p>
      <h4 className='sub-header'>Customer is Our Top Priority</h4>
      <p className='sub-text'>We survey all of our clients, the results of which go directly to our CEO.</p>
      <div className='container-sec'>
        <MdKeyboardArrowLeft className='nav-icon'/>
        <div className='carousel-container'>
          <div className='text-content'>
            <div className='logo'>Gymstory</div>
            <p className='testi-text'>Kornix is the best digital agency i have ever seen! Highly Recommended!</p>
            <p className='testi-subtext'>I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.</p>
            <p className='customer-name'>Diana Loreza</p>
            <p className='customer-position'>Director of <span className='company-name'>Gymstory</span></p>
          </div>
          <div className='image-container'>
            <img src={image4} alt="person" />
          </div>
        </div>
        <MdKeyboardArrowRight className='nav-icon'/>
      </div>
    </div>
  )
}

export default Testimonial