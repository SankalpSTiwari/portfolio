import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container
      fluid
      className='bg-body-secondary'
      id='contact'
      style={{ marginTop: '5vh' }}
    >
      <Row
        style={{ paddingTop: '1.75vh' }}
        className='d-flex align-items-center'
      >
        <Col style={{ fontSize: '1.75vh' }}>Sankalp's Developer Portfolio</Col>
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
          </ul>
        </Col>
        <Col>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a
                className='text-decoration-none'
                style={{ cursor: 'pointer', color: 'inherit' }}
                href='https://hihello.me/p/716715bb-8d16-4fd5-accc-1d1795ea34c0'
                target='_blank'
                rel='noreferrer'
              >
                Contact{' '}
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
                LinkedIn{' '}
              </a>
            </li>
            <li>
              <a
                className='text-decoration-none'
                style={{ cursor: 'pointer', color: 'inherit' }}
                href='https://github.com/SankalpSTiwari'
                target='_blank'
                rel='noreferrer'
              >
                Github{' '}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row style={{ marginTop: '1vh' }} className='justify-content-center'>
        <Col
          className='text-center'
          style={{ cursor: 'default', paddingBottom: '1vh' }}
        >
          Copyright &#169; work.sankalptiwari@gmail.com | {currentYear}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
