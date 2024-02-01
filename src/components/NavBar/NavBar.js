import React, { useState, useRef, useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/logo5.png'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState ()
  const headerRef = useRef(null);


  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
  
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <nav id='navbar' ref={headerRef}>

      <Link activeClass='active' to='intro' spy={false} smooth={true} offset={-100} duration={500}><img src={logo} alt='Logo' className='logo' /></Link>      <div className='desktopMenu' >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'><span className='contactBold'>Contact me</span></Link>
      </div>
      {/*<button className='desktopMenuBtn'  onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={contact} alt= '' className='desktopMenuImg' /> Contact Me
    </button>*/}

      <FontAwesomeIcon icon={faBars} style={{color: "#FF004F",}} className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}} >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar
