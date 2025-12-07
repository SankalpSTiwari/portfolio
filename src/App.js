import React from "react";
import { ThemeProvider } from "./ThemeContext";

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
        <ThemeProvider>
            <div>
                <Header />
                <Hero />
                <Skills />
                <Experiences />
                <Projects />
                <Certifications />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
