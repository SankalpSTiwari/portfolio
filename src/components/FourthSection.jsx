import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FourthSection = () => {
  return (
    <Container id='projects' style={{ marginBottom: '5vh' }}>
      <Row style={{ marginBottom: '2vh' }}>
        <h1 style={{ fontSize: '5.5vh', fontWeight: 'bold' }}>Projects</h1>
      </Row>
      <Row>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>Back2Office</Card.Title>
              <Card.Text style={{ marginBottom: '90px' }}>
                End-to-end scalable Office Space booking application.
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/CMPE_273_Back2Office'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>Recipize</Card.Title>
              <Card.Text style={{ marginBottom: '42px' }}>
                user-friendly mobile application built to offer personalized
                recipe suggestions based on scanned ingredients.
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/Recipize'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>Microblog</Card.Title>
              <Card.Text style={{ marginBottom: '66px' }}>
                Scalable full-stack web application modeled after a popular
                blogging platform
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/Microblog'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>SmartTrip</Card.Title>
              <Card.Text style={{ marginBottom: '42px' }}>
                A scalable travel planning application, leveraging OpenAI’s
                GPT-3.5 APIs to generate personalized itineraries
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/SmartTrip'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>meme-generator-app</Card.Title>
              <Card.Text style={{ marginBottom: '90px' }}>
                Web application to create your own customized memes
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/meme-generator-app'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>weather-forecast-app</Card.Title>
              <Card.Text style={{ marginBottom: '66px' }}>
                Web application built using react to display and forecast
                weather of any location
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/weather-forecast-app'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>GPTalk</Card.Title>
              <Card.Text style={{ marginBottom: '42px' }}>
                Android application that harnesses the power of OpenAI's GPT
                model to provide you with a smart conversational companion
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/GPTalk'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>Auditor-Enterprise-Chat-UI</Card.Title>
              <Card.Text style={{ marginBottom: '18px' }}>
                A Web Application to streamline the auditing process for
                commercial companies and individuals using OpenAI's GPT model
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/Auditor-Enterprise-Chat-UI'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>bookstore-app </Card.Title>
              <Card.Text style={{ marginBottom: '66px' }}>
                A web application developed using React to list and organize
                books, featuring user authentication.
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/bookstore-app'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>DevConnector</Card.Title>
              <Card.Text style={{ marginBottom: '66px' }}>
                A social media application for connecting developers around the
                globe.
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/DevConnector'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>TicTacToe</Card.Title>
              <Card.Text style={{ marginBottom: '90px' }}>
                classic TicTacToe game brought to life with JavaScript!{' '}
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/TicTacToe'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mb-3'>
          <Card style={{ width: '18rem', height: '240px' }}>
            {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
            <Card.Body>
              <Card.Title>Space-Invaders-2.0</Card.Title>
              <Card.Text style={{ marginBottom: '18px' }}>
                Classic Space Invaders game with a twist! Implemented custom
                features to the game implementing various System Design patterns
                following Agile methodology
              </Card.Text>
              <Button
                variant='secondary'
                href='https://github.com/SankalpSTiwari/Space-Invaders-2.0'
                target='_blank'
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FourthSection;
