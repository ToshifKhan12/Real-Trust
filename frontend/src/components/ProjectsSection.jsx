import React from 'react'; 
import '../stylesheets/ProjectSection.css';
import house1 from "../Assets/house1.svg"
import house2 from "../Assets/house2.svg"
import house3 from "../Assets/house3.svg"
import house4 from "../Assets/house4.svg"
import house5 from "../Assets/house5.svg"

const ProjectsSection = () => {
  
 
  return (
    <div className="container">
      <section className="projects-section">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-description">
          We know what buyers are looking for and suggest projects that will bring
          clients top dollar for the sale of their homes.
        </p>
        <div className="projects-cards">
          <div className="card">
            <img src={house1} alt="Consultation" className="card-img" />
            <h3>Consultation</h3>
            <p>Project Name: Client Consultation</p>
            <button className="btn">READ MORE</button>
          </div>
          <div className="card">
            <img src={house2} alt="Design" className="card-img" />
            <h3>Design</h3>
            <p>Project Name: Home Design</p>
            <br />
            <button className="btn">READ MORE</button>
          </div>
          <div className="card">
            <img src={house3} alt="Marketing & Design" className="card-img" />
            <h3>Marketing & Design</h3>
            <p>Project Name: Marketing & Design</p>
            <button className="btn">READ MORE</button>
          </div>
          <div className="card">
            <img src={house4} alt="Consultation & Marketing" className="card-img" />
            <h3>Consultation & Marketing</h3>
            <p>Project Name: Consultation & Marketing</p>
            <button className="btn">READ MORE</button>
          </div>
          <div className="card">
            <img src={house5} alt="Consultation" className="card-img" />
            <h3>Consultation</h3>
            <p>Project Name: Client Consultation</p>
            <button className="btn">READ MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
