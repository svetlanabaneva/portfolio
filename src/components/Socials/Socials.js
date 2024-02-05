import React from 'react'
import './socials.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
  faStackOverflow,
    faGithub,
    faLinkedin,
    faFigma
  } from "@fortawesome/free-brands-svg-icons";
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
    {
      icon: faFigma,
      url: "figma.com/@666179a9_4b46_4",
    },
  ];
const Socials = () => {
  return (
    <>
    <div className='links'>
    {socials.map(items =>{
        return (
          
            <a href={items.url} target="_blank"  rel="noreferrer">
                <FontAwesomeIcon icon={items.icon}  className='link' />
            </a>
          
            )
            })}
            </div>
            </>
  )
}

export default Socials
