import React from 'react'
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap"
import {HomeRounded} from "@mui/icons-material"
import "bootstrap/dist/css/bootstrap.min.css"
import {Link, NavLink, withRouter} from 'react-router-dom'
import './Header.css'
import {socials} from "../../data/resumeData"
import CustomButton from "../CustomButton/CustomButton"

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className='header'>
      <Nav.Link as={NavLink} to="https://molaiea.github.io/myresume">
        <Navbar.Brand className='header__home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        
        <Nav className='header__nav'>
          {/* Resume */}
          <Nav.Link 
          as={NavLink} 
          to="https://molaiea.github.io/myresume" 
          className={pathName =='https://molaiea.github.io/myresume' ? "header__link__active" : "header__link"}>
          Resume</Nav.Link>
          {/* Portfolio */}
          {/* <Nav.Link 
          as={NavLink} 
          to="/portfolio" 
          className={pathName =='/portfolio' ? "header__link__active" : "header__link"}>
          Portfolio</Nav.Link> */}
          {/* Contact */}
          <Nav.Link 
          as={NavLink} 
          to="https://molaiea.github.io/myresume/contact_me" 
          className={pathName =='https://molaiea.github.io/myresume/contact_me' ? "header__link__active" : "header__link"}>
          Contactez-moi</Nav.Link>
        </Nav>
        <div className="header__right">
          {Object.keys(socials).map(key => (
            <a href={socials[key].link} target="blank">
              {socials[key].icon}
            </a>
          ))}
          {/* <CustomButton text={'Hire Me'} icon={<HomeRounded />} /> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;

