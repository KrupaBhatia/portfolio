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
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1000px",
    width: "100%",
  },
  subheadingWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1000px",
    marginBottom: "20px",
    textAlign: "left",
  },
  subheading: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#444",
    flex: "1",
    textAlign: "center"
  },
  contentRow: {
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "100px",
    width: "100%",
    maxWidth: "1000px",
    flexWrap: "wrap",
  },
  textContainer: {
    flex: "1",
    minWidth: "500px",
  },
  paragraph: {
    textAlign: "left",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#555",
  },
  button: {
    marginTop: "15px",
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#764abc",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.3s ease, background 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#5a347a",
    transform: "scale(1.05)",
  },
  skillsContainer: {
    flex: "1",
    minWidth: "300px",
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
};

const About = () => {

  const goToMail = () => {
    const subject = encodeURIComponent("Let's connect!");
    const body = encodeURIComponent("Hi Krupa,\n\nI'm reaching out regarding...");
    window.location.href = `mailto:krupadbhatia0521@gmail.com?subject=${subject}&body=${body}`;
  };
  
  return (
    <section id="about" style={styles.section}>
      <h3 style={styles.heading}>ABOUT ME</h3>
      <div style={styles.divider}></div>

      {/* Subheadings Row */}
      <div style={styles.subheadingWrapper}>
        <h2 style={styles.subheading}>Get to Know Me!</h2>
        <h2 style={styles.subheading}>My Skills</h2>
      </div>

      {/* Content Row */}
      <div style={styles.contentRow}>
        {/* About Text */}
        <div style={styles.textContainer}>
        <p style={styles.paragraph}>  
  <strong>I'm a Full Stack Developer with 2.10+ years of experience, specializing in building and managing both the Frontend and Backend of scalable Web Applications and APIs.</strong> With <strong>strong expertise in Backend Development</strong>, I ensure <strong>seamless performance, security, and efficiency</strong> in projects I work on.  
  <br /><br />  
  I enjoy <strong>exploring new technologies</strong> and staying <strong>up-to-date with industry trends</strong>. I frequently <strong>share insights, best practices, and project experiences</strong> to help other developers navigate the world of <strong>Full Stack Development</strong>. Whether it’s <strong>optimizing backend performance, designing scalable architectures, or improving frontend user experience</strong>, I believe in <strong>continuous learning and collaboration</strong>.  
  <br /><br />  
  I am <strong>actively looking for opportunities</strong> where I can <strong>apply my skills, take on challenges, and grow further</strong>. If you have an <strong>exciting role that aligns with my experience</strong>, <strong>let's connect!</strong> 🚀  
</p>

          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.transform = styles.buttonHover.transform)}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            onClick={goToMail}
          >
            CONTACT
          </button>
        </div>

        <div style={styles.skillsContainer}>
          <div style={styles.skill}>HTML</div>
          <div style={styles.skill}>CSS</div>
          <div style={styles.skill}>JavaScript</div>
          <div style={styles.skill}>React</div>
          <div style={styles.skill}>Node.js</div>
          <div style={styles.skill}>Git</div>
          <div style={styles.skill}>TypeScript</div>
          <div style={styles.skill}>Express.js</div>
          <div style={styles.skill}>TailwindCSS</div>
          <div style={styles.skill}>PostgreSQL</div>
          <div style={styles.skill}>MongoDB</div>
          <div style={styles.skill}>mySQL</div>
          <div style={styles.skill}>Problem-Solving</div>
          <div style={styles.skill}>S3</div>
          <div style={styles.skill}>EC2</div>
          <div style={styles.skill}>Lambda</div>
          <div style={styles.skill}>SQS</div>
          <div style={styles.skill}>SNS</div>
        </div>
      </div>
    </section>
  );
};

export default About;
