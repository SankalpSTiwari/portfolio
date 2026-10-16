import React from 'react';
import { useTheme } from '../ThemeContext.jsx';
import './../styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleContactClick = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar expand='lg' className='custom-navbar' fixed='top'>
      <Container>
        <Navbar.Brand className='navbar-brand-custom' style={{ cursor: 'default' }}>
          Sankalp's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#services'>Skills</Nav.Link>
            <Nav.Link href='#experience'>Experience</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#certifications'>Certifications</Nav.Link>
            <Nav.Link onClick={handleContactClick}>Contact</Nav.Link>
          </Nav>

          {/* Pill toggle */}
          <button
            className={`theme-pill-toggle${theme === 'dark' ? ' is-dark' : ''}`}
            onClick={toggleTheme}
            aria-label='Toggle theme'
          >
            <span className='pill-sun'>☀️</span>
            <span className='pill-thumb' />
            <span className='pill-moon'>🌙</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
