import React from 'react'
import './intro.css'

import profile from '../../assets/profile.JPG'

const Intro = () => {
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Hi,</span>
        <span className='introText'>I'm <span className='introName'>Svetlana</span><br />Frontend Developer</span>
        <p className='introPara'>I am a motivated and self-driven front end developer, re-entering the field. <br />After a long break invested in my family I am ready for new challenges.<br />Having spent more than an year in training on the newest technologies<br /> I am eager to get my hands on real projects.</p>
    </div>
    <img src={profile} alt="Profile" className='bg' />
   </section>
  )
}

export default Intro
