import React from 'react'
import image1 from "../../assets/image1Why.png"
import image2 from "../../assets/image2Why.png"
import image3 from "../../assets/image3Why.png"
import {CustomButton} from "../common/widget"
import './index.scss'

const SubSection = ({text,subText,buttonText,image, reverse}) => {
  return (
    <div className='sub-sec-cotainer' style={{flexDirection:reverse? 'row-reverse' :'row'}}>
      <img src={image} alt={text} className='sec-image'/>
      <div className='text-content'>
        <p className='sec-text'>{text}</p>
        <p className='sec-subText'>{subText}</p>
        <CustomButton label={buttonText}/>
      </div>
    </div>
  )
}

const WhyChooseUS = () => {
  return (
    <div className='section-container' id='why-choose-us'>
      <div className='sec-title'>
        <h4>Why Choose Us?</h4>
      </div>
      <SubSection 
        text="Solutions Tailored Specifically to Your Business Needs"
        subText = "We provide customized solutions for your business needs, ensuring relevance and success."
        buttonText = "Read More"
        image = {image1}
      />
      <SubSection 
        text="Creative Excellence Elevates Every Project"
        subText = "Creative excellence drives our work. From concept to execution, we aim for exceptional results."
        buttonText = "Read More"
        image = {image2}
        reverse={true}
      />
      <SubSection 
        text="Client Satisfaction is Our Main Focus"
        subText = "Our main goal is your satisfaction, and we work tirelessly to ensure that you are pleased with the results we achieve together."
        buttonText = "Read More"
        image = {image3}
      />
      </div>
  )
}

export default WhyChooseUS