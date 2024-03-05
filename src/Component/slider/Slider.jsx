import React from 'react'
import sliderimg from "../../Assets/muslimakka.jpg"
import sliderimg1 from "../../Assets/sl2.jpg"
import sliderimg2 from "../../Assets/sll3.jpg"
import sliderimg3 from "../../Assets/th.jpg"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
  let mynavigate=useNavigate()
  function go(params) {
    mynavigate("/gallery")
  }
  return (
    <>
    <div className='slider' >    
        <div className='slider'>
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
       
        navigation={false}
        loop={true}
        effect='slide'
        speed={2000}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='sliderimg'>
            <div className='sliderimage1'>
            <h1>Creativity Unleashed</h1>
            <div className='title-img'>
                <img src={sliderimg} alt="" />
            </div>
            </div>
            <div className='sliderimage2'>
                <div className='slider-content'>
                <h1>Best in services</h1>
                <h3>One of the best printing services are provided by our company for our clients satisfactions</h3>
                <h3>Our notebooks provide the perfect canvas for capturing ideas, whether it's note-taking, sketching, or journaling.</h3>
                <p>Your satisfaction, our guarantee. Experience the difference with our printing services.</p>
                <button onClick={go}>SEE MORE</button>
         </div>   </div>
            </div></SwiperSlide>
            <SwiperSlide><div className='sliderimg'>
            <div className='sliderimage1'>
            <h1>Variety of Styles</h1>
            <div className='title-img'>
                <img src={sliderimg1} alt="" />
            </div>
            </div>
            <div className='sliderimage2'>
                <div className='slider-content'>
                <h1>Perfect guidance</h1>
                <h3>We provide heartfull guidance for our clients to enchance their satisfactions</h3>
                <h3>With a range of designs and patterns, Notebook Magic offers something for everyone, from classic and elegant to bold and vibrant.
</h3>
                <p>Stand out from the crowd with our personalized printing options.</p>
                <button onClick={go}>SEE MORE</button>
                
         </div>   </div>
            </div></SwiperSlide>
            <SwiperSlide><div className='sliderimg'>
            <div className='sliderimage1'>
            <h1>Durability</h1>
            <div className='title-img'>
                <img src={sliderimg2} alt="" />
            </div>
            </div>
            <div className='sliderimage2'>
                <div className='slider-content'>
                <h1>Best in Quality</h1>
                <h3>quality is our companies main moto to get more trust with our clients</h3>
                <h3>Sturdy covers and high-quality paper ensure that your work is protected and preserved, making our notebooks reliable companions for your creative journey.
</h3>
                <p>Printed perfection: where quality meets affordability.</p>
                <button onClick={go}>SEE MORE</button>
                
         </div>   </div>
            </div></SwiperSlide>
            <SwiperSlide><div className='sliderimg'>
            <div className='sliderimage1'>
            <h1>Sustainability</h1>
            <div className='title-img'>
                <img src={sliderimg3} alt="" />
            </div>
            </div>
            <div className='sliderimage2'>
                <div className='slider-content'>
                <h1>Best in Printing</h1>
                <h3>Elevate your brand with our high-quality printing solutions.Let your message shine with our professional printing expertise.</h3>
                <h3>Committed to sustainability, using eco-friendly materials and manufacturing processes to minimize environmental impact.

</h3>
                <p>Unlock the power of print with our innovative solutions.</p>
                <button onClick={go}>SEE MORE</button>
                
         </div>   </div>
            </div></SwiperSlide>
            
            
            
            
        
        
      </Swiper>
        </div>
    </div>
    </>
  )
}

export default Slider