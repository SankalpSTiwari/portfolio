import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import IMAGES from '../images';
import './../styles.css'; // Import your styles

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

const Hero = () => {
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
    <Container id='home' className='hero-container'>
      <Row>
        <Col className='hero-left' md={6}>
          <h1>
            Hi, my name is <span className='text-purple'>Sankalp</span>
          </h1>
          
          <h2 className='hero-subtitle'>
            Software Engineer — Full Stack
          </h2>
          
          <div className='typewriter-container'>
            <h2 style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '1.5rem',
              fontWeight: '600',
              minHeight: '60px',
              marginBottom: '3vh'
            }}>
              <TypewriterComponent
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  strings: [
                    'Building Distributed & Scalable Systems',
                    'Crafting AI/LLM Solutions',
                    'Developing Real-time Applications',
                    'Engineering Cloud-Native Platforms',
                  ],
                }}
              />
            </h2>
          </div>

          <div className='buttons mt-4'>
            <Button
              className='hero-left-button'
              variant='dark'
              onClick={downloadResume}
            >
              View Resume
            </Button>

            <Button
              className='hero-left-button'
              variant='dark'
              onClick={openGithubLink}
            >
              Visit Github
            </Button>
          </div>
        </Col>
        <Col className='hero-right' md={6}>
          <Image
            src={IMAGES.sankalpProfile2}
            className='pulsating-image'
            style={{ width: '300px', height: '300px' }}
            roundedCircle
            thumbnail
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
