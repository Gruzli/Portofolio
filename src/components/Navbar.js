import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false); // Close mobile menu after selecting
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    setActiveSection(""); // Reset active section
    setMobileMenuOpen(false); // Close mobile menu
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <h1 onClick={scrollToTop} className="navbar-title">
        Gregorius C.
      </h1>
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>
      <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        {[
          { id: "about", label: "About" },
          { id: "skills", label: "Skills" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleScroll(item.id);
              }}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
