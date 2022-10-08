import React from 'react'
import Button from '@mui/material/Button';
import './CustomButton.css'
import CV from '../../assets/myresume.pdf'

const downloadFile = () => {
  window.location.href = '../../assets/myresume.pdf'
}

const CustomButton = ({text, icon}) => {
  return (
    <a href={CV} download >
      <Button className='custom__btn'
    endIcon={icon ? <div className='btn__icon__container'>{icon}</div> : null }>
      <span className='btn__text'>{text}</span>
    </Button>
    </a>
  )
}

export default CustomButton