import React from 'react'
import './about.css'
import ME from '../../assets/newbg1.jpg'
import {FaUniversity} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
              <FaUniversity/>
              <h5>Final Year</h5>
              <small>undergraduate at</small>
              <h5>SLTC Research University</h5>
            </article>
            <article className='about__card'>
              <FaUserGraduate/>
              <h5></h5>
              <small>Following</small>
              <h5>BSc (Hons) in</h5>
              <h5>Cloud Computing</h5>
            </article>
          </div>
          <p>With a strong passion for the latest Cloud & DevOps technologies, I am highly motivated to learn and apply cutting-edge techniques to help drive innovation in the industry.
          I am excited to collaborate with others, contribute my knowledge, and make a meaningful impact in the DevOps space.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>  
        </div>
      </div>
    </section>
  )
}

export default About
