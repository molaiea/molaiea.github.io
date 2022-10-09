import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './MySlider.css'
const MySlider = ({children}) => {
  return (
    <Carousel fade className='carousel'>

      {children.map((item) => (
        <Carousel.Item interval= {2000} className='carousel__item'>
        <div className='image__container'>
        <img
          className="d-block w-100 carousel__img"
          src={item.img}
          alt={item.title}
        />
        </div>
        
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
    </Carousel>
  )
}


export default MySlider