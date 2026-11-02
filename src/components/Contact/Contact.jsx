import React from 'react'
import './Contact.css'
import { rippleEffect } from '../../helpers/animations'

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <section id='contact' className='contact'>
      <h2>Contactame</h2>
      <p className='lead'>Si tienes un proyecto en mente y deseas hacerlo realidad. Sientete libre de contactarme.</p>
      <div className='contact__me'>
        <div className='contact__container'>
            <form action="">
                <div className="contact__column">
                    <div className='contact__box'>
                        <label htmlFor="name">Nombre</label>
                        <input id='name' name='name' type="text" placeholder='Tu nombre' required/>
                    </div>
                    <div className='contact__box'>
                        <label htmlFor="email">Correo</label>
                        <input id='email' name='email' type="text" placeholder='Tu correo' required/>
                    </div>
                </div>
                <div className='contact__box'>
                    <label htmlFor="subject">Asunto</label>
                    <input id='subject' name='subject' type="text" placeholder='Asunto' required/>
                </div>
                <div className='contact__box'>
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message" placeholder='Escribe tu mensaje' required></textarea>
                </div>
                <button className='btn ripple contact__box' onClick={(e) => rippleEffect(e)} type='submit'>
                    Envíar mensaje
                </button>
            </form>
        </div>
        <address className='contact__info'>
            <div className="contact__container">
                <div className='contact__icon rounded'>
                    <MdEmail />
                </div>
                <div className='contact__box'>
                    <span className='contact__label'>email</span>
                    <p>email@example.com</p>
                </div>

            </div>
            <div className="contact__container">
                <div className="contact__icon rounded">
                    <FaPhoneAlt />
                </div>
                <div className='contact__box'>
                    <span className='contact__label'>phone</span>
                    <p>+21 123 1223</p>
                </div>
            </div>
            <div className="contact__container">
                <div className="contact__icon rounded">
                    <FaLocationDot />
                </div>
                <div className='contact__box'>
                    <span className='contact__label'>location</span>
                    <p>city, country</p>
                </div>
            </div>
        </address>
      </div>
    </section>
  )
}

export default Contact
