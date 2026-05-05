import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Experience.css";
import data from "../../data.json";

function Experience() {
  return (
    <Container className="experience-section">
      <h2 className="experience-heading mb-4" data-aos="fade-up">
        Work Experience
      </h2>
      <Row className="justify-content-center">
        <Col md={8}>
          {data.experience.map((exp) => (
            <Card className={`experience-card ${exp.id !== data.experience.length ? 'mb-4' : ''}`} data-aos="fade-up" key={exp.id}>
              <Card.Body>
                <Card.Title className="experience-title">
                  {exp.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {exp.company}, {exp.location} | {exp.duration}
                </Card.Subtitle>
                <Card.Text as="div">
                  <ul>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
