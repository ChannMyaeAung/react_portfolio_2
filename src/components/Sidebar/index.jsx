import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
          <img src={LogoS} alt="logo" />
          <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
          </NavLink>

          <NavLink exact="true" activeclassname="active" to="/about" className='about-link'>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
          </NavLink>

          <NavLink exact="true" activeclassname="active" to="/contact" className='contact-link'>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
          </NavLink>
        </nav>

        <ul>
          <li>
            <a 
              target="_blank" 
              rel='noreferrer' 
              href='https://www.linkedin.com/in/chan-myae-aung-4434b9157/'>
              <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"/>
            </a>
          </li>

          <li>
            <a 
              target="_blank" 
              rel='noreferrer' 
              href='https://github.com/ChannMyaeAung'>
              <FontAwesomeIcon icon={faGithub} color="4d4d4e"/>
            </a>
          </li>

          <li>
            <a 
              target="_blank" 
              rel='noreferrer' 
              href='skype:live:.cid.3f6dbf13a379a8f6'>
              <FontAwesomeIcon icon={faSkype} color="4d4d4e"/>
            </a>
          </li>

          <li>
            <a 
              target="_blank" 
              rel='noreferrer' 
              href='https://www.youtube.com/channel/UCw_PE6M1qgX4Ly9H8eIGuPQ'>
              <FontAwesomeIcon icon={faYoutube} color="4d4d4e"/>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar