import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
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
              I'm a <i className="primary-header">
                B.Tech Computer Science
              </i>{" "}
              graduate from Sagar Institute of Research and Technology, Bhopal
              (2020-2024, CGPA: 7.92), currently working as a{" "}
              <i className="primary-header">Frontend Web Developer</i> at DOJ
              App Pvt. Ltd., Noida.
              <br />
              <br />I specialize in building user-friendly web applications
              using{" "}
              <i className="primary-header">React.js, TailwindCSS, and Redux</i>
              , with a focus on optimizing UI/UX and performance.
              <br />
              <br />I am passionate about learning{" "}
              <i className="primary-header">new technologies</i> and applying
              them to real-world projects like YumXpress and WeatherWise360.
              <br />
              <br />
              Outside of coding, I enjoy{" "}
              <i className="primary-header">playing cricket</i> and{" "}
              <i className="primary-header">traveling</i> to explore new
              cultures.
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
                  href="https://github.com/Deepak052"
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
                  href="mailto:dmehta052@gmail.com"
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
                  href="https://www.linkedin.com/in/deepakmehta052/"
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
                  href="https://www.instagram.com/_.deepak_.mehta._/"
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
