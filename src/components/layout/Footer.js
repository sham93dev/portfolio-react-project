import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer-section" id="footer">
      <footer>
        <div className="social-media-icons">
          <span>
            <a href="mailto:shamil_b93@hotmail.com">
              <FaEnvelope />
            </a>
            <p>Mail</p>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/shamil-babujev-1140b7191/" target="_blank">
              <FaLinkedin />
            </a>
            <p>LinkedIn </p>
          </span>
          <span>
            <a href="https://github.com/sham93dev" target="_blank">
              <FaGithub />
            </a>
            <p>Github</p>
          </span>
        </div>
      </footer>
      <p>&copy; 2021 - Babuevs</p>
    </section>
  );
}

export default Footer;
