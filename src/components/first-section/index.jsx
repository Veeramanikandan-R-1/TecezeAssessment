import React from 'react'
import Navbar from './navbar'
import './index.scss';
import { CustomButton } from '../common/widget';

const FirstSection = () => {
  return (
    <div className='first-section-container' id='first-section'>
        <Navbar />
        <div className='hero-container'>
            <h4 className='hero-text'><span>Boost</span> Your Brand With Innovative <span>Digital Marketing</span></h4>
        </div>
        <div className='sub-text-container'>
            <p className='sub-text'>Drive Engagement and Conversions with Advanced Digital Marketing Strategies.</p>
        </div>
        <div className='start-button-container'>
            <CustomButton label='Start Now'/>
        </div>
        <div className='trust-quote'>
            <p>Trusted By Thousand Companies</p>
        </div>
        <div className='companies'>
            <p>Layers</p>
            <p>Quotient</p>
            <p>CirCooles</p>
            <p>Hourglass</p>
            <p>Command+R</p>
        </div>
    </div>
  )
}

export default FirstSection