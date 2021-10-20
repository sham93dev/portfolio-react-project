import React from "react";

function MultiSection() {
  return (
    <>
      <section className="multi-section-wrapper" id="education">
        <div style={{ backgroundImage: "url(/assets/img/laptop4.jpg)" }} className="about-section"></div>
        <div className="about-section-media">
          <h2>Education</h2>
          <div className="education-pictures">
            <div className="noroff-wrapper">
              <img src="/assets/img/norofflogo.png"></img>
              <span>
                <h3>Noroff</h3>
                <h5>Front-end Development</h5>
                <p>08.2019 - 06.2021</p>
                <a href="https://www.dropbox.com/s/8zscpmkg9f93krj/karakterutskrift%20Noroff.pdf?dl=0" target="_blank" rel="noopener noreferrer" className="download-link">
                  Show Diploma
                </a>
              </span>
            </div>
            <div className="bi-wrapper">
              <img src="/assets/img/bilogo.png"></img>
              <span>
                <h3>Handelshøyskolen BI</h3>
                <h5>Markedsføringsledelse</h5>
                <p>08.2013 - 05.2017</p>
                <a href="https://www.dropbox.com/s/j5kz13nxji4ek6e/BI_Diplom.pdf?dl=0" target="_blank" rel="noopener noreferrer" className="download-link">
                  Show Diploma
                </a>
              </span>
            </div>
            <div className="eidsvoll-wrapper">
              <img src="/assets/img/eidsvoll.png"></img>
              <span>
                <h3>Eidsvoll Videregående skole</h3>
                <h5>Studiespesialisering</h5>
                <p>08.2009 - 06.2012</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MultiSection;
