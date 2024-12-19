import React, { useState } from 'react'
import './VisionSlider.css'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import VisionSection1 from '../../assets/VisionSection1.jpg'
import VisionSection2 from '../../assets/VisionSection2.jpg'

 function VisionSlider() {
          const visiondata = [
                    {
                    img: VisionSection1,
                    content: "We are working on digital potential with our end-to-end website and application solutions.From initial concept to final launch, we cover every step of the process. Our services include strategic planning, custom design, development, and optimization, ensuring a seamless user experience. We implement the latest technologies to create responsive, high-performance websites tailored to your specific needs",
                    },
                    {
                              img: VisionSection2,
                              content: "we believe in the power of human connection and the transformative potential of technology. Our mission is to bridge gaps and bring people together, solving real-world problems with innovative solutions. Whether it's through our cutting-edge software, intuitive platforms, or personalized support, we are dedicated to making a positive impact on lives around the globe. Join us in creating a better, more connected future, where technology meets human ingenuity to overcome challenges and unlock new opportunities",
                    },
          ];

  return (
    <div className=''>
       <div id="visionSlider" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" style={{height: "600px"}}>
          {
                    visiondata.map((item, index) => (
                              <div class={`carousel-item ${index === 0 ? 'active': ''}`} data-bs-interval="5000">
                                        <div className='' style={{width:"80%", height:"900px",  margin:"auto"}}>
                                        <div className='vision_image_container'>
                                                  <img src={item.img} class="vision_img" alt="..." />
                                        </div>         
                                        <div className='vision_content'>
                                                  <p className='text-white'>{item.content}</p>
                                        </div>
                                        </div>
                              </div>
                    ))
          }
             
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#visionSlider" data-bs-slide="prev">
        <FaChevronLeft className=' vision-carousel-icon'  />

        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#visionSlider" data-bs-slide="next">
        <FaChevronRight className='vision-carousel-icon' />
        </button>
    </div>
</div>

  )
}

export default function VisionAbout() {
  return(
      <div className='vision_slider_section'>
      <div className='vision-top-content'>
        <h2 className="vision_slider_heading" style={{width:"300px"}}>Our Vision</h2> 
        <p className="vision_slider_subtitle" >Empowering Tomorrow: Innovating Today for a Smarter Future.</p>
      </div>
      <div className='mt-1'>
        <VisionSlider />
      </div>
    </div>
  )
}
