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
import {
  SiRedux,
  SiTailwindcss,
  SiMysql,
  SiGithub
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import Toolstack from "./Toolstack";
import data from "../../data.json";

const iconComponents = {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiJava,
  DiBootstrap,
  SiTailwindcss,
  SiRedux,
  SiMysql,
  SiGithub,
  VscVscode
};

function Techstack() {
  const { skills } = data;

  const allSkills = [
    ...(skills.frontend || []),
    ...(skills.backend || []),
    ...(skills.languages || [])
  ];

  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <h1 data-aos="fade-right">
        <span className="primary-header">Skillset</span> I Work With
      </h1>

      {allSkills.map((skill, index) => {
        const Icon = iconComponents[skill.icon];
        if (!Icon) return null;

        return (
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            key={index}
            title={skill.name}
          >
            <Icon />
          </Col>
        );
      })}

      <div data-aos="fade-up">
        <Toolstack />
      </div>
    </Row>
  );
}

export default Techstack;