import React from 'react';
import IMAGES from '../images';
import './../styles.css'; // Import your styles

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SecondSection = () => {
  return (
    <Container id='experience' style={{ marginBottom: '5vh' }}>
      <Row style={{ marginBottom: '2vh' }}>
        <h4 style={{ fontSize: '2.5vh' }}>What I have done so far</h4>
        <h1 style={{ fontSize: '5.5vh', fontWeight: 'bold' }}>
          Work Experience
        </h1>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem', height: '420px' }}>
            <Card.Img
              className='mx-auto mt-4 mb-2'
              variant='top'
              src={IMAGES.rcoemLogo}
              style={{ width: '150px', height: '180px' }}
            />
            <Card.Body>
              <Card.Title>
                Bachelor's in Information Technology (2016 - 2020)
              </Card.Title>
              <Card.Text>
                Shri Ramdeobaba College of Engineering and Management, Nagpur,
                India
              </Card.Text>
              <Button
                variant='secondary'
                href='http://www.rknec.edu/'
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
            <Card.Body>
              <Card.Title>Software Engineer (2020 - 2022)</Card.Title>
              <Card.Text style={{ marginBottom: '60px' }}>
                Stetig Consulting, Pune, India{' '}
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
            <Card.Body>
              <Card.Title>
                Master's in Software Engineering (2022 - 2024)
              </Card.Title>
              <Card.Text style={{ marginBottom: '35px' }}>
                San Jose State University, California, USA
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
    </Container>

    // <section className='secondSection'>
    //   <span className='text-grey'>What I have done so far</span>
    //   <h1>Work Experience</h1>

    //   <div className='box'>
    //     <div className='vertical'>
    //       <img className='image-top' src={IMAGES.degree} alt='Degree' />
    //       <div className='vertical-title'>
    //         Bachelor's in Information Technology (2016 - 2020)
    //       </div>
    //       <div className='vertical-desc'>
    //         Shri Ramdeobaba College of Engineering and Management, Nagpur,
    //         India
    //       </div>
    //     </div>
    //     <div className='vertical'>
    //       <img className='image-top' src={IMAGES.developer2} alt='Developer' />
    //       <div className='vertical-title'>Software Engineer (2020 - 2022)</div>
    //       <div className='vertical-desc'>Stetig Consulting, Pune, India</div>
    //     </div>
    //     <div className='vertical'>
    //       <img className='image-top' src={IMAGES.degree} alt='Degree' />
    //       <div className='vertical-title'>
    //         Master's in Software Engineering (2022 - 2024)
    //       </div>
    //       <div className='vertical-desc'>
    //         San Jose State University, California, USA
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default SecondSection;
