import React from "react";
import "../stylesheets/Average.css"
import Ellipse11 from "../Assets/Ellipse11.svg"
import Ellipse12 from "../Assets/Ellipse12.svg"
import Ellipse13 from "../Assets/Ellipse13.svg" 
import dots from "../Assets/Group 1000001645.svg"
  
const Average = () => {
  return (
    <div className="container">
  
      <div className="left">
        <h2>Not Your Average Realtor</h2>
        <p>
            Real estate services for selling properties with modern marketing
            strategies, tailored designs, and effective approaches to ensure the
            best value for your property.
        </p>
         <img src={dots} alt="" />
      </div>

      <div className="right">
        <div className="circle-image">
          <img src={Ellipse11} alt="profile 1" />
        </div>
        <div className="circle-image">
          <img src={Ellipse12} alt="Profile 2" />
        </div>
        <div className="circle-image">
          <img src={Ellipse13} alt="Profile 3" />
        </div>
      </div>
    </div>
  );
};

export default Average;





// "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"

