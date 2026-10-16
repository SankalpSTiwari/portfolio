import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './../styles.css';

// To activate: create a free account at https://www.emailjs.com/
// Replace these with your EmailJS credentials:
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id='contact-form' className='contact-section'>
      <Container>
        <h1 className='section-title'>Get In Touch</h1>
        <Row className='justify-content-center'>
          <Col md={7}>
            <div className='contact-card'>
              {status === 'success' && (
                <Alert variant='success' className='mb-4'>
                  Message sent! I'll get back to you soon.
                </Alert>
              )}
              {status === 'error' && (
                <Alert variant='danger' className='mb-4'>
                  Something went wrong. Try emailing me directly at{' '}
                  <a href='mailto:work.sankalptiwari@gmail.com'>
                    work.sankalptiwari@gmail.com
                  </a>
                  .
                </Alert>
              )}
              <Form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label className='contact-label'>Name</Form.Label>
                      <Form.Control
                        type='text'
                        name='from_name'
                        placeholder='Your name'
                        required
                        className='contact-input'
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label className='contact-label'>Email</Form.Label>
                      <Form.Control
                        type='email'
                        name='from_email'
                        placeholder='your@email.com'
                        required
                        className='contact-input'
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='mb-3'>
                  <Form.Label className='contact-label'>Subject</Form.Label>
                  <Form.Control
                    type='text'
                    name='subject'
                    placeholder='What is this about?'
                    required
                    className='contact-input'
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label className='contact-label'>Message</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={5}
                    name='message'
                    placeholder='Your message...'
                    required
                    className='contact-input'
                  />
                </Form.Group>
                <div className='text-center'>
                  <Button
                    type='submit'
                    disabled={sending}
                    className='contact-submit-btn'
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={3} className='d-flex flex-column justify-content-center contact-links-col'>
            <div className='contact-link-item'>
              <span className='contact-link-icon'>📧</span>
              <a href='mailto:work.sankalptiwari@gmail.com' className='contact-link'>
                work.sankalptiwari@gmail.com
              </a>
            </div>
            <div className='contact-link-item'>
              <span className='contact-link-icon'>💼</span>
              <a
                href='https://linkedin.com/in/tsankalp'
                target='_blank'
                rel='noreferrer'
                className='contact-link'
              >
                linkedin.com/in/tsankalp
              </a>
            </div>
            <div className='contact-link-item'>
              <span className='contact-link-icon'>🐙</span>
              <a
                href='https://github.com/SankalpSTiwari'
                target='_blank'
                rel='noreferrer'
                className='contact-link'
              >
                github.com/SankalpSTiwari
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
