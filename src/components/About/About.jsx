import React, { useRef } from 'react'
import './About.css'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { rippleEffect } from '../../helpers/animations'

import { IoDocumentTextOutline } from "react-icons/io5";

function About() {


  const ref = useRef()
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.5
  })
  return (
    <section id='about' className='about' ref={ref}>
      <h2>Acerca de mí</h2>
      <div className='about__container'>
        <figure className={`about__img ${isVisible ? 'fade__in' : ''}`}>
          <img alt="Foto de Luis Adrián" />
        </figure>
        <div className={`about__me ${isVisible ? 'fade__in' : ''}`}>
          <h3>Quién soy</h3>
          <p>Soy de Zacatecas y me dedico al desarrollo de sistemas web y en  aplicaciones móviles. Mi objetivo es transformar ideas en realidad a través del código y expandir mis habilidades y conocimientos. Si tienes alguna idea, no dudes en contactarme.</p>
          <button className='btn ripple' onClick={(e) => rippleEffect(e)}><IoDocumentTextOutline /> Descargar CV</button>
        </div>
      </div>
    </section>
  )
}

export default About
