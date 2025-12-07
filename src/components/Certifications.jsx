import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMAGES from '../images';
import './../styles.css'; // Import your styles
const Certifications = () => {
  return (
    <Container id='certifications'>
      <Row className='certification-title'>
        <h1 className='section-title'>Certifications</h1>
      </Row>
      <Row>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            <Card.Body>
              <Card.Title>Python for Everybody Specialization</Card.Title>
              <Card.Text className='cert-text'>
                <div className='cert-provider'>
                  <img src={IMAGES.coursera} alt='Coursera' className='cert-logo-badge' />
                  <strong>Coursera</strong>
                </div>
                Issued Jun 2020
                <br /> Credential ID: Y6ZMLEFJU9GC
              </Card.Text>
              <Button
                className='certification-card-button'
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/specialization/certificate/Y6ZMLEFJU9GC'
                target='_blank'
              >
                Show credential
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            <Card.Body>
              <Card.Title>
                Business Metrics for Data-Driven Companies
              </Card.Title>
              <Card.Text className='cert-text'>
                <div className='cert-provider'>
                  <img src={IMAGES.coursera} alt='Coursera' className='cert-logo-badge' />
                  <strong>Coursera</strong>
                </div>
                Issued May 2020
                <br /> Credential ID: F8NX9XADAGAQ
              </Card.Text>
              <Button
                className='certification-card-button'
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/certificate/F8NX9XADAGAQ'
                target='_blank'
              >
                Show credential
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            <Card.Body>
              <Card.Title>Data Science Methodology</Card.Title>
              <Card.Text className='cert-text'>
                <div className='cert-provider'>
                  <img src={IMAGES.coursera} alt='Coursera' className='cert-logo-badge' />
                  <strong>Coursera</strong>
                </div>
                Issued March 2020
                <br /> Credential ID: AM49QJUDKKZW
              </Card.Text>
              <Button
                className='certification-card-button'
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/specialization/certificate/AM49QJUDKKZW'
                target='_blank'
              >
                Show credential
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            <Card.Body>
              <Card.Title>Open Source tools for Data Science</Card.Title>
              <Card.Text className='cert-text'>
                <div className='cert-provider'>
                  <img src={IMAGES.coursera} alt='Coursera' className='cert-logo-badge' />
                  <strong>Coursera</strong>
                </div>
                Issued March 2020
                <br /> Credential ID: NSW7RZ2Y9QMW
              </Card.Text>
              <Button
                className='certification-card-button'
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/specialization/certificate/NSW7RZ2Y9QMW'
                target='_blank'
              >
                Show credential
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            <Card.Body>
              <Card.Title>What is Data Science?</Card.Title>
              <Card.Text className='cert-text'>
                <div className='cert-provider'>
                  <img src={IMAGES.coursera} alt='Coursera' className='cert-logo-badge' />
                  <strong>Coursera</strong>
                </div>
                Issued Feb 2020
                <br /> Credential ID: 4LWR8PFSBNCN
              </Card.Text>
              <Button
                className='certification-card-button'
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/specialization/certificate/4LWR8PFSBNCN'
                target='_blank'
              >
                Show credential
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            <Card.Body>
              <Card.Title>Machine Learning - Stanford</Card.Title>
              <Card.Text className='cert-text'>
                <div className='cert-provider'>
                  <img src={IMAGES.coursera} alt='Coursera' className='cert-logo-badge' />
                  <strong>Coursera</strong>
                </div>
                Issued Aug 2019
                <br /> Credential ID: EYZP7U9XDSQ5
              </Card.Text>
              <Button
                className='certification-card-button'
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/specialization/certificate/EYZP7U9XDSQ5'
                target='_blank'
              >
                Show credential
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Certifications;
