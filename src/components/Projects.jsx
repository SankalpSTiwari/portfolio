import React from 'react';
import IMAGES from '../images';
import Button from 'react-bootstrap/Button';

const Projects = () => {
  return (
    // Projects Section
    <section id='projects'>
      <div className='projects container'>
        <div className='projects-header'>
          <h1 className='section-title'>Projects</h1>
        </div>
        <div className='all-projects'>
          <div className='project-item'>
            <div className='project-info'>
              <h1>Back2Office</h1>

              <br />
              <p>
                {' '}
                End-to-end scalable Office Space booking application.
                <br />
                <br />
                <b>Tools used:</b> ReactJS, Express.js, Node.js, MySQL, Java,
                Spring Boot, JWT, AWS
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/CMPE_273_Back2Office'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_back2office}
                alt='img'
                style={{ width: '91%', height: '91%' }}
              />
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info'>
              <h1>Recipize</h1>
              <br />
              <p>
                {' '}
                A user-friendly mobile application built to offer personalized
                recipe suggestions based on scanned ingredients.
                <br />
                <br />
                <b>Tools used:</b> Dart, TensorFlow, Image Detection, APIs
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/Recipize'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_recipize}
                alt='img'
                style={{ height: '91%' }}
              />
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info'>
              <h1>Microblog</h1>
              <br />
              <p>
                {' '}
                Scalable full-stack web application modeled after a popular
                blogging platform. <br />
                <br />
                <b>Tools used:</b> ReactJS, Express.js, Node.js, MongoDB, Redux,
                MaterialUI
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/Microblog'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_microblog}
                alt='img'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info'>
              <h1>SmartTrip</h1>
              <br />
              <p>
                {' '}
                A scalable travel planning application, leveraging OpenAI’s
                GPT-3.5 APIs to generate personalized itineraries.
                <br />
                <br />
                <b>Tools used:</b> React.js, MongoDB, Node.js, Express.js, JWT,
                Redux
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/SmartTrip'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_smarttrip}
                alt='img'
                style={{ width: '91%', height: '91%' }}
              />
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info'>
              <h1>meme-generator-app</h1>
              <br />
              <p>
                {' '}
                Web application to create your own customized memes.
                <br />
                <br />
                <b>Tools used:</b> React.js, Node.js, Express.js, REST APIs
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/meme-generator-app'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_meme}
                alt='img'
                style={{ width: '91%', height: '91%' }}
              />
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info'>
              <h1>weather-forecast-app</h1>
              <br />
              <p>
                {' '}
                Web application built using react to display and forecast
                weather of any location.
                <br /> <br />
                <b>Tools used:</b> React.js, Node.js, Express.js, REST APIs
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/weather-forecast-app'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_weather}
                alt='img'
                style={{ width: '91%', height: '91%' }}
              />
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info'>
              <h1>GPTalk</h1>
              <br />
              <p>
                Android application that harnesses the power of OpenAI's GPT
                model to provide you with a smart conversational companion.
                <br /> <br />
                <b>Tools used:</b> Kotlin, Android, OpenAI API Integrations,
                Jetpack Compose
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/GPTalk'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_gptalk}
                alt='img'
                style={{ height: '91%' }}
              />
            </div>
          </div>
          <div className='project-item'>
            <div className='project-info'>
              {/* <!-- <h1>Realtime Corona Virus Outbreak Notification System</h1>--> */}
              <h1>Auditor-Enterprise-Chat-UI</h1>
              <br />
              <p>
                A Web Application to streamline the auditing process for
                commercial companies and individuals using OpenAI's GPT model.
                <br /> <br />
                <b>Tools Used:</b> HTML, CSS, OpenAI API Integrations
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/Auditor-Enterprise-Chat-UI'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_auditor}
                alt='img'
                style={{ width: '91%', height: '91%' }}
              />
            </div>
          </div>
          <div className='project-item'>
            <div className='project-info'>
              <h1>bookstore-app</h1>
              <br />
              {/* <!--<h2>Coding is Love</h2>--> */}
              <p>
                A web application developed using React to list and organize
                books, featuring user authentication.
                <br /> <br />
                <b>Tools used:</b> React.js, Node.js, Express.js, Firebase,
                Firestore Database
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/bookstore-app'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_bookstore}
                alt='img'
                style={{ width: '91%' }}
              />
            </div>
          </div>
          <div className='project-item'>
            <div className='project-info'>
              <h1>DevConnector</h1>
              {/* <!--<h2>Coding is Love</h2>--> */}
              <p>
                A social media application for connecting developers around the
                globe.
                <br /> <br />
                <b>Tools used:</b> React.js, Node.js, Express.js
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/DevConnector'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_devconnector}
                alt='img'
                style={{ width: '91%', height: '91%' }}
              />
            </div>
          </div>
          <div className='project-item'>
            <div className='project-info'>
              <h1>TicTacToe</h1>
              {/* <!--<h2>Coding is Love</h2>--> */}
              <p>
                Classic TicTacToe game brought to life with JavaScript!
                <br />
                Used data mining concepts like missing value handling,
                Normalization, discretization while exploring data.
                <br />
                <br /> <b>Tool Used:</b> React.js, Node.js, Express.js{' '}
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/TicTacToe'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_tictactoe}
                alt='img'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          <div className='project-item'>
            <div className='project-info'>
              <h1>Space-Invaders-2.0</h1>
              {/* <!--<h2>Coding is Love</h2>--> */}
              <p>
                Classic Space Invaders game with a twist! Implemented custom
                features to the game implementing various System Design patterns
                following Agile methodology
                <br />
                <br />
                <b>Tools Used :</b> Java, System Design Patterns, Agile, UML
                Diagrams, Wireframes, Architectures <br />
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/Space-Invaders-2.0'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img'>
              <img
                src={IMAGES.project_space}
                alt='img'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- End Projects Section -->
  );
};

export default Projects;
