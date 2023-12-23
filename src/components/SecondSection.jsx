import React from 'react';
import './../styles.css'; // Import your styles

const SecondSection = () => {
  return (
    <section className='secondSection'>
      <span className='text-grey'>What I have done so far</span>
      <h1>Work Experience</h1>

      <div className='box'>
        <div className='vertical'>
          <img className='image-top' src='degree.png' alt='Degree' />
          <div className='vertical-title'>
            Bachelor's in Information Technology (2016 - 2020)
          </div>
          <div className='vertical-desc'>
            Shri Ramdeobaba, College of Engineering and Management, Nagpur,
            India
          </div>
        </div>
        <div className='vertical'>
          <img className='image-top' src='developer2.png' alt='Developer' />
          <div className='vertical-title'>Software Engineer (2020 - 2022)</div>
          <div className='vertical-desc'>Stetig Consulting, Pune, India</div>
        </div>
        <div className='vertical'>
          <img className='image-top' src='degree.png' alt='Degree' />
          <div className='vertical-title'>
            Master's in Software Engineering (2022 - 2024)
          </div>
          <div className='vertical-desc'>
            San Jose State University, California, USA
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
