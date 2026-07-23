import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 dark:bg-gray-900 text-gray-100 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <div id="top">
                <Hero />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="projects">
                <Projects />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </main>
          } />
        </Routes>
        <footer className="py-6 text-center text-gray-400 font-mono text-sm">
          <p>Designed & Built by Bemnet Yitagesu</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;