import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import data from "../../data.json";

function AboutCard() {
  const { personalInfo, about } = data;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="primary-header">{personalInfo.name}</span> from{" "}
            {personalInfo.location}. I am a{" "}
            {personalInfo.degree} graduate from{" "}
            {personalInfo.university}, with a CGPA of{" "}
            {personalInfo.cgpa}. Currently, I work as a{" "}
            {personalInfo.currentRole} at {personalInfo.company}, building
            optimized and user-friendly web applications.

            <br />
            <br />

            {/* ✅ Dynamic summary from JSON */}
            {about.summary && (
              <>
                {about.summary}
                <br />
                <br />
              </>
            )}

            Apart from coding, here are some activities I enjoy!
          </p>

          <ul>
            {about.activities?.map((activity, index) => (
              <li className="about-activity" key={index}>
                <AiOutlineArrowRight /> {activity}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;