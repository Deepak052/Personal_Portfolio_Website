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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={YumXpress}
              title="Yum Xpress"
              description="This is a fully functional food delivery desktop app that uses java Swing framework in the front end and JDBC and  in backend and Oracle as Database."
              ghLink="https://github.com/Deepak052/YumXpress.git"
              demoLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
               imgPath={portfolio}
              title="Portfolio Website"
              description="I built this portfolio website myself using React and Bootstrap. It's totally mobile-friendly and even has a cool dark mode you can switch to. It's like a digital resume where I can show off all my projects, skills, and stuff I've learned."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={NetflixClone}
              title="Netflix+ Clone"
              description="Building a Netflix clone with HTML and CSS involves creating the webpage structure with HTML, then applying styles with CSS to mimic the Netflix homepage layout. This includes sections for a hero banner, navigation, content categories, and a footer. It's a great way to practice web development basics."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              title="Dynamic weather App"
              description="Check out this weather app I built! It uses a bunch of cool technologies like HTML, CSS, and JavaScript for the design, but gets its weather data live from the internet using Java and stuff called Servlets and JSP. So basically, you type in your city and it pulls in real-time weather information."
              ghLink="#"
              demoLink="#"
            />
          </Col>
                 <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={SoulTravel}
              title="Soul Travel"
              description="Check out this Soul Travel landing Page! It uses a bunch of cool technologies like HTML, CSS, and JavaScript for the design."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;