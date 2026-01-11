import './index.scss';
import { Link, NavLink } from "react-router-dom";
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <Link className='logo' to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="logo" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true" 
          activeclassname="active" 
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink 
          exact="true" 
          activeclassname="about-link" 
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink 
          exact="true" 
          activeclassname="contact-link" 
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        <a 
          target='_blank' 
          rel='noreferrer' 
          href='https://www.linkedin.com/in/mandeep-bhandari-6a58312a6/'
          className='mobile-only'
        >
          <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
        </a>
        <a 
          target='_blank' 
          rel='noreferrer' 
          href='https://github.com/mandeep-bhandari123/'
          className='mobile-only'
        >
          <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
        </a>
        <a 
          target='_blank' 
          rel='noreferrer' 
          href='https://www.instagram.com/mandeep.bhandari/'
          className='mobile-only'
        >
          <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
        </a>
      </nav>

      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mandeep-bhandari-6a58312a6/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/mandeep-bhandari123/'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.instagram.com/mandeep.bhandari/'>
            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
          </a>
        </li>
      </ul>

      <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className='hamburger-icon' 
      />
      <FontAwesomeIcon 
        onClick={() => setShowNav(false)}
        icon={faTimes}
        color="#ffd700"
        size="3x"
        className='close-icon' 
      />
    </div>
  );
};

export default Sidebar;
