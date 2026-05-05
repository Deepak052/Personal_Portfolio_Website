import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import data from "../../data.json";

const iconComponents = {
  SiMysql,
  VscVscode,
  SiGithub
};

function Toolstack() {
  const { skills } = data;

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 data-aos="fade-right">
        <span className="primary-header">Tools</span> I use
      </h1>

      {(skills.tools || []).map((tool, index) => {
        const Icon = iconComponents[tool.icon];
        if (!Icon) return null;

        return (
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            key={index}
            title={tool.name}
          >
            <Icon />
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;