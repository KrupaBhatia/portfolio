import React, { useState, useEffect } from "react";

const styles = { 
  linkStyle: {
    color: "#000",
    textDecoration: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  activeLinkStyle: {
    color: "#764abc",
    textDecoration: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  navStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#fff",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  linkContainer: {
    display: "flex",
    gap: "35px",
    marginRight: "100px",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#000",
  },
};

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects"];
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav style={styles.navStyle}>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>KRUPA BHATIA</div>
      <div style={styles.linkContainer}>
        {["home", "about", "projects"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleNavClick(e, id)}
            style={activeSection === id ? styles.activeLinkStyle : styles.linkStyle}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
