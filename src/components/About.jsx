import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Server, GitBranch, Brain } from 'lucide-react';
import './../styles.css';

const pillars = [
  {
    icon: <Server size={28} strokeWidth={1.75} />,
    title: 'Backend Engineering',
    desc: 'Spring Boot, FastAPI, Python, Java — I default to backend. Most of my career has been services that process high volumes and can\'t go down.',
  },
  {
    icon: <GitBranch size={28} strokeWidth={1.75} />,
    title: 'Distributed Systems',
    desc: 'Kafka, Kubernetes, Redis. I\'ve built pipelines that move millions of events a day and had to debug them when something upstream goes sideways.',
  },
  {
    icon: <Brain size={28} strokeWidth={1.75} />,
    title: 'Applied AI',
    desc: 'Not demo AI — production AI. RAG pipelines that stay accurate, agentic workflows that are reliable enough to actually depend on, structured outputs at scale.',
  },
];

const About = () => {
  return (
    <section id='about' className='about-section scroll-animate'>
      <Container>
        <h1 className='section-title'>About Me</h1>
        <Row className='justify-content-center'>
          <Col md={9} className='text-center'>
            <p className='about-bio'>
              Started my career writing Java microservices at a consulting firm in Pune,
              then came to the US for a master's at SJSU. Since then I've worked at Goldman
              Sachs and Intercontinental Exchange — mostly backend, mostly under real load.
              Goldman was trading infrastructure: Kafka pipelines, Kubernetes, the kind of
              system where a bug at 3pm costs someone actual money.
            </p>
            <p className='about-bio'>
              ICE has been more AI-focused — RAG pipelines, agentic workflows, trying to
              make LLM systems reliable enough to depend on in a production financial context.
              That problem is harder than most demos suggest, which is what makes it worth
              working on. I'll pick up React or whatever else the job needs, but backend is
              where I default.
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
