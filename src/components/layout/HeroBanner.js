import React from "react";
import WebIcons from "./WebIcons";

function HeroBanner() {
  return (
    <>
      <section className="hero">
        <div className="wrapper">
          <div className="presentation">
            <div className="information">
              <h1>Shamil Babujev</h1>
              <h2>[ Front End Developer, Webdesigner, Digital Marketer ]</h2>
              <div className="web-icons">
                <WebIcons />
              </div>
              <p>Junior Developer looking for a job. In the meantime I work on my own projects that I upload to the site. </p>

              <div className="buttons">
                <a href="#about" className="contact-btn">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: "url(/assets/img/shamil28.jpg)" }} className="portrait-pic"></div>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
