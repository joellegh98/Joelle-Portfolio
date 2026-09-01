import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import { withBase } from "../utils/basePath";

const About = () => {
  const one = (
    <p>
      I am a <b>Software Engineer</b> and Computer Science graduate. I
      previously worked as a Full-Stack Developer Intern at{" "}
      <a href="https://true.org.il/">True</a>, where I built user-facing
      applications and internal tools using technologies including Next.js,
      TypeScript, Django, and PostgreSQL. I'm passionate about building
      useful software and constantly learning new technologies.
    </p>
  );
  const two = (
    <p>
      In my free time, I love swimming, reading fiction, cooking, and exploring
      new technologies. I'm always curious to learn something new, whether
      it's a new recipe, a great story, or a technology I haven't worked
      with before.
    </p>
  );

  const techStack = [
    "C++",
    "Python",
    "C",
    "Typescript",
    "React.js",
    "Spring Boot",
    "Java",
    "Javascript",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Joelle Gharo" src={withBase("/assets/me.png")} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
