import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm sticky-top justify-content-center">
        <a href="#" className="navbar-brand mr-0">
          Babuevs
        </a>
        <button className="navbar-toggler ml-1 custom-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse justify-content-between align-items-center w-200" id="collapsingNavbar2">
          <ul className="navbar-nav mx-left ">
            <li className="nav-item active">
              <a className="nav-link" href="./index.html">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myskills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="switch">
          <a href="https://open.spotify.com/playlist/49QkboyuZhhhSbknB7cHXG?si=QiBdG41XTzmVAT2LtCp3Qg" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-headphones fa-2x"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
