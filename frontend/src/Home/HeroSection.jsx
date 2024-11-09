import React from 'react';
import ConsultationForm from './ConsultationForm';
import "../stylesheets/HeroSection.css"; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Consultation,<br/> Design,<br/> & Marketing</h1> 
      </div>
      <div className="consultation-box">
        <ConsultationForm />
      </div>
    </div>
  );
};

export default HeroSection;
