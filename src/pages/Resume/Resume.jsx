import React from 'react'
import './Resume.css'
import { Grid } from '@mui/material'
import {Typography} from '@mui/material'
import { CustomTimelineItem } from '../../components/MyTimeline/MyTimeline'
import MyTimeline from '../../components/MyTimeline/MyTimeline'
import SchoolIcon from '@mui/icons-material/School';
import {educationInfo, experienceInfo} from '../../data/resumeData'
import MySlider from '../../components/MySlider/MySlider'
import { sliderData } from '../../data/resumeData';
import Skill from '../../components/Skill/Skill'
import { skillsData } from '../../data/resumeData'
import { languageData } from '../../data/resumeData'
import { aboutMe } from '../../data/resumeData'
const Resume = () => {
  return (
    <>
    <Grid container className="section">
      <Grid item className='section__title'>
        <span></span>
        <h6>A propos de moi</h6>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' className='mt_10'>
          {aboutMe}
        </Typography>
      </Grid>
    </Grid>
    <Grid container className="section">
      <Grid item className='section__title mt_10'>
        <span></span>
        <h6 className='mt_20'>Education</h6>
      </Grid>
      <Grid item xs={12} className="mt_10">
        <Grid container>
          <Grid item sm={12} md={6}>
            <MyTimeline title={"Education"} icon={<SchoolIcon />} children={educationInfo}/>
          </Grid>
          <Grid item sm={12} md={6}>
          <MyTimeline title={"Expérience"} icon={<SchoolIcon />} children={experienceInfo}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid container className="section">
    <Grid item className='section__title'>
        <span></span>
        <h6>Parascolaire</h6>
      </Grid>
      <MySlider children={sliderData}/>
    </Grid>
    <Grid container className="section">
    <Grid item className='section__title mt_20'>
        <span></span>
        <h6 className='mt_20'>Compétences</h6>
      </Grid>
      <Grid container style={{'marginTop': '1rem'}}>
      {skillsData.map((item)=>(
        <Grid item xs={6} sm={4}>
        <Skill title={item.name} level={item.level}/>
        </Grid>
      ))}
      </Grid>
      
      
    </Grid>
    <Grid container className="section">
    <Grid item className='section__title'>
        <span></span>
        <h6 className='mt_20'>Langues</h6>
      </Grid>
      <Grid container style={{'marginTop': '1rem'}}>
      {languageData.map((item)=>(
        <Grid item xs={'auto'}>
        <Skill title={item.name} level={item.level} text={item.text}/>
        </Grid>
      ))}
      </Grid>
    </Grid>
    
    </>
    
  )
}

export default Resume