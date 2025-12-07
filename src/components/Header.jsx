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
    // Scroll to the element with id 'contact'
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });

      // Open the specified link in a new tab after scrolling
      setTimeout(() => {
        window.open(
          'https://hihello.me/p/716715bb-8d16-4fd5-accc-1d1795ea34c0',
          '_blank'
        );
      }, 2000); // Adjust the delay as needed
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
            <Nav.Link href='#services'>Skills</Nav.Link>
            <Nav.Link href='#experience'>About</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#certifications'>Certifications</Nav.Link>
            <Nav.Link onClick={handleContactClick}>Contact Me</Nav.Link>
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
