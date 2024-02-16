import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaTelegramPlane} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_udyww0s', 'template_udwhkds', form.current, 'QyKymPbsug4UwR84u')
  e.target.reset();
};

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Connact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>wkl761212@hotmail.com</h5>
            <a href="mailto:wkl761212@hotmail.com" target='_blank'>Send a massage</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>FACEBOOK</h5>
            <a href="https://m.me/greg.wu.75" target='_blank'>Send a massage</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@wugreg</h5>
            <a href="https://t.me/wugreg" target='_blank'>Send a massage</a>
          </article>
          </div>
          {/*----------End of contact options----------*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='sumit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact