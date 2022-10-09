import React, { useRef }  from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

const Contact = () => {
    
    const form = useRef();
    
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bzc65qh",
        "template_r1sockq",
        form.current,
        "P6Lh430inzMnlatVN"
      )
      .then(
        (result) => {
        //     prompt("message envoyé", 'test');
        //   console.log(result.text);
        //   console.log("message sent");
        toast.success('Message envoyé', {
            position: toast.POSITION.TOP_RIGHT
        });
        e.target.reset()
        
    },
        (error) => {
            toast.error('Echec!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="form__container">
        <Form>
        <ToastContainer />
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <FormControl className='form__control'>
      <TextField required
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Sujet"
        name='subject'
      /></FormControl>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <FormControl className='form__control'>
      <TextField required
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Nom"
        name='from_name'
        type="text"
      /></FormControl>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <FormControl className='form__control'>
      <TextField required
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Email"
        name='email'
        type="email"
      /></FormControl>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <FormControl className='form__control'>
      <TextField required
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        name='message'
        type="text"
        label="Message"
      /></FormControl>
        </Form.Group>
    
      
      
      <Button className="custom__btn" variant="primary" type="submit" value="Send">
        Submit
      </Button>
      <ToastContainer />
      
      </Form>
      <div class="map__outer">
        <div class="gmap_canvas">
            <iframe
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Agronomic%20and%20Veterinary%20Institute,%20Rabat&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" scrolling="no" marginheight="0" 
            marginwidth="0"></iframe>
      </div></div>
    </form>
  )
}

export default Contact