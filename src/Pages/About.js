import React from 'react';
import aboutData from '../DataFiles/AboutData.js';
import '../CSS/About.css'

function About() {
  return (
    <div className = 'aboutBody'>
      {aboutData.map((section, index) => (
        <div key={index}>
          <h2 className='aboutTitle'>{section.title}</h2>
          <p className='aboutDescription'>{section.description}</p>
          {section.collaboration && (
            <p className='aboutDescription'><b>Collaboration: </b>{section.collaboration}</p>
          )}
          {section.innovation && (
            <p className='aboutDescription'><b>Innovation: </b>{section.innovation}</p>
          )}
          {section.inclusivity && (
            <p className='aboutDescription'><b>Inclusivivity: </b>{section.inclusivity}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default About;
