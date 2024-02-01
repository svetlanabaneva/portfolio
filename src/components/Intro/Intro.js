import React from 'react'
import './intro.css'

import profile from '../../assets/profile.JPG'

const Intro = () => {
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Hi,</span>
        <span className='introText'>I'm <span className='introName'>Svetlana</span><br />Frontend Developer</span>
        <p className='introPara'>I'm a skilled web developer bla bla bla bla</p>
    </div>
    <img src={profile} alt="Profile" className='bg' />
   </section>
  )
}

export default Intro
