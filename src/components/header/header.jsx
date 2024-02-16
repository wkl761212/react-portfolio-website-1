import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Greg Wu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header


