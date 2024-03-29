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
    <Container className='experience-container' id='experience'>
      <Row className='experiences-title'>
        <h1 className='section-title'>Work Experience</h1>
      </Row>
      <Row>
        <Col className='work-card-col d-flex justify-content-center' md={6}>
          <Card className='work-card'>
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
              <Card.Text className='work-card-text'>
                June 2020 - June 2022
                <br />
                Stetig Consulting,
                <br />
                Pune, India
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
        <Col className='work-card-col d-flex justify-content-center' md={6}>
          <Card className='work-card'>
            <Card.Img
              className='mx-auto mt-4 mb-2'
              variant='top'
              src={IMAGES.sjsuLogo}
              style={{ width: '180px', height: '180px' }}
            />
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>Student Assistant</Card.Title>
              <Card.Text className='work-card-text'>
                May 2023 - Present
                <br />
                San Jose State University Research Foundation
                <br />
                San Jose, CA, USA
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
      <Row className='experiences-title'>
        <h1 className='section-title'>Education</h1>
      </Row>

      <Carousel
        className='custom-carousel'
        variant='dark'
        keyboard={true}
        pause='hover'
      >
        <Carousel.Item interval={1800}>
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
        <Carousel.Item interval={2000}>
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
