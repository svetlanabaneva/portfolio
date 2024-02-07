import React from 'react'
import './skills.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faMobileScreenButton, faObjectGroup} from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills</span>
        <div className='skillBars'>

            <div className='skillBar'>
                <FontAwesomeIcon icon={faObjectGroup}className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                </div>
            </div>

            <div className='skillBar'>
                <FontAwesomeIcon icon={faCode} className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Frontend Development</h2>
                </div>
            </div>

            <div className='skillBar'>
                <FontAwesomeIcon icon={faMobileScreenButton} className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Development</h2>
                </div>
            </div>
    </div>
    </section>
  )
}
export default Skills;