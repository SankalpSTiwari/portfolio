import React from 'react';
import './../styles.css'; // Import your styles

const Header = () => {
  return (
    <header>
      <nav>
        <div className='left'>Sankalp's Portfolio</div>
        <div className='right'>
          <ul>
            <li>
              <a
                href='https://sankalpstiwari.github.io/portfolio/'
                target='_blank'
                rel='noopener noreferrer' // Adding rel attribute for security
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/tsankalp/'
                target='_blank'
                rel='noopener noreferrer'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/tsankalp/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='https://github.com/SankalpSTiwari'
                target='_blank'
                rel='noopener noreferrer'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='pdf_qrcode.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
