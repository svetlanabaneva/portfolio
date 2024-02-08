import React from 'react'
import './projects.css'
import Portfolio1 from '../../assets/work-1.jpg'
import Portfolio2 from '../../assets/work-2.png'
import Portfolio3 from '../../assets/work-3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";


const Projects = () => {
  return (
    <section id='portfolio'>
      <h2 className='projectsTitle'>My Projects</h2>
       <div className='projectsList'>
          <div className='projects' >
              <img src={Portfolio1} alt='Portfolio1' className='projectsImg' />
              <div className='projectDesc'>
                <h3>Little Lemon Restaurant</h3>
                <p>Little Lemon Restaurant, Capstone final Project was part of my Frontend Developer Professional Certification in Coursera, powered by Meta</p>
                <a href='https://restaurant.svetlanabaneva.com/' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              </div>
          </div>
          <div className='projects'>
              <img src={Portfolio2} alt='Portfolio2' className='projectsImg' />
              <div className='projectDesc'>
                <h3>To Do React App</h3>
                <p>A todo list web app, built with ReactJS and localStorage</p>
                <a href="https://todolistbaneva.netlify.app/" rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              </div>
          </div>
          <div className='projects'>
            <img src={Portfolio3} alt='Portfolio2' className='projectsImg' />
            <div className='projectDesc'>
              <h3>Lorem App</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum auctor tellus, et blandit purus tempor nec.</p>
              <a href='./' rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </div>
          </div>
        </div>
      <Link to="#" className='projectsBtn'>See more</Link>
    </section>
  )
}

export default Projects
