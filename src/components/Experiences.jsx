import React from 'react';
import IMAGES from '../images';
import './../styles.css';
import { Container, Carousel } from 'react-bootstrap';
import { useTheme } from '../ThemeContext.jsx';

const experiences = [
  {
    logo: IMAGES.iceLogo,
    initials: 'ICE',
    title: 'Software Engineer',
    period: 'Feb 2026 – Present',
    company: 'Intercontinental Exchange',
    location: 'Atlanta, GA, USA',
    link: 'https://www.theice.com/',
    tags: ['Python', 'LLMs', 'RAG', 'Agentic AI', 'Kafka', 'FastAPI'],
    current: true,
  },
  {
    logo: IMAGES.goldmanSachsLogo,
    initials: 'GS',
    title: 'Software Engineer 2',
    period: 'Oct 2024 – Dec 2025',
    company: 'Goldman Sachs',
    location: 'New York, NY, USA',
    link: 'https://www.goldmansachs.com/',
    tags: ['Spring Boot', 'Kafka', 'Kubernetes', 'MongoDB', 'LLMs'],
    current: false,
  },
  {
    logo: IMAGES.sjsuLogo,
    initials: 'SJSU',
    title: 'Software Developer & Compliance Support',
    period: 'May 2023 – Sep 2024',
    company: 'SJSU Research Foundation',
    location: 'San Jose, CA, USA',
    link: 'https://www.sjsu.edu/',
    tags: ['React', 'Node.js', 'GCP', 'SQL', 'REST APIs'],
    current: false,
  },
  {
    logo: IMAGES.stetigLogo,
    initials: 'SC',
    title: 'Software Engineer',
    period: 'Jun 2020 – Jun 2022',
    company: 'Stetig Consulting',
    location: 'Pune, India',
    link: 'https://stetig.in/',
    tags: ['Spring Boot', 'Kafka', 'NLP', 'AWS', 'Microservices'],
    current: false,
  },
];

const TimelineItem = ({ exp, isLast }) => (
  <div className='timeline-item'>
    <div className='timeline-left'>
      <div className='timeline-logo-wrap'>
        {exp.logo ? (
          <img src={exp.logo} alt={exp.company} className='timeline-logo-img' />
        ) : (
          <div className='timeline-logo-fallback'>{exp.initials}</div>
        )}
      </div>
      {!isLast && <div className='timeline-connector' />}
    </div>
    <div className='timeline-right'>
      <div className='timeline-card'>
        <div className='timeline-card-header'>
          <div>
            <h3 className='timeline-role'>{exp.title}</h3>
            <a
              href={exp.link}
              target='_blank'
              rel='noreferrer'
              className='timeline-company-link'
            >
              {exp.company}
            </a>
            <span className='timeline-location'> · {exp.location}</span>
          </div>
          <div className='timeline-period-wrap'>
            {exp.current && <span className='timeline-current-badge'>Current</span>}
            <span className='timeline-period'>{exp.period}</span>
          </div>
        </div>
        <div className='timeline-tags'>
          {exp.tags.map((tag) => (
            <span key={tag} className='timeline-tag'>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experiences = () => {
  const { theme } = useTheme();

  return (
    <Container className='experience-container text-center' id='experience'>
      <h1 className='section-title'>Experience</h1>

      <div className='timeline-wrapper'>
        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} isLast={i === experiences.length - 1} />
        ))}
      </div>

      <h1 className='section-title' style={{ marginTop: '8vh' }}>
        Education
      </h1>

      <Carousel
        className='custom-carousel'
        variant={theme === 'light' ? 'dark' : undefined}
        keyboard={true}
        pause='hover'
      >
        <Carousel.Item interval={2000}>
          <div className='carousel-logo-wrap'>
            <img
              className='carousel-image'
              src={IMAGES.sjsuLogo}
              alt='Masters College'
            />
          </div>
          <Carousel.Caption className='carousel-caption'>
            <h3>Master's in Software Engineering</h3>
            <h4>2022 – 2024</h4>
            <p>San Jose State University, California, USA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1800}>
          <div className='carousel-logo-wrap'>
            <img
              className='carousel-image'
              src={IMAGES.rcoemLogo}
              alt='Bachelors College'
            />
          </div>
          <Carousel.Caption className='carousel-caption'>
            <h3>Bachelor's in Information Technology</h3>
            <h4>2016 – 2020</h4>
            <p>Shri Ramdeobaba College of Engineering and Management, Nagpur, India</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Experiences;
