import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/CP.png'
import AVTR2 from '../../assets/AWSrestart.png'
import AVTR3 from '../../assets/AWSACF.png'
import AVTR4 from '../../assets/DE.png'
import AVTR5 from '../../assets/oracle.jpg'


// import Swiper core and required modules
import {Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Credentials for achievements</h5>
      <h2>Certifications</h2>

      <Swiper className="container testimonials__container" // install Swiper modules
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination]}>
        <SwiperSlide className='testimonials'>
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h3 className='client__name'>AWS Cloud Practitioner</h3>
          <small className='client__review'>
          AWS Certified Cloud Practitioner certification provides a basic understanding of AWS Cloud services and concepts. 
          It can help candidates pursue other AWS Certifications with confidence.
          </small>
          <a href="https://www.credly.com/badges/22a366eb-ebd0-4eb1-bd26-cd4cf956730f" target='_blank'>View Credentials</a>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className="client__avatar">
            <img src={AVTR2} alt="" />
          </div>
          <h3 className='client__name'>AWS re/start</h3>
          <small className='client__review'>
          AWS re/Start is a cohort-based workforce development training program 
          that prepares individuals for careers in the cloud and connects them to potential employers.
          </small>
          <a href="https://www.credly.com/badges/62bdb2c8-d152-4662-8a75-ed0208fc5fee" target='_blank'>View Credentials</a>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className="client__avatar">
            <img src={AVTR3} alt="" />
          </div>
          <h3 className='client__name'>AWS Academy Cloud Foundations</h3>
          <small className='client__review'>
          This introductory course is intended for students who seek an overall 
          understanding of cloud computing concepts, independent of specific technical roles. 
          </small>
          <a href="https://www.credly.com/badges/90940a33-3be7-450d-8119-d5d962fe7a26" target='_blank'>View Credentials</a>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className="client__avatar">
            <img src={AVTR5} alt="" />
          </div>
          <h3 className='client__name'>Oracle Cloud Infrastructure Foundations Associate</h3>
          <small className='client__review'>
          The course teaches the basic principles of DevOps, such as the merging of developers 
          and operators into a cross-functional team. It provides a strong foundation in DevOps concepts.
          </small>
          <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=D24B95955292BD4B816EB0C2C5C742ADD83B0162D862D0B6DE3B6FC4A5C7A860" target='_blank'>View Credentials</a>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className="client__avatar">
            <img src={AVTR4} alt="" />
          </div>
          <h3 className='client__name'>IBM DevOps Essentials</h3>
          <small className='client__review'>
          The course teaches the basic principles of DevOps, such as the merging of developers 
          and operators into a cross-functional team. It provides a strong foundation in DevOps concepts.
          </small>
          <a href="https://www.credly.com/badges/2b3aa4c4-93ec-4d1f-a4f2-2562f57c83e9" target='_blank'>View Credentials</a>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials