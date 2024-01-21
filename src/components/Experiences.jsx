import React from 'react';
import IMAGES from '../images';
import './../styles.css'; // Import your styles

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Carousel from 'react-bootstrap/Carousel';

const Experiences = () => {
  return (
    <Container id='experience' style={{ marginBottom: '5vh' }}>
      <Row style={{ marginBottom: '2vh' }}>
        <h4 style={{ fontSize: '2.5vh' }}>What I have done so far</h4>
      </Row>
      <Row style={{ marginBottom: '2vh' }}>
        <h1 style={{ fontSize: '5.5vh', fontWeight: 'bold' }}>
          Work Experience
        </h1>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem', height: '420px' }}>
            <Card.Img
              className='mx-auto'
              variant='top'
              src={IMAGES.stetigLogo}
              style={{
                width: '200px',
                height: '90px',
                marginTop: '60px',
                marginBottom: '60px',
              }}
            />
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>Software Engineer</Card.Title>
              <Card.Text style={{ marginBottom: '60px' }}>
                June 2020 - June 2022 <br />
                Stetig Consulting, Pune, India
              </Card.Text>
              <Button
                variant='secondary'
                href='https://stetig.in/'
                target='_blank'
              >
                Visit site
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '420px' }}>
            <Card.Img
              className='mx-auto mt-4 mb-2'
              variant='top'
              src={IMAGES.sjsuLogo}
              style={{ width: '180px', height: '180px' }}
            />
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>Student Assistant</Card.Title>
              <Card.Text style={{ marginBottom: '35px' }}>
                May 2023 - Present <br />
                Office of Research, San Jose State University
              </Card.Text>
              <Button
                variant='secondary'
                href='https://www.sjsu.edu/'
                target='_blank'
              >
                Visit site
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: '2vh' }}>
        <h1 style={{ fontSize: '5.5vh', fontWeight: 'bold' }}>Education</h1>
      </Row>

      <Carousel className='custom-carousel' variant='dark' keyboard={true}>
        <Carousel.Item>
          <img
            className='first-slide carousel-image'
            src={IMAGES.rcoemLogo}
            alt='Bachelors College'
          />
          <Carousel.Caption className='carousel-caption'>
            <h3> Bachelor's in Information Technology</h3>
            <h4>2016 - 2020</h4>
            <p>
              Shri Ramdeobaba College of Engineering and Management, Nagpur,
              India
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='second-slide carousel-image'
            src={IMAGES.sjsuLogo}
            alt='Masters College'
          />

          <Carousel.Caption className='carousel-caption'>
            <h3> Master's in Software Engineering</h3>
            <h4>2022 - 2024</h4>
            <p> San Jose State University, California, USA</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Experiences;
