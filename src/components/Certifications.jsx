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
    <Container id='certifications' style={{ marginBottom: '5vh' }}>
      <Row style={{ marginBottom: '2vh' }}>
        <h1 style={{ fontSize: '5.5vh', fontWeight: 'bold' }}>
          My Certifications
        </h1>
      </Row>
      <Row>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Img
              className='certification-card-img'
              variant='top'
              src={IMAGES.coursera}
            />
            <Card.Body>
              <Card.Title>Python for Everybody Specialization</Card.Title>
              <Card.Text style={{ color: 'dimgray' }}>
                <strong>Coursera</strong>
                <br /> Issued Jun 2020
                <br /> Credential ID: Y6ZMLEFJU9GC
              </Card.Text>
              <Button
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/specialization/certificate/Y6ZMLEFJU9GC'
                target='_blank'
                style={{
                  margin: 'auto',
                  display: 'block',
                }}
              >
                Show credential
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Img
              className='certification-card-img'
              variant='top'
              src={IMAGES.coursera}
            />
            <Card.Body>
              <Card.Title>
                Business Metrics for Data-Driven Companies
              </Card.Title>
              <Card.Text style={{ color: 'dimgray' }}>
                <strong>Coursera</strong>
                <br /> Issued May 2020
                <br /> Credential ID: F8NX9XADAGAQ
              </Card.Text>
              <Button
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/certificate/F8NX9XADAGAQ'
                target='_blank'
                style={{
                  margin: 'auto',
                  display: 'block',
                }}
              >
                Show credential
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Img
              className='certification-card-img'
              variant='top'
              src={IMAGES.coursera}
            />
            <Card.Body>
              <Card.Title>Data Science Methodology</Card.Title>
              <Card.Text style={{ color: 'dimgray', paddingTop: '24px' }}>
                <strong>Coursera</strong>
                <br /> Issued March 2020
                <br /> Credential ID: AM49QJUDKKZW
              </Card.Text>
              <Button
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/specialization/certificate/AM49QJUDKKZW'
                target='_blank'
                style={{
                  margin: 'auto',
                  display: 'block',
                }}
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
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Img
              className='certification-card-img'
              variant='top'
              src={IMAGES.coursera}
            />
            <Card.Body>
              <Card.Title>Open Source tools for Data Science</Card.Title>
              <Card.Text style={{ color: 'dimgray', paddingTop: '22px' }}>
                <strong>Coursera</strong>
                <br /> Issued March 2020
                <br /> Credential ID: NSW7RZ2Y9QMW
              </Card.Text>
              <Button
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/specialization/certificate/NSW7RZ2Y9QMW'
                target='_blank'
                style={{
                  margin: 'auto',
                  display: 'block',
                }}
              >
                Show credential
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Img
              className='certification-card-img'
              variant='top'
              src={IMAGES.coursera}
            />
            <Card.Body>
              <Card.Title>What is Data Science?</Card.Title>
              <Card.Text style={{ color: 'dimgray', paddingTop: '22px' }}>
                <strong>Coursera</strong>
                <br /> Issued Feb 2020
                <br /> Credential ID: 4LWR8PFSBNCN
              </Card.Text>
              <Button
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/specialization/certificate/4LWR8PFSBNCN'
                target='_blank'
                style={{
                  margin: 'auto',
                  display: 'block',
                }}
              >
                Show credential
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3 d-flex justify-content-center'>
          <Card className='certification-card'>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Img
              className='certification-card-img'
              variant='top'
              src={IMAGES.coursera}
            />
            <Card.Body>
              <Card.Title>Machine Learning - Stanford</Card.Title>
              <Card.Text style={{ color: 'dimgray', paddingTop: '22px' }}>
                <strong>Coursera</strong>
                <br /> Issued Aug 2019
                <br /> Credential ID: EYZP7U9XDSQ5
              </Card.Text>
              <Button
                variant='primary'
                href='https://www.coursera.org/account/accomplishments/specialization/certificate/EYZP7U9XDSQ5'
                target='_blank'
                style={{
                  margin: 'auto',
                  display: 'block',
                }}
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
