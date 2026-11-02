import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='footer'>
      <small>© 2025 Luis Adrián</small>
      <div className="social__network">
        <a href="https://github.com/Holiwiscach" className="icon rounded"><FaGithub /></a>
        <a href="" className="icon rounded"><FaLinkedin /></a>
      </div>
    </footer>
  )
}

export default Footer
