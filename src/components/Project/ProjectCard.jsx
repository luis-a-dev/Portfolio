import React from 'react'
import './ProjectCard.css'
import { rippleEffect } from '../../helpers/animations'

import { FiGithub } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function ProjectCard({title, img, description, dev}) {
  return (
    <div className='project__card'>
        <div className='project__card__area'>
          <figure className='project__card__img'>
            <img src={img} alt={title} />
          </figure>
          <div className="project__card__info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <figure className='project__card__icon'>
          {
            dev.map( (skill, index) => (
              <img 
                key={skill.id} 
                src={skill.icon} 
                alt={skill.name} 
                aria-label={skill.name}
                style={{
                  left: `calc(var(--space__lg) + ${index * 1.75}rem)`,
                  zIndex: -index,
                }}
              />
            ))
          }
        </figure>
        <div className='project__card__action'>
          <button className='btn ripple' onClick={(e) => rippleEffect(e)}>
            <BsBoxArrowUpRight />
            Demo
          </button>
          <button className='btn ripple' onClick={(e) => rippleEffect(e)}>
            <FiGithub /> 
            Code
          </button>
        </div>
    </div>
  )
}
