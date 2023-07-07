import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {MdDoneOutline} from 'react-icons/md'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }
  if(modal){
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (name !== "" && email !== "" && message !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, email, message]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_64odtme', 'template_g44uyd9', form.current, '1hGdxWlXLDDNqVltZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option contact__option-em'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>madhukad01@gmail.com</h5>
            <a href="mailto:madhukad01@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option contact__option-me'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Madhuka Dilshan</h5>
            <a href="https://m.me/madhuka.dishan/" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option contact__option-wa'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+94 77 693 1916</h5>
            <a href="https://wa.me/+94776931916" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="">Your full name</label>
          <input type="text" name='name' value={name} onChange={handleNameChange} required/>
          <label htmlFor="">Your email</label>
          <input type="email" name='email' value={email} onChange={handleEmailChange} required/>
          <label htmlFor="">Your message</label>
          <textarea rows="7" name='message' value={message} onChange={handleMessageChange} required></textarea>
          <button onClick={toggleModal} disabled={buttonDisabled} type='submit' className='btn btn-primary'>Send Message</button>
          {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay">
            <div className="modal__content">
              <MdDoneOutline className='popup__icon'/>
              <h2>Thank You!</h2>
              <h5>Got your message. I'll get back to you soon!</h5>
              <button className='close__modal' onClick={toggleModal}>Close</button>
            </div>
            </div>
            
          </div>
          )}
          
        </form>
      </div>
    </section>
  )
}

export default Contact