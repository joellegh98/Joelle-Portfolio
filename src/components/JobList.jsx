import React from "react";
import FadeInSection from "./FadeInSection";

const JobList = () => {
  const experienceItems = {
    True: {
      jobTitle: "Full-Stack Developer Intern",
      duration: "NOV 2025 - MAY 2026",
      link: "https://true.org.il/",
      desc: [
        "Built user-facing interfaces with Next.js and TypeScript, and developed internal admin tools using Django and PL/pgSQL",
        "Worked with a large-scale production codebase to diagnose and resolve frontend and backend issues, while developing Playwright automation scripts for testing and development workflows",
        "Deployed and managed services using Docker and AWS, gaining hands-on experience with production development and deployment",
      ],
    },
    JMC: {
      jobTitle: "Academic Support Instructor",
      duration: "NOV 2025 - AUG 2026",
      link: "https://www.jmc.ac.il/",
      desc: [
        "Mentored first-year students in Programming, Linear Algebra, and Discrete Mathematics",
        "Explained complex concepts and strengthened analytical and problem-solving skills",
      ],
    },
  };

  const companies = Object.keys(experienceItems);

  return (
    <div className="timeline">
      {companies.map((key, i) => {
        const job = experienceItems[key];
        return (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="timeline-item">
              <span className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-duration">{job.duration}</div>
                <h3 className="timeline-role">{job.jobTitle}</h3>
                {job.link ? (
                  <a
                    className="timeline-company"
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {key}
                  </a>
                ) : (
                  <span className="timeline-company">{key}</span>
                )}
                <ul className="job-description">
                  {job.desc.map((descItem, j) => (
                    <li key={j}>{descItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        );
      })}
    </div>
  );
};

export default JobList;
