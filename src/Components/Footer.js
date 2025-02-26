import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const styles = {
  footerContainer: {
    backgroundColor: "#000",
    padding: "1rem",
    textAlign: "center",
    color: "#fff",
  },
  separator: {
    width: "80%",
    height: "2px",
    backgroundColor: "#fff",
    margin: "0 auto 1px",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "80%",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  leftSection: {
    textAlign: "left",
  },
  rightSection: {
    textAlign: "right",
  },
  socialLinks: {
    display: "flex",
    gap: "10px",
  },
  socialIcon: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.2rem",
  },
};

const Footer = () => {
  return (
    <div style={styles.footerContainer}>

  

      <div style={styles.footerContent}>

        <div style={styles.leftSection}>
          <h3>Krupa Bhatia</h3>
          <p>Full Stack Developer</p>
          <p>Building Scalable & Innovative Web Applications</p>
        </div>


        <div style={styles.rightSection}>
  <div style={styles.socialLinks}>
    <a href="https://github.com/KrupaBhatia" style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
      <FaGithub size={30} /> {/* GitHub Icon */}
    </a>
    <a href="https://www.linkedin.com/in/krupa-bhatia-0521" style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={30} /> {/* LinkedIn Icon */}
    </a>
    <a href="mailto:your-email@gmail.com" style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
      <FaEnvelope size={30} /> {/* Gmail Icon */}
    </a>
  </div>
</div>
      </div>

      <div style={styles.separator}></div>

      <footer className="App-footer">
        <p>Copyright © 2025 <a href="http://localhost:3000/" style={{ color: "#fff", textDecoration: "none" }}>Krupa Bhatia</a></p>
      </footer>
    </div>
  );
};

export default Footer;
