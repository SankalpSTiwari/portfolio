import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './../styles.css';

const pillars = [
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    desc: 'Microservices, REST APIs, Spring Boot, FastAPI — building reliable services that scale.',
  },
  {
    icon: '🔀',
    title: 'Distributed Systems',
    desc: 'Kafka pipelines, Kubernetes clusters, high-throughput event processing at millions of events per day.',
  },
  {
    icon: '🤖',
    title: 'Applied AI',
    desc: 'LLM-powered platforms, RAG pipelines, agentic workflows, and structured-output generation.',
  },
];

const About = () => {
  return (
    <section id='about' className='about-section'>
      <Container>
        <h1 className='section-title'>About Me</h1>
        <Row className='justify-content-center'>
          <Col md={9} className='text-center'>
            <p className='about-bio'>
              I'm a Full Stack Software Engineer with 5+ years of experience building
              backend systems, distributed infrastructure, and AI-powered applications.
              My work spans high-throughput event streaming, microservices at scale, and
              LLM-driven engineering platforms — across fintech, research, and enterprise domains.
            </p>
            <p className='about-bio'>
              I'm comfortable across the full stack — from designing Kafka pipelines and
              Kubernetes deployments to shipping React frontends and integrating RAG-based AI
              workflows. I care about systems that are reliable, observable, and built to last.
            </p>
          </Col>
        </Row>
        <Row className='justify-content-center mt-5'>
          {pillars.map((p) => (
            <Col key={p.title} md={4} sm={12} className='mb-4'>
              <div className='about-pillar'>
                <div className='about-pillar-icon'>{p.icon}</div>
                <h3 className='about-pillar-title'>{p.title}</h3>
                <p className='about-pillar-desc'>{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
