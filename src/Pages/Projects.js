import React, { useEffect, useState } from "react";

const styles = {
  section: {
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  divider: {
    width: "100px",
    height: "4px",
    backgroundColor: "#764abc",
    margin: "10px auto",
  },
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "center",
    gap: "50px",
    width: "100%",
    maxWidth: "1000px",
    padding: "20px",
  },
  contentWrapperBase: {
    display: "flex",
    alignItems: "center",
    gap: "50px",
    padding: "20px",
  },
  projectImage: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "8px",
  },
  projectDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "10px",
    width: "100%",
  },
  button: {
    backgroundColor: "#764abc",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "transform 0.2s ease",
    maxWidth: "200px",
    width: "100%",
    height: "45px",
  },
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "10px",
    marginTop: "10px",
  },
  skill: {
    padding: "8px 12px",
    fontSize: "0.9rem",
    fontWeight: "bold",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    color: "#3c3c3c",
  },
  subHeading: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0px",
  },
  paragraph: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    marginBottom: "30px",
    alignItems: "center",
    textAlign: "center",
  },
  description: {
    padding: "10px 0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform 0.2s ease",
    textAlign: "left",
    width: "100%",
  },
};

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Designed and developed a sleek, responsive portfolio to showcase projects and skills with optimized UX and navigation.",
    techStack: ["React", "CSS", "JavaScript"],
    imageUrl: "./dope.png",
    link: "/#home",
  },
  {
    id: 2,
    title: "Admin Module",
    description:
      "Independently architected and maintained the Admin Module using Node.js and PostgreSQL, implementing business logic, access control, and operational workflows. Refactored and normalized database structures to enhance query performance and support scalable data management for 2,000+ clients",
    techStack: ["React", "Node.js", "PostgrSQL", "Express", "e-charts"],
    imageUrl: "./pic2.png",
    link: "https://controlpanel.mysellercentral.com/",
  },
  {
    id: 3,
    title: "Personal Budget Tracker",
    description:
      "A web application to track income, expenses, and monthly budgets with categorized entries and real-time financial summaries.",
    techStack: ["React", "Django", "Django REST Framework"],
    imageUrl: "./budget.png",
    link: "https://molten-test-7729.web.app/login",
  },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" style={styles.section}>
      <h3 style={styles.heading}>PROJECTS</h3>
      <div style={styles.divider}></div>
      <p style={styles.paragraph}>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>

      <div style={styles.projectsContainer}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              ...styles.contentWrapperBase,
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              style={styles.projectImage}
            />
            <div style={styles.projectDetails}>
              <h2 style={styles.subHeading}>{project.title}</h2>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.skillsContainer}>
                {project.techStack.map((tech, index) => (
                  <span key={index} style={styles.skill}>
                    {tech}
                  </span>
                ))}
              </div>
              <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
