import React, { useEffect } from "react";

function Services() {
  useEffect(() => {
    const writtenText = document.querySelector(".typing-text");
    const blinkingCursor = document.querySelector(".animated-blinker");

    const textArray = ["favorite apps", "skills", "experience"];
    const typingSpeed = 170;
    const deletingSpeed = 50;
    const newTextSpeed = 600;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!blinkingCursor.classList.contains("blinking")) blinkingCursor.classList.add("blinking");
        writtenText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        blinkingCursor.classList.remove("blinking");
        setTimeout(erase, newTextSpeed);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!blinkingCursor.classList.contains("blinking")) blinkingCursor.classList.add("blinking");
        writtenText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, deletingSpeed);
      } else {
        blinkingCursor.classList.remove("blinking");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingSpeed + 1100);
      }
    }

    if (textArray.length) setTimeout(type, newTextSpeed + 250);
  }, []);
  return (
    <>
      <section className="services" id="service">
        <div className="header">
          <h2>What I can help you with</h2>
        </div>
        <div className="service-icons">
          <div className="digital-marketing">
            <i className=" fas fa-poll fa-8x"></i>
            <h4>Digital Marketing</h4>
            <span className="dot"></span>
          </div>
          <div className="web-development">
            <i className="fas fa-laptop-code fa-8x"></i>
            <h4>Web Development</h4>
            <span className="dot"></span>
          </div>
          <div className="web-design">
            <i className="fas fa-magic fa-8x"></i>
            <h4>UX/UI Design</h4>
            <span className="dot"></span>
          </div>
          <div className="strategy">
            <i className="fas fa-chart-line fa-8x"></i>
            <h4>Strategy</h4>
            <span className="dot"></span>
          </div>
        </div>
        <div className="description">
          <span>
            <p>As a junior frontend developert I have acquired a lot of knowledge in front end development and with a bachelor's degree in marketing, I can help you with digital marketing, web development, design and marketing strategy.</p>
          </span>{" "}
          <span id="hide">
            <p>At the moment I am looking for a relevant job position and am hungry to get into the industry. As a Junior developer, I am a bit fresh in the game but develop my skills every day and have come a long way since I started in 2019.</p>
          </span>
        </div>
        <div className="container">
          <p>
            Take a look at my <span className="typing-text"></span>
            <span className="animated-blinker">&nbsp;</span>
          </p>
          <div className="cv-btn-wrapper">
            <a href="https://www.dropbox.com/s/06qq55gx3tfdvgz/Shamil_Babujev_CV.pdf?dl=1" target="_blank" rel="noopener noreferrer" className="cv-btn">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
