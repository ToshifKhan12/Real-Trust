// src/components/NewsletterSubscription.js
import React from 'react';
import '../stylesheets/NewsletterSubscription.css';
import facebook from '../Assets/facebook.svg';
import twitter from '../Assets/twitter.svg';
import insta from '../Assets/insta.svg';
import linkedin from '../Assets/Linkedin.svg';
import logo from "../Assets/logo.svg"

const NewsletterSubscription = () => {
  return (
    <div className="newsletter-section">
 
      <div className="banner">
        <div className="banner-content">
          <h1>
            Learn more about our listing process, as well as our additional staging and design work.
          </h1>
          <button className="learn-more-button">LEARN MORE</button>
        </div>
      </div>
 
      <div className="footer">
        <div className="footer-nav">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </div>

        <div className="subscribe-section">
          <p>Subscribe to Us</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        </div>

        <div className="footer-bottom">
          <p>All Rights Reserved 2023</p>
          <div className="logo"><img src={logo} alt="" /></div>
          <div className="social-media">
            <a href="#"><img src={twitter} alt="" /></a>
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={insta} alt="" /></a>
            <a href="#"><img src={linkedin} alt="" /></a>
          </div>
        </div>

        </div>
  );
};

export default NewsletterSubscription;
