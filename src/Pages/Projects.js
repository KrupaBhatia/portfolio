import React from "react";


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
    alignItems: "left",
    gap: "50px",
    width: "100%",
    maxWidth: "1000px",
    padding: "20px",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "100px",
    padding: "20px",
    
  
  },
  projectImage: {
    width: "40%",
    height: "auto",
    borderRadius: "8px",
  },
 projectDetails: {
    width: "55%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start", // Corrected from "left" to "flex-start"
    flexDirection: "column",
    gap: "10px",
    marginBottom: "10px",
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
    width: "20%",
    height: "50px",
  },
  buttonHover: {
    transform: "scale(1.1)",
  },
  skillsContainer: {
  
   
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginTop: "30px",
  },
  skill: {
    padding: "10px 15px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    color: "#3c3c3c",
  },
  subHeading:{
    fontSize: "2.0rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "0px",
  },
  paragraph : {
    fontSize: "1.2rem",
    maxWidth: "800px",
    marginBottom: "30px",
    alignItems: "center",
    textAlign: "center",
  },
description: {
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  textDecoration: "none",
  transition: "transform 0.2s ease",
  textAlign: "left"  // Fix: aligns text to the left
}

    };


    const projects = [
        {
          id: 1,
          title: "Portfolio Website",
          description: "Designed and developed a sleek, responsive portfolio to showcase projects and skills with optimized UX and navigation.",
          techStack: ["React", "CSS", "JavaScript"],
          imageUrl: "./dope.png",
          link: "/#home",
        },
        {
          id: 2,
          title: "Admin Module",
          description: "Independently architected and maintained the Admin Module using Node.js and PostgreSQL, implementing business logic, access control, and operational workflows. Refactored and normalized database structures to enhance query performance and support scalable data management for 2,000+ clients",
          techStack: ["React", "Node.js", "PostgrSQL", "Express","e-charts"],
          imageUrl: "./pic2.png",
          link: "https://controlpanel.mysellercentral.com/"
        },
        // {
        //   id: 3,
        //   title: "Task Manager",
        //   description: "A task management tool to organize work efficiently.",
        //   techStack: ["Vue.js", "Firebase"],
        //   imageUrl: "your-task-manager-image-url.jpg",
        // }
      ];

const Projects = () => {
   
        return (
            <section id="projects" style={styles.section}>
              <h3 style={styles.heading}>PROJECTS</h3>
              <div style={styles.divider}></div>

              <p style={styles.paragraph}>  
                Here you will find some of the personal and clients projects that I created with each project containing its own case study
        </p>
        
        
        <div style={styles.projectsContainer}>
      {projects.map((project) => (
        <div key={project.id} style={styles.contentWrapper}>

          <img src={project.imageUrl} alt={project.title} style={styles.projectImage} />
          <div style={styles.projectDetails}>
            <h2 style={styles.subHeading}>{project.title}</h2>
            <p style={styles.description}>{project.description}</p>
            <div style={styles.skillsContainer}>
  {project.techStack.map((tech, index) => (
    <span key={index} style={styles.skill}>{tech}</span>
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
}

export default Projects;