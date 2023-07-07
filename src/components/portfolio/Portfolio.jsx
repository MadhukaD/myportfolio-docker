import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/p1.png'
import IMG2 from '../../assets/p2.png'
import IMG3 from '../../assets/p3.png'
import IMG4 from '../../assets/p4.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project img" />
          </div>
          <h3>MoBoIT</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MadhukaD/MoboIT" className='btn btn-primary' target='_blank'>GitHub</a>
            <a href="https://www.youtube.com/watch?v=rPwrtT8DNHk" className='btn btn-primary' target='_blank'>Demo Video</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="project img" />
          </div>
          <h3>Techzette</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MadhukaD/Techzette" className='btn btn-primary' target='_blank'>GitHub</a>
            <a href="https://www.youtube.com/watch?v=bp7OltFjze0" className='btn btn-primary' target='_blank'>Demo Video</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="project img" />
          </div>
          <h3>Smart Parking</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MadhukaD/Smart-Parking" className='btn btn-primary' target='_blank'>GitHub</a>
            <a href="https://www.youtube.com/watch?v=sdGFHmaHoLo" className='btn btn-primary' target='_blank'>Demo Video</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="project img" />
          </div>
          <h3>Online Pharmacy Hub</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MadhukaD/Online-Pharmacy-Hub" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio