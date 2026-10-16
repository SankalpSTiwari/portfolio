import React from 'react';
import { useTheme } from '../ThemeContext';
import './../styles.css'; // Import your styles
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const handleContactClick = () => {
    const contactElement = document.getElementById('contact-form');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
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
          <Button
            variant='outline-primary'
            onClick={toggleTheme}
            className='theme-toggle-btn'
            aria-label='Toggle theme'
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
