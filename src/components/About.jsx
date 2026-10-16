import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Server, GitBranch, Brain } from 'lucide-react';
import './../styles.css';

const pillars = [
  {
    icon: <Server size={28} strokeWidth={1.75} />,
    title: 'Backend Engineering',
    desc: 'Microservices, REST APIs, Spring Boot, FastAPI — building reliable services that hold up under real load.',
  },
  {
    icon: <GitBranch size={28} strokeWidth={1.75} />,
    title: 'Distributed Systems',
    desc: 'Kafka pipelines, Kubernetes clusters, high-throughput event processing at millions of events per day.',
  },
  {
    icon: <Brain size={28} strokeWidth={1.75} />,
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
              I've spent the past 5 years building systems that handle real load — event pipelines
              at Intercontinental Exchange, trading infrastructure at Goldman Sachs, and research
              tooling at SJSU. I gravitate toward backend work: the part where a system either holds
              up under pressure or it doesn't.
            </p>
            <p className='about-bio'>
              These days I spend a lot of time at the intersection of distributed systems and AI —
              wiring LLMs into production pipelines, building RAG systems that actually stay
              accurate, and figuring out how to make agentic workflows reliable enough to ship.
              I'm comfortable from Kafka to React when the job calls for it.
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
