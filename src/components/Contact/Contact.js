import React, {useRef, useState} from 'react'
import './contact.css'
import cv from '../../assets/cv.pdf'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSquarePhone,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faStackOverflow,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

/*----Social Links Icons-----*/
  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: svetlana.baneva@gmail.com",
    },
    {
      icon: faGithub,
      url: "https://github.com/svetlanabaneva",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com/users/22839492/svetlana-baneva",
    },
    {
      icon: faLinkedin,
      url: "https://linkedin.com/in/svetlana-baneva-4299975a",
    },
  ];

const Result = () => {
  return (
    <p> Your message has been successfully sent. I will contact you soon</p>
  )
}

const Contact = () => {
  const [result, showResult] = useState(false)  
  /*------Sending Email with EmailJS-----------*/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
    };

  return (
    <section id='contact' >
      <div className='container'>

          <div className='contact-left'>
            <h1 className='contactTitle'>Contact me</h1>
            <p><FontAwesomeIcon icon={faLocationDot}  className='contactIcon' /> 53619, Deutschland</p>
            <p><FontAwesomeIcon icon={faSquarePhone}  className='contactIcon' /> +4912345678</p>
            <div className='links'>
                {socials.map(items =>{
                  return (
                    <a href={items.url} target="_blank"  rel="noreferrer">
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
              <input type='text' className='name' placeholder='Your Name' name="from_name" required />
              <input type='email' className='email' placeholder='Your Email' name='from_email' required />
              <textarea name='message' rows='5' placeholder='Your Message' className='msg' required/>
              <div><button type='submit' className='submitBtn' value='Sent'>Submit</button></div>
            </form>
            <div className='confirm'>{result ? <Result /> : null}</div>
          </div>
        </div>

    </section>
  )
}

export default Contact
