import React from "react";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
// ...existing code...
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Skills />
            <Experiences />
            <Projects />
            <Certifications />
            <Footer />
        </div>
    );
};

export default App;
