import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const data = [
  {
    avatar: AVTR1,
    name: 'Nina Chao',
    review: 'You are grate! I am very happy with your work. I will definitely recommend you to my friends and family.You are grate! I am very happy with your work. I will definitely recommend you to my friends and family.You are grate! I am very happy with your work. I will definitely recommend you to my friends and family.'
  },
  {
    avatar: AVTR2,
    name: 'Huong',
    review: 'You are grate! I am very happy with your work. I will definitely recommend you to my friends and family.You are grate! I am very happy with your work. I will definitely recommend you to my friends and family.You are grate! I am very happy with your work. I will definitely recommend you to my friends and family.'
  },
  {
    avatar: AVTR3,
    name: 'Hemdy',
    review: 'You are grate! I am very happy with your work. I will definitely recommend you to my friends and family.You are grate! I am very happy with your work. I will definitely recommend you to my friends and family.You are grate! I am very happy with your work. I will definitely recommend you to my friends and family.'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <swiper-container className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </swiper-container>
    </section>
  )
}

export default Testimonials