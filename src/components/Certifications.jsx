import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IMAGES from '../images';
import './../styles.css';

const certs = [
  {
    title: 'Python for Everybody Specialization',
    issued: 'Jun 2020',
    credentialId: 'Y6ZMLEFJU9GC',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/Y6ZMLEFJU9GC',
  },
  {
    title: 'Business Metrics for Data-Driven Companies',
    issued: 'May 2020',
    credentialId: 'F8NX9XADAGAQ',
    link: 'https://www.coursera.org/account/accomplishments/certificate/F8NX9XADAGAQ',
  },
  {
    title: 'Data Science Methodology',
    issued: 'Mar 2020',
    credentialId: 'AM49QJUDKKZW',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/AM49QJUDKKZW',
  },
  {
    title: 'Open Source Tools for Data Science',
    issued: 'Mar 2020',
    credentialId: 'NSW7RZ2Y9QMW',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/NSW7RZ2Y9QMW',
  },
  {
    title: 'What is Data Science?',
    issued: 'Feb 2020',
    credentialId: '4LWR8PFSBNCN',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/4LWR8PFSBNCN',
  },
  {
    title: 'Machine Learning — Stanford',
    issued: 'Aug 2019',
    credentialId: 'EYZP7U9XDSQ5',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/EYZP7U9XDSQ5',
  },
];

const Certifications = () => {
  return (
    <section id='certifications' className='cert-section'>
      <Container>
        <h1 className='section-title'>Certifications</h1>
        <Row className='justify-content-center g-4'>
          {certs.map((c) => (
            <Col key={c.credentialId} xs={12} sm={6} lg={4} className='d-flex'>
              <div className='cert-card'>
                <div className='cert-card-body'>
                  <div className='cert-provider'>
                    <img src={IMAGES.coursera} alt='Coursera' className='cert-logo-badge' />
                    <span className='cert-provider-name'>Coursera</span>
                  </div>
                  <h3 className='cert-title'>{c.title}</h3>
                  <p className='cert-meta'>
                    Issued {c.issued}
                    <br />
                    <span className='cert-id'>ID: {c.credentialId}</span>
                  </p>
                </div>
                <div className='cert-card-footer'>
                  <a
                    href={c.link}
                    target='_blank'
                    rel='noreferrer'
                    className='cert-btn'
                  >
                    Show credential ↗
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;
