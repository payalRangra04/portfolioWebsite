import React from 'react';
import Hero from './section/Hero/Hero';
import Projects from './section/Projects/Project'
import Footer from './section/Footer/Footer';
import Skills from './section/Skills/Skills';
import Contact from './section/Contact/Contact';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Projects/>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
