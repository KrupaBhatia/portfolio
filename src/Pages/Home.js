import React from "react";

const styles = {
  section: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    backgroundImage: "url('./background.jpg')", // Correct way to use public folder image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    color: "#000",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  content: {
    position: "relative",
    zIndex: 2,
  },
  heading: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "50px",
    width: "100%",
  },
  paragraph: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    marginBottom: "30px",
    alignItems: "center",
    textAlign: "center",
  },

    button: {
      color: "rgb(255, 255, 255)",
      textTransform: "uppercase",
      letterSpacing: "1px",
      display: "inline-block",
      fontWeight: "700",
      boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
      backgroundColor: "rgb(120, 67, 233)",
      borderRadius: "5px",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
   buttonHover: {
    backgroundColor: "#5a347a",
    transform: "scale(1.05)",
  },
  };
  

const Home = () => {

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.heading}>HEY, I'M KRUPA BHATIA</h1>
        <p style={styles.paragraph}>
        Result-oriented Software Developer with 3 years of experience in building and maintaining scalable web applications.
        Focused on delivering clean code and impactful solutions that contribute to overall product success.
        </p>
        <button 
  style={styles.button} 
  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
  onClick={scrollToProjects}
>
  Projects
</button>


      </div>
    </section>
  );
};

export default Home;
