import { Typography } from '@mui/material'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <Typography className="footer__left footer__name">
        Nafissa Atlagh
      </Typography>
      <Typography className="footer__right footer__copyright">
       <div>Copyright©2022 Developped by: 
        <a className="github" href="https://github.com/molaiea">Nafissa Atlagh</a></div> 
      <div>
      Design Inspiration : <a className="github" href='https://elements.envato.com/mat-vcard-resume-template-MZ6RFJ9'>tavonline.</a>
        </div> 
      </Typography>
    </div>
  )
}

export default Footer