import React, { useState } from 'react'
import { CustomButton, Logo } from '../common/widget'
import { IoIosMenu } from 'react-icons/io'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navHandler = () => {
    setShowNav(!showNav);
  }
  return (
    <div className='nav-container'>
        <div className='nav-bar'>
            <div className='logo'>
              <a href="/">
                <Logo />
              </a>
            </div>
            <div className='nav-links'>
                <a href="#services">Services</a>
                <a href="#why-choose-us">Why Choose Us</a>
                <a href="#testimonial-section">Testimonial</a>
                <a href="#contact-section">Contact</a>
                <CustomButton label='Get Started'/>
            </div>
            <div className='small-nav'>
            <IoIosMenu onClick={navHandler}/>
          </div>
        </div>
        {showNav && <div className='nav-link-moblie' onClick={navHandler}>
                <a href="#services">Services</a>
                <a href="#why-choose-us">Why Choose Us</a>
                <a href="#testimonial-section">Testimonial</a>
                <a href="#contact-section">Contact</a>
                <CustomButton label='Get Started'/>
        </div>}
    </div>
  )
}

export default Navbar