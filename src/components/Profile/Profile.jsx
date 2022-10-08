import { Typography } from '@mui/material'
import MyTimeline from '../MyTimeline/MyTimeline'
import React from 'react'
import './Profile.css'
import {personalInfo} from '../../data/resumeData'
import CustomButton from '../CustomButton/CustomButton'
import DownloadIcon from '@mui/icons-material/Download';

const Profile = () => {
  return (
    <div className="profile container__shadow">
        <div className="profile__name">
            <Typography className='name'>nafissa atlagh</Typography>
            <Typography className='title'>Elève ingénieur en SGIT</Typography>
        </div>

        <figure className='profile__image'>
            <img src={require('../../assets/images/mypic.png')} alt="" />
        </figure>

        <div className="profile__info">
            <MyTimeline children={personalInfo}/>
            <div className="button__container">
            <CustomButton text = "Télécharge le CV" icon={<DownloadIcon/>}/>
            </div>
        </div>
    </div>
  )
}

export default Profile