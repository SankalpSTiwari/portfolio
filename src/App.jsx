import React, { useEffect } from "react";
import { ThemeProvider } from "./ThemeContext";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    useEffect(() => {
        const targets = document.querySelectorAll('.scroll-animate');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <ThemeProvider>
            <div>
                <Header />
                <Hero />
                <About />
                <Skills />
                <Experiences />
                <Projects />
                <Certifications />
                <Contact />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
