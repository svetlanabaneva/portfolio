import React, {useRef} from 'react'
import './contact.css'
import cv from '../../assets/cv.pdf'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import {
  faStackOverflow,
    faGithub,
    faLinkedin,
    faFacebook,
  } from "@fortawesome/free-brands-svg-icons";


  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      url: "https://github.com",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com/users/22839492/svetlana-baneva",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    },
    {
        icon: faFacebook,
        url: "https://facebook.com",
      },
  ]; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5k8p3nc', 'template_xnkgd7d', form.current, 'Ih3Da1u9aHgUdik9Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact' >
      <div className='container'>

          <div className='contact-left'>
            <h1 className='contactTitle'>Contact me</h1>
            <p><FontAwesomeIcon icon={faEnvelope}  className='contactIcon' /> example@gmail.com</p>
            <p><FontAwesomeIcon icon={faSquarePhone}  className='contactIcon' /> +4912345678</p>
            <div className='links'>
                {socials.map(items =>{
                  return (
                    <a href={items.url}>
                    <FontAwesomeIcon icon={items.icon}  className='link' />
                    </a>
                    )
                })}
            </div>
            <div><a href={cv} download className='cvBtn'>Download CV</a></div>
          </div>
          <div className='contact-right'>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <p className='contactDesc'>Please fill out the form to discuss any work opportunities</p>
              <input type='text' className='name' placeholder='Your Name' name="from_name"/>
              <input type='email' className='email' placeholder='Your Email' name='from_email'/>
              <textarea name='message' rows='5' placeholder='Your Message' className='msg' />
              <div><button type='submit' className='submitBtn' value='Sent'>Submit</button></div>
            </form>
          </div>
        </div>

    </section>
  )
}

export default Contact
