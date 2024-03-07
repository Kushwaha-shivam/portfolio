import React from 'react'
import './Projects.css'
import ProjectCard from '../../component/projectcard/ProjectCard'
import cardpic1 from "../../images/project_1_img.png";
import cardpic2 from "../../images/project_2_img.jpg";
import cardpic3 from "../../images/project_3_img.jpg";



const Projects = () => {
  return (
    <>
      <div className="project-section">
        <div className="project-header">
          <h1>Projects</h1>
          <p>Growing Collection of my Projects</p>
        </div>
        <div className="project-container">

          <ProjectCard img={cardpic1} projectName={"Blog App"} projectDetail={"Next.js, Express.js, MongoDb"} app_url={"https://www.google.com"} code_url={"https://github.com/Kushwaha-shivam/blog"} />
          <ProjectCard img={cardpic2} projectName={"ECommerce App"} projectDetail={"Next.js, Express.js, MongoDb"} app_url={"https://www.google.com"} code_url={"https://github.com/Kushwaha-shivam/ecommerce"} />
          
        </div>
      </div>
    </>

  )
}

export default Projects
