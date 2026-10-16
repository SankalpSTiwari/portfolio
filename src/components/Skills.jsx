import React from 'react';
import IMAGES from '../images';
import './../styles.css'; // Import your styles

const Skills = () => {
  return (
    <section id='services'>
      <div className='services container'>
        <div>
          <h1 className='section-title'>Skills</h1>
        </div>
        <div className='service-bottom'>
          <div className='service-item'>
            <div className='icon'>
              <img
                className='skill-card'
                src={IMAGES.toolsServices}
                alt='Applied AI Icon'
              />
            </div>
            <h2>Applied AI</h2>
            <p>
              LLM Applications, Agentic Workflows, RAG, Structured Outputs, LLM Evaluation, Prompt Engineering, Machine Learning
            </p>
          </div>
          <div className='service-item'>
            <div className='icon'>
              <img
                className='skill-card'
                src={IMAGES.progLang}
                alt='Programming Languages Icon'
              />
            </div>
            <h2>Languages</h2>
            <p>
              Java, Python, Go, JavaScript, TypeScript, C++, SQL, Shell
            </p>
          </div>
          <div className='service-item'>
            <div className='icon'>
              <img
                className='skill-card'
                src={IMAGES.frameworks}
                alt='Frameworks Icon'
              />
            </div>
            <h2>Frameworks & Web</h2>
            <p>
              Spring Boot, FastAPI, Flask, Node.js, Express.js, React, Next.js, Redux, GraphQL, REST APIs
            </p>
          </div>
          <div className='service-item'>
            <div className='icon'>
              <img
                className='skill-card'
                src={IMAGES.webTech}
                alt='Distributed Systems Icon'
              />
            </div>
            <h2>Distributed Systems & Data</h2>
            <p>
              Kafka, Kubernetes, Docker, Redis, MongoDB, PostgreSQL, MySQL, Sybase, Stored Procedures
            </p>
          </div>
          <div className='service-item'>
            <div className='icon'>
              <img
                className='skill-card'
                src={IMAGES.frameworks}
                alt='Cloud Icon'
              />
            </div>
            <h2>Cloud & DevOps</h2>
            <p>
              AWS, GCP, Jenkins, GitLab CI/CD, SonarQube, Autosys, Git
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
