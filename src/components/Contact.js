import React from "react";
import { SiWhatsapp, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si"; // Ensure proper import
import { MdEmail } from "react-icons/md"; // Ensure proper import
import "../style/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>
        I'd love to hear from you! Whether you have a project idea, a
        collaboration in mind, or just want to chat about the latest in tech,
        don't hesitate to reach out. I'm always open to new opportunities,
        interesting conversations, and creative challenges. Let's connect and
        see how we can create something awesome together!
      </p>
      <div className="contact-icons">
        <div className="contact-item">
          <MdEmail className="contact-icon" />
          <span>Forvalem3@gmail.com</span>
        </div>
        <div className="contact-item">
          <SiWhatsapp className="contact-icon" />
          <span>087825708291</span>
        </div>
        <div className="contact-item">
          <SiInstagram className="contact-icon" />
          <span>Gregorius.49</span>
        </div>
        <div className="contact-item">
          <SiLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/gregorius-cahyadi-416b49251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gregorius Cahyadi
          </a>
        </div>
        <div className="contact-item">
          <SiGithub className="contact-icon" />
          <a
            href="https://github.com/Gruzli"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gruzli
          </a>
        </div>
      </div>
      <footer>
        <p>Copyright © 2023 - Gregorius Cahyadi. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
