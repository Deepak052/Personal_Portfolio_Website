import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="primary-header">Deepak Mehta</span> from Noida,
            Uttar Pradesh, India. I am a B.Tech graduate in Computer Science
            from Sagar Institute of Research and Technology, Bhopal, with a CGPA
            of 7.92. Currently, I work as a Frontend Web Developer at DOJ App
            Pvt. Ltd., building optimized and user-friendly web applications.
            <br />
            <br />
            Apart from coding, here are some activities I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Traveling and Exploring New Cultures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
