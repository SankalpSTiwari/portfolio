import React from 'react';

// Components
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Certifications />
      <Footer />
    </div>
  );
};

export default App;
