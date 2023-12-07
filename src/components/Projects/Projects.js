import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/266665.png";
import chatify from "../../Assets/Projects/50906.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";
import HealthHubFinder from "../../Assets/HealthHubFinder.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio"
              description="Crafting digital experiences that resonate. Explore my portfolio showcasing home, about, projects, and resume, encapsulating my journey and skills in a concise CV."
              ghLink="https://github.com/Taleloueslati/My-Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="To-Do-List"
              description="Is a organized inventory of tasks, serving as a roadmap for productivity and ensuring timely completion of goals and responsibilities. "
              ghLink="https://github.com/Taleloueslati/To-Do-List"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sportify"
              description="An e-commerce fitness app that facilitates communication
              between coaches and users and ensures the best programs and
              products"
              ghLink="https://github.com/Taleloueslati/Fitness_app"            
            />
          </Col>

          <Col md={4} className="HealthHubFinder">
            <ProjectCard
              imgPath={HealthHubFinder}
              isBlog={false}
              title="HealthHubFinder"
              description="is related to healthcare or health services, it could be a tool or platform designed to help people find healthcare providers, clinics, hospitals, or other health-related services in a specific area."
              ghLink="https://github.com/Taleloueslati/HealthHubFinder"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
