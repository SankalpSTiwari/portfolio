import React, { useEffect } from 'react';
import TypewriterComponent from 'typewriter-effect';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

import './../styles.css'; // Import your styles

const FirstSection = () => {
  const downloadResume = () => {
    // Implement the download resume logic
    // For example, redirect to the resume file
    window.location.href = 'Sankalp_Resume.pdf';
  };

  const openGithubLink = () => {
    // Implement the logic to open the GitHub link in a new tab
    window.open('https://github.com/SankalpSTiwari');
  };

  return (
    <section className='firstSection'>
      <div className='leftSection'>
        <div>
          Hi, my name is <span className='text-purple'>Sankalp</span>
        </div>
        <div>and I am passionate</div>
        <div className='typewriter-container'>
          <h4>
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                  'Web Developer',
                  'ML Enthusiast',
                  'Software Engineer',
                ],
              }}
            />
          </h4>
        </div>

        <div className='buttons'>
          <button className='btn' onClick={downloadResume}>
            Download Resume
          </button>
          <button className='btn' onClick={openGithubLink}>
            Visit Github
          </button>
        </div>
      </div>
      <div className='rightSection'>
        <img src='bg.png' alt='Background' />
      </div>
    </section>
  );
};

export default FirstSection;
