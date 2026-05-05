import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import NetflixClone from "../../assets/Projects/NetflixClone.jpeg";
import YumXpress from "../../assets/Projects/Yumxpress.png";
import "./project.css";
import portfolio from "../../assets/Projects/portfolio.png"
import Weather from "../../assets/Projects/Weather.jpeg"
import SoulTravel from "../../assets/Projects/SoulTravel.png"
import data from "../../data.json";

const images = {
  NetflixClone,
  YumXpress,
  portfolio,
  Weather,
  SoulTravel
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data.projects.map((project) => (
            <Col md={6} lg={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={images[project.imageKey]}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;