import React from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';

const About = () => {
  return (
    <div className="main-container">
      <div className="page-header">
        <h1>About</h1>
        <p>Learn more about React Store</p>
      </div>
      <ScrollReveal>
        <p>Built with React, Vite, Tailwind CSS, and TanStack React Query.</p>
      </ScrollReveal>
    </div>
  );
};

export default About;
