import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>

          <h3>Dashboard-admin</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wkl761212/Dashboard-admin" className='btn'>Github</a>
            
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>

          <h3>MyMobileAppProject</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wkl761212/MyMobileAppProject" className='btn'>Github</a>
            
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>

          <h3>TodoApp</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wkl761212/TodoApp" className='btn'>Github</a>
            
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>

          <h3>moviequote</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wkl761212/moviequote" className='btn'>Github</a>
            
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>

          <h3>Portfolio-website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wkl761212/react-portfolio-website-1" className='btn'>Github</a>
            
          </div>
        </artical>
        
      </div>
    </section>
  )
}

export default Portfolio