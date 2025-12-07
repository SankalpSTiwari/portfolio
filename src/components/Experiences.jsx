import React from "react";
import IMAGES from "../images";
import "./../styles.css";

import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";

const WorkExperienceCard = ({
    imgSrc,
    title,
    period,
    company,
    location,
    link,
}) => (
    <Col md={4} sm={12} className='d-flex justify-content-center mb-4'>
        <Card className='work-card text-center' style={{ width: "100%" }}>
            <Card.Img
                className='mx-auto my-4'
                variant='top'
                src={imgSrc}
                alt={`${company} logo`}
                style={{
                    height: "150px",
                    width: "auto",
                    maxWidth: "180px",
                    objectFit: "contain",
                }}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='work-card-text'>
                    {period}
                    <br />
                    {company},
                    <br />
                    {location}
                </Card.Text>
                <Button 
                    variant='primary' 
                    href={link} 
                    target='_blank'
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        border: 'none',
                        fontWeight: '600',
                        padding: '10px 24px',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease'
                    }}
                >
                    Visit Site
                </Button>
            </Card.Body>
        </Card>
    </Col>
);

const Experiences = () => {
    return (
        <Container className='experience-container text-center' id='experience'>
            <Row className='experiences-title'>
                <h1 className='section-title'>Work Experience</h1>
            </Row>
            <Row className='justify-content-center'>
                <WorkExperienceCard
                    imgSrc={IMAGES.goldmanSachsLogo}
                    title='Software Engineer 2'
                    period='October 2024 - Present'
                    company='Goldman Sachs'
                    location='New York, NY, USA'
                    link='https://www.goldmansachs.com/'
                />
                <WorkExperienceCard
                    imgSrc={IMAGES.sjsuLogo}
                    title='Software Developer & Compliance Support'
                    period='May 2023 - September 2024'
                    company='San Jose State University Research Foundation'
                    location='San Jose, CA, USA'
                    link='https://www.sjsu.edu/'
                />
                <WorkExperienceCard
                    imgSrc={IMAGES.stetigLogo}
                    title='Software Engineer'
                    period='June 2020 - June 2022'
                    company='Stetig Consulting'
                    location='Pune, Maharashtra, India'
                    link='https://stetig.in/'
                />
            </Row>
            <Row className='experiences-title'>
                <h1 className='section-title'>Education</h1>
            </Row>
            <Carousel
                className='custom-carousel'
                variant='dark'
                keyboard={true}
                pause='hover'
            >
                <Carousel.Item interval={2000}>
                    <img
                        className='second-slide carousel-image'
                        src={IMAGES.sjsuLogo}
                        alt='Masters College'
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h3> Master's in Software Engineering</h3>
                        <h4>2022 - 2024</h4>
                        <p>San Jose State University, California, USA</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1800}>
                    <img
                        className='first-slide carousel-image'
                        src={IMAGES.rcoemLogo}
                        alt='Bachelors College'
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h3> Bachelor's in Information Technology</h3>
                        <h4>2016 - 2020</h4>
                        <p>
                            Shri Ramdeobaba College of Engineering and
                            Management, Nagpur, India
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Experiences;
