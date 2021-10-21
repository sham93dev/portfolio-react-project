import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <div className="projects-text">
          <h2>My Recent Startup projects</h2>
        </div>

        <Carousel
          className="carousel-wrapper-design"
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          <div className="slider">
            <div className="slider-media">
              <img src="./assets/img/holidaze.jpg" alt="Home decoration" />
              <div className="img-overlay">
                <a href="https://holidaze-bergen-project-2.netlify.app/" className="visit-btn">
                  Open Project
                </a>
              </div>
            </div>
            <div className="slider-details">
              <h4>Holidaze Bergen</h4>
            </div>
            <div className="title">
              <i className="html-icon fab fa-react fa-2x"></i>
              <i className="css-icon fab fa-node-js fa-2x"></i>
              <i className="js-icon fab fa-github fa-2x"></i>
              <i className="sass-icon fab fa-aws fa-2x"></i>
            </div>
          </div>

          <div className="slider">
            <div className="slider-media">
              <img src="./assets/img/car.jpg" alt="Home decoration" />
              <div className="img-overlay">
                <a href="https://2050.no" target="_blank" rel="noopener noreferrer" className="visit-btn">
                  Enter the page
                </a>
              </div>
            </div>
            <div className="slider-details">
              <h4>2050 Trafikkskole</h4>
            </div>
            <div className="title">
              <i className="html-icon fab fa-html5 fa-2x"></i>
              <i className="css-icon fab fa-css3-alt fa-2x"></i>
              <i className="wix-icon fab fa-wix fa-2x"></i>
            </div>
          </div>

          <div className="slider">
            <div className="slider-media">
              <img src="./assets/img/happy tails.jpg" alt="Happy Tails" />
              <div className="img-overlay">
                <a href="https://www.dropbox.com/s/8thcu0u6sx2gvek/Happy%20Tails%20app.pdf?dl=1" target="_blank" rel="noopener noreferrer" className="visit-btn">
                  Download PDF
                </a>
              </div>
            </div>
            <div className="slider-details">
              <h4>Happy Tails App Poster</h4>
            </div>
            <div className="title">
              <div className="text-icons">
                <h3 id="ps">Ps</h3>
                <h3 id="ai">Ai</h3>
              </div>
            </div>
          </div>

          <div class="slider">
            <div class="slider-media">
              <img src="./assets/img/homedecor2.jpg" alt="Kurban`s Kitchen" />
              <div class="img-overlay">
                <a href="https://babuevs.no/interior/index.html" target="_blank" rel="noopener noreferrer" class="visit-btn">
                  Enter the page
                </a>
              </div>
            </div>
            <div class="slider-details">
              <h4>Home Decor</h4>
            </div>
            <div class="title">
              <i class="html-icon fab fa-html5 fa-2x"></i>
              <i class="css-icon fab fa-css3-alt fa-2x"></i>
              <i class="sass-icon fab fa-sass fa-2x"></i>
              <i class="bootstrap-icon fab fa-bootstrap fa-2x"></i>
            </div>
          </div>
          <div class="slider">
            <div class="slider-media">
              <img src="./assets/img/kitchen.jpeg" alt="Kurban`s Kitchen" />
              <div class="img-overlay">
                <a href="https://babuevs.no/kitchen/index.html" target="_blank" rel="noopener noreferrer" class="visit-btn">
                  Enter the page
                </a>
              </div>
            </div>
            <div class="slider-details">
              <h4>Kurban`s Kitchen</h4>
            </div>
            <div class="title">
              <i class="html-icon fab fa-html5 fa-2x"></i>
              <i class="css-icon fab fa-css3-alt fa-2x"></i>
              <i class="sass-icon fab fa-sass fa-2x"></i>
              <i class="js-icon fab fa-js fa-2x"></i>
              <i class="bootstrap-icon fab fa-bootstrap fa-2x"></i>
            </div>
          </div>
        </Carousel>

        <div className="video-container">
          <video loop autoPlay muted playsinline id="bg-video">
            <source src="./assets/video/white.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="custom-shape-divider-bottom-1611286464">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Projects;
