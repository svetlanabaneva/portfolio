import React, {useRef} from 'react'
import './contact.css'
import cv from '../../assets/cv.pdf'
//import * as Yup from 'yup'
import emailjs from '@emailjs/browser';
//import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import {
  faStackOverflow,
    faGithub,
    faLinkedin,
    faFacebook,
  } from "@fortawesome/free-brands-svg-icons";

/*----Social Links Icons-----*/
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
  /*---Yup Schema----*/


const Contact = () => {

  /*
    const formik = useFormik({
      initialValues: {
        firstName:"",
        email:"",
        type:"",
        comment:""
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        message: Yup.string().min(25, "Must be at least 25 characters").required("Required")
      }),
    });*/
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
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    //formValidation();
    sendEmail();

  }

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
            <form className='contactForm' ref={form} onSubmit={handleSubmit}>
              <p className='contactDesc'>Please fill out the form to discuss any work opportunities</p>
              <input type='text' className='name' placeholder='Your Name' name="from_name" required />
              <input type='email' className='email' placeholder='Your Email' name='from_email' required />
              <textarea name='message' rows='5' placeholder='Your Message' className='msg' required/>
              <div><button type='submit' className='submitBtn' value='Sent'>Submit</button></div>
            </form>
          </div>
        </div>

    </section>
  )
}

export default Contact
