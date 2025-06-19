import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Experience.css";

function Experience() {
  return (
    <Container className="experience-section">
      <h2 className="experience-heading mb-4" data-aos="fade-up">
        Work Experience
      </h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="experience-card mb-4" data-aos="fade-up">
            <Card.Body>
              <Card.Title className="experience-title">
                Frontend Web Developer
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                DOJ App Pvt. Ltd., Noida, India | Apr 2025 – Present
              </Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>
                    Developed and optimized the Partner App for a food delivery
                    platform using React.js and TailwindCSS, improving UI/UX and
                    reducing load times by 20%.
                  </li>
                  <li>
                    Implemented Redux Toolkit for efficient state management,
                    enabling seamless API integration.
                  </li>
                  <li>
                    Collaborated with backend teams to ensure robust data flow,
                    enhancing application reliability.
                  </li>
                  <li>
                    Refactored codebase to improve maintainability, adhering to
                    best practices.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="experience-card" data-aos="fade-up">
            <Card.Body>
              <Card.Title className="experience-title">
                React Developer Intern
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                DOJ App Pvt. Ltd., Noida, India | Dec 2024 – Mar 2025
              </Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>
                    Built the Doj User food delivery web application from
                    scratch using React.js and TailwindCSS.
                  </li>
                  <li>
                    Integrated RESTful APIs for dynamic content rendering and
                    real-time updates.
                  </li>
                  <li>
                    Designed reusable UI components, improving development
                    efficiency by 30%.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
