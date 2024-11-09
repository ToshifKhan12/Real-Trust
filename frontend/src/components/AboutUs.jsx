import React from "react";
import "../stylesheets/AboutUs.css";
import About1 from "../Assets/About1.svg";
import About2 from "../Assets/About2.svg";
import About3 from "../Assets/About3.svg";
 
const AboutUs = () => {
  return (
    <div className="about-us-container">
     
      <div className="images-container">
        <img src={About1} alt="About 1" className="about-image top-left" />
        <img src={About2} alt="About 2" className="about-image main-image" />
        <img src={About3} alt="About 3" className="about-image top-right" />
      </div>

      <div className="text-section">
        <h2>About Us</h2>
        <div className="underline"></div>
        <p>
          With years of experience in real estate, excellent customer service,
          and a commitment to work hard, listen, and follow through, we provide
          quality services to build relationships with clients. We maintain
          these relationships by communicating effectively.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default AboutUs;
