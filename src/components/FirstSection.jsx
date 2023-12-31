import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import IMAGES from '../images';
import './../styles.css'; // Import your styles

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

const FirstSection = () => {
  const downloadResume = () => {
    // Implement the download resume logic
    window.open(
      'https://docs.google.com/document/d/10_JS7j1Hll73AX4hiq_Jt0V0DvWIYPLe222mzFUiiVg/edit?usp=sharing'
    );
  };

  const openGithubLink = () => {
    // Implement the logic to open the GitHub link in a new tab
    window.open('https://github.com/SankalpSTiwari');
  };

  return (
    <Container style={{ marginBottom: '22vh', marginTop: '22vh' }}>
      <Row>
        <Col
          md={6}
          className='leftSection text-center'
          style={{ marginTop: '10vh' }}
        >
          <h1>
            Hi, my name is{' '}
            <span className='text-purple' style={{ color: 'purple' }}>
              Sankalp
            </span>
          </h1>
          <h1>and I am passionate</h1>
          <div className='typewriter-container'>
            <h1 style={{ color: 'purple', marginBottom: '4vh' }}>
              <TypewriterComponent
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [
                    'Web Developer',
                    'ML Enthusiast',
                    'Software Engineer',
                  ],
                }}
              />
            </h1>
          </div>

          <div className='buttons mt-4'>
            <Button
              variant='dark'
              onClick={downloadResume}
              style={{ marginRight: '10px' }}
            >
              View Resume
            </Button>
            <Button variant='dark' onClick={openGithubLink}>
              Visit Github
            </Button>
          </div>
        </Col>
        <Col
          md={6}
          className='rightSection text-center'
          style={{ marginTop: '20px' }}
        >
          <Image
            src={IMAGES.sankalpProfile}
            className='pulsating-image'
            width='300px'
            roundedCircle
            thumbnail
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FirstSection;
