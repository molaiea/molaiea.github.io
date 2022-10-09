import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import './Skill.css'
const Skill = ({title, level, text}) => {
  return (
    
         <div>
            {text ? <div> 
            <div className="language__container">
            <span className='m_10 skill__title'>{title}</span>
                <span className='m_10 language__level'>{text}</span>
            </div>
            
            <LinearProgress color="secondary" variant="determinate" value={level} className="m_10"/>
            </div> : <div>
            <span className='m_10 skill__title'>{title}</span>
            <LinearProgress color="secondary" variant="determinate" value={level} className="m_10"/></div>}
         </div>
  )
}

export default Skill