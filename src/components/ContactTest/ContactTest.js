import { React, useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser';
import './contacttest.css'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters' 
import Map from '../Map/Map'
import Socials from '../Socials/Socials';


  /*Success Message-----*/
const Result = () => {
    return (
      <p> Your message has been successfully sent. I will contact you soon</p>
    )
  }
 /*------------------*/
const ContactTest = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
    }, [])
    const [result, showResult] = useState(false)

  /*------Sending out Email with EmailJS-----------*/
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
/*-----------------------------------------------------*/
  return (
    <section id='contact'>
        <div className='contact-container'>
            <div className='contact-left'>
                <h1 className='contactTitle'>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray= {['C', 'o', 'n', 't','a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                     />
                </h1>
                    <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <span className='contactDesc'>Please fill out the form to discuss any work opportunities</span>
                    <input type='text' className='name' placeholder='Your Name' name="from_name" required />
                    <input type='email' className='email' placeholder='Your Email' name='from_email' required />
                    <textarea name='message' rows='5' placeholder='Your Message' className='msg' required/>
                    <div><button type='submit' className='submitBtn' value='Sent'>Submit</button></div>
                    </form>
                    <div className='confirm'>{result ? <Result /> : null}</div>
            </div>
            <div className='contact-right'>
                <div className='info-map'>
                <p>
                    Svetlana Baneva,
                    <br/>
                    Deutschland,
                    <br/>
                    53619,Rheinbreitbach
                    <br/>
                    <span>svetlana.baneva@gmail.com</span>
                    </p>
                </div>
                <div><Map /></div>
            </div>

        </div>
    </section>
  )
}

export default ContactTest
