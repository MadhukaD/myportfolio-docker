import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Like</h5>
      <h2>Passions</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Non-Technical Skills</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Communication</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Team Work</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Time Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Project Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Presentation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adaptability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Self-directed learning</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Interested Areas</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>AI & NLP</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>DevSecOps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>GitOps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Containerization & Ochestrarion</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Infrastructure Provisioning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blockchain</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cloud Platforms (AWS, Azure, IBM)</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Hobbies</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Gaming</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Watching Movies & TV series</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Listening Music</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reading Novels</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Travelling</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Swimming</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Article Writing</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services