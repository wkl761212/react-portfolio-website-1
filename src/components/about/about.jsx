import React from 'react'
import './about.css'
import Me from '../../assets/aboutme.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
    
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1~2 years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2 Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderOpened className='about__icon'/>
              <h5>Projects</h5>
              <small>6 Completed</small>
            </article>
          </div>
          <p>
            
Hello, I'm Greg, currently a student of software development at SAIT. I have a strong passion for acquiring new knowledge and keeping myself updated with the latest advancements in the field. Collaborative environments bring out the best in me as I enjoy being a team player and providing support to my peers. 
          </p>
          <p>
            
          </p>
          <p>In my previous role as a flight instructor, I had the opportunity to refine my communication and leadership skills. This experience taught me valuable lessons in patience, adaptability, and effective mentorship. I am enthusiastic about leveraging my diverse background to further my personal and professional growth within the realm of software development.</p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>

        </div>

      </div>
    </section>
  )
}

export default About