import React from 'react';
import IMAGES from '../images';

const Skills = () => {
  return (
    <section id='services'>
      <div className='services container'>
        <div className='service-top'>
          <h1 className='section-title'>Skills</h1>
        </div>
        <div className='service-bottom'>
          <div className='service-item'>
            <div className='icon'>
              <img
                src={IMAGES.progLang}
                alt='Programming Languages Icon'
                style={{ width: '70px', height: '70px' }}
              />
            </div>
            <h2>Programming Languages</h2>
            <p>
              Java, JavaScript, TypeScript, Python, Go, Kotlin, Dart, C++, C
            </p>
          </div>
          <div className='service-item'>
            <div className='icon'>
              <img
                src={IMAGES.webTech}
                alt='Web Technologies Icon'
                style={{ width: '70px', height: '70px' }}
              />
            </div>
            <h2>Web Technologies</h2>
            <p>
              RESTful APIs, Node.js, GraphQL, Express.js, HTML, CSS, Tailwind
              CSS, Next.js, AJAX, LLM Integrations
            </p>
          </div>
          <div className='service-item'>
            <div className='icon'>
              <img
                src={IMAGES.frameworks}
                alt='Cloud Icon'
                style={{ width: '70px', height: '70px' }}
              />
            </div>
            <h2>Frameworks & Databases</h2>
            <p>
              React.js, Spring Boot, Flask, GCP, Django, Angular, Flutter, SQL,
              MongoDB, PostgreSQL, SQLite, MySQL
            </p>
          </div>
          <div className='service-item'>
            <div className='icon'>
              <img
                src={IMAGES.toolsServices}
                alt='Operating System and Database Icon'
                style={{ width: '70px', height: '70px' }}
              />
            </div>
            <h2>Tools & Services</h2>
            <p>
              Docker, Kubernetes, Apache Kafka, Git, Postman, AWS, Redis, Redux,
              OAuth, JWT, SonarQube, Agile, Firebase/Firestore, ElasticSearch,
              Databricks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
