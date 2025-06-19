import React from "react";
import { Col, Row } from "react-bootstrap";
import {SiGithub, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 data-aos="fade-right">
        <span className="primary-header">Tools</span> I use
      </h1>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
