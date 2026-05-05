import React from "react";
import Typewriter from "typewriter-effect";
import data from "../../data.json";

function Type() {
  const roles = [
    data.personalInfo.role,           // Full Stack Developer
    data.personalInfo.currentRole,    // Frontend Developer
    "React.js Developer",
    "MERN Stack Enthusiast"
  ];

  return (
    <Typewriter
      options={{
        strings: roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;