import React from 'react'
import './index.scss'
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { MdOutlineSocialDistance } from "react-icons/md";



const Services = () => {
  return (
    <div id='services'>
      <h4 className='sec-title'>Services</h4>
      <p className='sub-text' >Strategic services drive digital success with tailored, comprehensive approaches.</p>
      <div className='cards-container'>
        <div className='card'>
          <div className='card-icon' >
            <AiOutlineFileSearch />
          </div>
          <p className='card-text'>SEO Marketing</p>
        </div>
        <div className='card'>
          <div className='card-icon' >
            <MdOutlineSpeakerNotes />
          </div>
          <p className='card-text'>Content Marketing</p>
        </div>
        <div className='card'>
          <div className='card-icon' >
            <MdOutlineSocialDistance />
          </div>
          <p className='card-text'>Social Media Management</p>
        </div>
        <div className='card'>
          <div className='card-icon' >
            <AiOutlineFileSearch />
          </div>
          <p className='card-text'>PPC</p>
        </div>
        <div className='card'>
          <div className='card-icon'>
            <MdOutlineSpeakerNotes />
          </div>
          <p className='card-text'>Email Marketing</p>
        </div>
      </div>
    </div>
  )
}

export default Services