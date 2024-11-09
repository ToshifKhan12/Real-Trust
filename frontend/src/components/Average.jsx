import React from "react";
import "../stylesheets/Average.css"
import Ellipse11 from "../Assets/Ellipse 11.svg"
import Ellipse12 from "../Assets/Ellipse 12.svg"
import Ellipse13 from "../Assets/Ellipse 13.svg" 
import dots from "../Assets/Group 1000001645.svg"
// import Ellipse8 from "../Assets/Ellipse 8.svg"
 
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
        {/* <img src={Ellipse8} alt="" /> */}
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










// import React from "react";
// import "../stylesheets/Average.css";
// import Ellipse11 from "../Assets/Ellipse 11.svg"
// import Ellipse12 from "../Assets/Ellipse 12.svg"
// import Ellipse13 from "../Assets/Ellipse 13.svg"
// // import image2 from "../assets/image2.jpg";
// // import image3 from "../assets/image3.jpg";

// const RealtorPage = () => {
//   return (
//     <div className="realtor-container">
//       {/* Left Section */}
//       <div className="text-section">
//         <h2>Not Your Average Realtor</h2>
//         <p>
//           Real estate services for selling properties with modern marketing
//           strategies, tailored designs, and effective approaches to ensure the
//           best value for your property.
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="image-section">
//         <div className="circle-image">
//           <img src={Ellipse11} alt="Realtor 1" />
//         </div>
//         <div className="circle-image">
//           <img src={Ellipse12} alt="Realtor 2" />
//         </div>
//         <div className="circle-image">
//           <img src={Ellipse13} alt="Realtor 3" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RealtorPage;

