import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Madhuka Dilshan</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Passions</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/madhuka.dishan/" target='_blank'><FaFacebook/></a>
        <a href="https://www.instagram.com/madhuka.d/" target='_blank'><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Madhuka Dilshan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer