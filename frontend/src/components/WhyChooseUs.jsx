import React from "react";
import "../stylesheets/WhyChooseUs.css";
import home from "../Assets/home.svg";
import paintBrush from "../Assets/paintbrush-2.svg";
import dollarSign from "../Assets/circle-dollar-sign.svg";
 

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <h2>Why Choose Us?</h2>
      <div className="underline"></div>
      <div className="features-container">
    
        <div className="feature-card">
          <img src={home} alt="Potential ROI" className="feature-icon" />
          <h3>Potential ROI</h3>
          <p>
            Whether you are looking to buy or invest, we maximize your returns and provide you with the best value.
          </p>
        </div>
 
        <div className="feature-card">
          <img src={paintBrush} alt="Design" className="feature-icon" />
          <h3>Design</h3>
          <p>
            Our design experts create the perfect balance of style and function, ensuring a seamless experience.
          </p>
        </div>

        <div className="feature-card">
          <img src={dollarSign} alt="Marketing" className="feature-icon" />
          <h3>Marketing</h3>
          <p>
            We offer tailored marketing strategies to maximize visibility and engagement in the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
