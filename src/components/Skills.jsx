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
                src={IMAGES.progLang}
                alt='Programming Languages Icon'
              />
            </div>
            <h2>Languages</h2>
            <p>
              Java, Python, Go, JavaScript, TypeScript, C++, HTML, CSS, Shell, Perl, Groovy
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
            <h2>Frameworks & Libraries</h2>
            <p>
              Spring Boot, React.js, Node.js, Next.js, Angular, Express.js, Redux, Flask, Django, GraphQL
            </p>
          </div>
          <div className='service-item'>
            <div className='icon'>
              <img
                className='skill-card'
                src={IMAGES.webTech}
                alt='Database Icon'
              />
            </div>
            <h2>Databases & Data Technologies</h2>
            <p>
              PostgreSQL, MySQL, MongoDB, Sybase, Firebase, SQL, NoSQL, Stored Procedures
            </p>
          </div>
          <div className='service-item'>
            <div className='icon'>
              <img
                className='skill-card'
                src={IMAGES.toolsServices}
                alt='Tools Icon'
              />
            </div>
            <h2>Tools & Technologies</h2>
            <p>
              Apache Kafka, Zookeeper, Autosys, Docker, Kubernetes, Redis, Git, Jenkins, SonarQube, Postman, FTP
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
            <h2>Cloud & Infrastructure</h2>
            <p>
              Amazon Web Services (AWS), Google Cloud Platform (GCP), VMware, On-prem Systems, CI/CD Pipelines
            </p>
          </div>
          <div className='service-item'>
            <div className='icon'>
              <img
                className='skill-card'
                src={IMAGES.toolsServices}
                alt='Other Skills Icon'
              />
            </div>
            <h2>Other</h2>
            <p>
              REST APIs, Agile, API Gateway, Load Balancers, JWT, Salesforce, Jira, Confluence, Machine Learning, LLM/AI Integration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
