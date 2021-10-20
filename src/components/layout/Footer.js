import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer-section">
      <footer>
        <div className="social-media-icons">
          <span>
            <FaInstagram />
            <p>Instagram</p>
          </span>
          <span>
            <FaEnvelope />
            <p>Mail</p>
          </span>
          <span>
            <FaLinkedin />
            <p>LinkedIn </p>
          </span>
          <span>
            <FaGithub />
            <p>Github</p>
          </span>
        </div>
      </footer>
      <p>&copy; 2021 - Babuevs</p>
    </section>
  );
}

export default Footer;
