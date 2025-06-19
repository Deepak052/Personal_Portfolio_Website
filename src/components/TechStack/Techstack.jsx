import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiJava,
  DiBootstrap
} from "react-icons/di";
import { SiRedux, SiTailwindcss } from "react-icons/si"; 

import Toolstack from "./Toolstack";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      ></Col>
      <h1 data-aos="fade-right">
        <span className="primary-header">Skillset</span> I Work With
      </h1>

      <div data-aos="fade-up"></div>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>

      <div data-aos="fade-up">
        <Toolstack data-aos="fade-up" />
      </div>
    </Row>
  );
}

export default Techstack;
