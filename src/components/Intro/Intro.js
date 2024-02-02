import { React, useState, useEffect } from 'react'
import './intro.css'

import profile from '../../assets/profile.JPG'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Intro = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'S', 'v', 'e', 't', 'l', 'a', 'n', 'a']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
    return () => clearTimeout(timer);
}, [])
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className='introText'>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i, </span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
            />
        <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
        </span>
        <p className='introPara'>I am a motivated and self-driven front end developer, re-entering the field. <br />After a long break invested in my family I am ready for new challenges.<br />Having spent more than an year in training on the newest technologies<br /> I am eager to get my hands on real projects.</p>
    </div>
    <img src={profile} alt="Profile" className='bg' />
   </section>
  )
}

export default Intro
