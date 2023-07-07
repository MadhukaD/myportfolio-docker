import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/pic21.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Madhuka Dilshan</h1>
        <h5 className="text-light">Cloud Computing Undergraduate</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className='image' src={ME} alt="me" />
        </div>
        <a href="#footer" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header