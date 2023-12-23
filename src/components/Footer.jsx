import React from 'react';
import './../styles.css'; // Import your styles

const Footer = () => {
  const handleItemClick = (url, target) => {
    window.open(url, target);
  };

  return (
    <footer>
      <div className='footer'>
        <div className='footer-first'>
          <h3>Sankalp's Developer Portfolio</h3>
        </div>
        <div className='footer-second'>
          <ul>
            <li id='home' onClick={() => handleItemClick('#', '_self')}>
              Home
            </li>
            <li
              id='about'
              onClick={() =>
                handleItemClick(
                  'https://www.linkedin.com/in/tsankalp/',
                  '_blank'
                )
              }
            >
              About
            </li>
            <li
              id='services'
              onClick={() =>
                handleItemClick(
                  'https://www.linkedin.com/in/tsankalp/',
                  '_blank'
                )
              }
            >
              Services
            </li>
            <li
              id='contact'
              onClick={() => handleItemClick('pdf_qrcode.pdf', '_blank')}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className='footer-third'>
          <ul>
            <li
              id='linkedin'
              onClick={() =>
                handleItemClick(
                  'https://www.linkedin.com/in/tsankalp/',
                  '_blank'
                )
              }
            >
              LinkedIn
            </li>
            <li
              id='facebook'
              onClick={() =>
                handleItemClick(
                  'https://www.facebook.com/sankalp.tiwari.7583',
                  '_blank'
                )
              }
            >
              Facebook
            </li>
            <li
              id='instagram'
              onClick={() =>
                handleItemClick(
                  'https://www.instagram.com/sankalp__tiwari/',
                  '_blank'
                )
              }
            >
              Instagram
            </li>
            <li
              id='snapchat'
              onClick={() =>
                handleItemClick('https://t.snapchat.com/fX8jAcPB', '_blank')
              }
            >
              Snapchat
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-rights'>
        Copyright &#169; sankalpsportfolio.com | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
