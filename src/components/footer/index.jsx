import React from 'react'
import "./index.scss"
import { CustomButton } from '../common/widget'
import { IoLogoFacebook } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiBasketball } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='footer-section' id='contact-section'>
      <div className='first-sec'>

      </div>
      <div className="second-sec">
        <div className='sec-container'>
          <div className='section-one'>
            <h4>CLICK IT</h4>
            <p className='desc'>Click It - is a leading digital marketing agency dedicated to driving success for businesses online. With expertise in SEO, PPC, social media, content creation, and more, we offer tailored solutions to maximize ROI. In the USA, UK, and Canada working with top-tier clients, from start-ups to enterprise</p>
          </div>
          <div className='section-two'>
            <h4>Our Services</h4>
            <p>SEO Marketing</p>
            <p>Research Topic Trends</p>
            <p>Email Marketing</p>
            <p>Google PPC</p>
          </div>
          <div className='section-three'>
            <h4>Our Location</h4>
            <p>USA</p>
            <p>UK</p>
            <p>Canada</p>
            <p>Virtual</p>
          </div>
          <div className='section-four'>
            <h4>Contact us</h4>
            <div>
              <p>info@kronix.com</p>
            </div>
            <div>
              <p>(001) 1231 3435</p>
            </div>
            <div className='social-icons'>
              <IoLogoFacebook />
              <LuInstagram />
              <FaLinkedinIn />
              <CiBasketball />
            </div>
          </div>
        </div>
        <hr className='foot-divider' />
        <div className='footer-links'>
          <div className='links'>
            <p>Process</p>
            <p>Benefits</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>FAQ</p>
          </div>
          <p className='copyright'>© 2024 RajaramanR3- All Right Reserved</p>
        </div>
      </div>
      <div className='foot-highlight'>
        <p className='main-text'>“Stand out online and make an impact”</p>
        <p className='customer-text'>David Smith CEO of a Tech Startup</p>
        <p className='sub-text'>Jump on a membership and start requesting designs right away!</p>
        <CustomButton label="See Pricing" />
      </div>
    </div>
  )
}

export default Footer