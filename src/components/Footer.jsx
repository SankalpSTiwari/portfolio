import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container
      fluid
      className='bg-body-secondary'
      id='contact'
      style={{ marginTop: '5vh' }}
    >
      <Row
        style={{ paddingTop: '1.5vh' }}
        className='d-flex align-items-center'
      >
        <Col style={{ fontSize: '1.75vw' }}>Sankalp's Developer Portfolio</Col>
        <Col>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a
                className='text-decoration-none'
                style={{ cursor: 'pointer', color: 'inherit' }}
                href='#'
              >
                Home
              </a>
            </li>
            <li>
              <a
                className='text-decoration-none'
                style={{ cursor: 'pointer', color: 'inherit' }}
                href='https://www.linkedin.com/in/tsankalp/'
                target='_blank'
                rel='noreferrer'
              >
                About
              </a>
            </li>
            <li>
              <a
                className='text-decoration-none'
                style={{ cursor: 'pointer', color: 'inherit' }}
                href='https://www.linkedin.com/in/tsankalp/'
                target='_blank'
                rel='noreferrer'
              >
                Services
              </a>
            </li>
            <li>
              <a
                className='text-decoration-none'
                style={{ cursor: 'pointer', color: 'inherit' }}
                href='pdf_qrcode.pdf'
                target='_blank'
                rel='noreferrer'
              >
                Contact{' '}
              </a>
            </li>
          </ul>
        </Col>
        <Col>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a
                className='text-decoration-none'
                style={{ cursor: 'pointer', color: 'inherit' }}
                href='https://www.linkedin.com/in/tsankalp/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn{' '}
              </a>
            </li>
            <li>
              <a
                className='text-decoration-none'
                style={{ cursor: 'pointer', color: 'inherit' }}
                href='https://www.facebook.com/sankalp.tiwari.7583'
                target='_blank'
                rel='noreferrer'
              >
                Facebook{' '}
              </a>
            </li>
            <li>
              <a
                className='text-decoration-none'
                style={{ cursor: 'pointer', color: 'inherit' }}
                href='https://www.instagram.com/sankalp__tiwari/'
                target='_blank'
                rel='noreferrer'
              >
                Instagram{' '}
              </a>
            </li>
            <li>
              <a
                className='text-decoration-none'
                style={{ cursor: 'pointer', color: 'inherit' }}
                href='https://t.snapchat.com/fX8jAcPB'
                target='_blank'
                rel='noreferrer'
              >
                Snapchat{' '}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row style={{ marginTop: '1vh' }} className='justify-content-center'>
        <Col className='text-center' style={{ cursor: 'default' }}>
          Copyright &#169; sankalpsportfolio.com | All rights reserved
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
