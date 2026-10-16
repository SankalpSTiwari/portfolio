import React from 'react';
import IMAGES from '../images';
import Button from 'react-bootstrap/Button';

const Projects = () => {
  return (
    <section id='projects' className='scroll-animate'>
      <div className='projects container'>
        <div className='projects-header'>
          <h1 className='section-title'>Projects</h1>
        </div>
        <div className='all-projects'>

          {/* === Strong / Featured Projects === */}

          <div className='project-item'>
            <div className='project-info container'>
              <h1>Moodify</h1>
              <br />
              <p>
                Mood-based music and movie recommendation app using ML (Random
                Forest) and cosine similarity for content filtering.
                <br />
                <br />
                <b>Tools used:</b> React, Node.js, Flask, AWS, Spotify API, TMDB, Machine Learning
              </p>
              <Button
                variant='light'
                href='https://github.com/SankalpSTiwari/Moodify'
                target='_blank'
              >
                GitHub
              </Button>
            </div>
            <div className='project-img moodify-placeholder'>
              <div className='project-img-placeholder'>
                <span className='placeholder-icon'>🎵</span>
                <span className='placeholder-label'>ML · Recommendations</span>
              </div>
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info container'>
              <h1>Back2Office</h1>
              <br />
              <p>
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
              <h1>SmartTrip</h1>
              <br />
              <p>
                Scalable travel planning application leveraging OpenAI's GPT-3.5
                APIs to generate personalized itineraries.
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
              <h1>GPTalk</h1>
              <br />
              <p>
                Android application harnessing OpenAI's GPT model for a smart
                conversational companion.
                <br />
                <br />
                <b>Tools used:</b> Kotlin, Android, OpenAI API, Jetpack Compose
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
                style={{ width: '35%', height: '91%' }}
              />
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info'>
              <h1>Auditor Enterprise Chat</h1>
              <br />
              <p>
                Web application to streamline the auditing process for
                commercial companies using OpenAI's GPT model.
                <br />
                <br />
                <b>Tools used:</b> HTML, CSS, OpenAI API
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
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info'>
              <h1>Recipize</h1>
              <br />
              <p>
                Mobile application offering personalized recipe suggestions
                based on scanned ingredients.
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
                style={{ width: '35%', height: '91%' }}
              />
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info'>
              <h1>Microblog</h1>
              <br />
              <p>
                Scalable full-stack web application modeled after a popular
                blogging platform.
                <br />
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

          {/* === Additional Projects === */}

          <div className='project-item'>
            <div className='project-info'>
              <h1>Meme Generator</h1>
              <br />
              <p>
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
              <h1>Weather Forecast</h1>
              <br />
              <p>
                Web application built using React to display and forecast
                weather of any location.
                <br />
                <br />
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
              <h1>Bookstore App</h1>
              <br />
              <p>
                Web application to list and organize books, featuring user
                authentication.
                <br />
                <br />
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
                style={{ width: '91%', height: '91%' }}
              />
            </div>
          </div>

          <div className='project-item'>
            <div className='project-info'>
              <h1>DevConnector</h1>
              <p>
                Social media application for connecting developers around the
                globe.
                <br />
                <br />
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
              <p>
                Classic TicTacToe game brought to life with JavaScript.
                <br />
                <br />
                <b>Tools used:</b> React.js, Node.js, Express.js
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
              <h1>Space Invaders 2.0</h1>
              <p>
                Classic Space Invaders game with custom features implementing
                various System Design patterns.
                <br />
                <br />
                <b>Tools used:</b> Java, System Design Patterns, Agile, UML
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
  );
};

export default Projects;
