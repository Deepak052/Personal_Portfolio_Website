import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import data from "../../data.json";

function Home2() {
  const { personalInfo, socialLinks, about } = data;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>

            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a{" "}
              <i className="primary-header">
                {personalInfo.degree}
              </i>{" "}
              graduate from {personalInfo.university} (
              {personalInfo.duration}, CGPA: {personalInfo.cgpa}), currently
              working as a{" "}
              <i className="primary-header">
                {personalInfo.currentRole}
              </i>{" "}
              at {personalInfo.company}, {personalInfo.companyLocation}.

              <br />
              <br />
              {about.summary} using{" "}
              <i className="primary-header">
                {about.techHighlight.join(", ")}
              </i>
              .

              <br />
              <br />
              I am passionate about learning{" "}
              <i className="primary-header">{about.learning}</i> and applying
              them to real-world projects like{" "}
              <i className="primary-header">
                {about.projectsHighlight.join(", ")}
              </i>
              .

              <br />
              <br />
              Outside of coding, I enjoy{" "}
              <i className="primary-header">
                {about.activities[0]}
              </i>{" "}
              and{" "}
              <i className="primary-header">
                {about.activities[1]}
              </i>
              .
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>

            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={`mailto:${socialLinks.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;