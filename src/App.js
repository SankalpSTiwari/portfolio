import React from 'react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <SecondSection />
      <Projects />
      {/* <ThirdSection />
      <FourthSection /> */}
      <Certifications />
      <Footer />
    </div>
  );
};

export default App;
