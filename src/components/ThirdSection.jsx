import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
const ThirdSection = () => {
  return (
    <Container id='skills' style={{ marginBottom: '5vh' }}>
      <Row style={{ marginBottom: '2vh' }}>
        <h1 style={{ fontSize: '5.5vh', fontWeight: 'bold' }}>Skills</h1>
      </Row>
      <Row>
        <p style={{ fontSize: '2.5vh' }}>
          <strong>Languages: </strong> Java, JavaScript, TypeScript, Python, Go,
          Kotlin, Dart, C++, C
        </p>
      </Row>
      <Row>
        <p style={{ fontSize: '2.5vh' }}>
          <strong>Web Technologies: </strong>
          REST APIs, Node.js, AJAX, HTML, CSS, Next.js, Express.js, LLM
          Integrations
        </p>
      </Row>
      <Row>
        <p style={{ fontSize: '2.5vh' }}>
          <strong>Databases & Frameworks: </strong>
          SQL, PostgreSQL, SQLite, MySQL, MongoDB, SpringBoot, Flask, React,
          Django, Angular
        </p>
      </Row>
      <Row>
        <p style={{ fontSize: '2.5vh' }}>
          <strong>Tools & Services: </strong>
          Docker, Kubernetes, Apache Kafka, Git, Postman, AWS(EBS, EC2, S3, RDS,
          Autoscaling, Elastic Load Balancing, CloudWatch, API Gateway), Redis,
          Redux, OAuth, JWT, SonarQube, Agile, Firebase
        </p>
      </Row>
    </Container>
  );
};

export default ThirdSection;
