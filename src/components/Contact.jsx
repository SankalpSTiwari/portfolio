import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { Mail, Link, GitBranch, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './../styles.css';

const EMAILJS_SERVICE_ID  = 'service_x3vsl18';
const EMAILJS_TEMPLATE_ID = 'template_iuhnad9';
const EMAILJS_PUBLIC_KEY  = 'VRxYUUdw9AJE9fbiP';

const contactLinks = [
  {
    icon: <Mail size={20} strokeWidth={1.75} />,
    label: 'Email',
    display: 'work.sankalptiwari@gmail.com',
    href: 'mailto:work.sankalptiwari@gmail.com',
  },
  {
    icon: <Link size={20} strokeWidth={1.75} />,
    label: 'LinkedIn',
    display: 'linkedin.com/in/tsankalp',
    href: 'https://linkedin.com/in/tsankalp',
  },
  {
    icon: <GitBranch size={20} strokeWidth={1.75} />,
    label: 'GitHub',
    display: 'github.com/SankalpSTiwari',
    href: 'https://github.com/SankalpSTiwari',
  },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus]   = useState(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => { setStatus('success'); form.current.reset(); })
      .catch(() => setStatus('error'))
      .finally(() => setSending(false));
  };

  return (
    <section id='contact-form' className='contact-section'>
      <Container>
        <h1 className='section-title'>Get In Touch</h1>

        <Row className='contact-layout g-4 justify-content-center'>

          {/* ── Left: info + links ── */}
          <Col md={4} className='d-flex flex-column'>
            <div className='contact-info-panel'>
              <h2 className='contact-info-heading'>Let's talk</h2>
              <p className='contact-info-body'>
                Open to new roles, collaborations, or just a conversation about
                distributed systems or AI. Drop a message and I'll get back within a day.
              </p>
              <div className='contact-link-list'>
                {contactLinks.map((c) => (
                  <a key={c.label} href={c.href} target='_blank' rel='noreferrer' className='contact-link-row'>
                    <span className='contact-link-icon-wrap'>{c.icon}</span>
                    <span className='contact-link-text'>
                      <span className='contact-link-label'>{c.label}</span>
                      <span className='contact-link-value'>{c.display}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* ── Right: form ── */}
          <Col md={7} className='d-flex flex-column'>
            <div className='contact-form-panel'>
              {status === 'success' && (
                <Alert variant='success' className='mb-4'>
                  Message sent — I'll get back to you soon.
                </Alert>
              )}
              {status === 'error' && (
                <Alert variant='danger' className='mb-4'>
                  Something went wrong. Email me directly at{' '}
                  <a href='mailto:work.sankalptiwari@gmail.com'>work.sankalptiwari@gmail.com</a>.
                </Alert>
              )}
              <Form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col sm={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label className='contact-label'>Name</Form.Label>
                      <Form.Control type='text' name='from_name' placeholder='Your name' required className='contact-input' />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label className='contact-label'>Email</Form.Label>
                      <Form.Control type='email' name='from_email' placeholder='your@email.com' required className='contact-input' />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='mb-3'>
                  <Form.Label className='contact-label'>Subject</Form.Label>
                  <Form.Control type='text' name='subject' placeholder='What is this about?' required className='contact-input' />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label className='contact-label'>Message</Form.Label>
                  <Form.Control as='textarea' rows={5} name='message' placeholder='Your message...' required className='contact-input' />
                </Form.Group>
                <button type='submit' disabled={sending} className='contact-submit-btn'>
                  {sending ? 'Sending…' : <><Send size={16} style={{ marginRight: 8 }} />Send Message</>}
                </button>
              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;
