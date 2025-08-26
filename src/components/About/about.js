import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Typed from 'typed.js';
import profileImage from '../../assets/images/daveoliverio.jpg';

function About() {
  const typedEl = useRef(null);     // element to inject the typing into
  const typedInstance = useRef(null);

  useEffect(() => {
    // Only run in the browser
    typedInstance.current = new Typed(typedEl.current, {
      strings: ['Full Stack Web Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 200,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  return (
    <>
      <section id="about" className="about">
        <Container className="row upper-container">
          <div className="image-container">
            <img
              className="col-lg-6 col-md-12 m-auto profile-pic"
              src={profileImage}
              alt="Dave Oliverio"
            />
            <h1 className="intro-title">Hello, I'm</h1>
            <h1 className="intro-name">Dave Oliverio</h1>
          </div>

          <div className="text-slider-div">
            <span className="intro-text-slider">
              {/* typed.js will inject text into this span */}
              <span ref={typedEl} />
            </span>
          </div>
        </Container>

        <div className="inner container">
          <div className="row">
            <div className="about-description col-lg-6 col-md-12">
              <p>I'm a Full Stack Developer based out of Pennsylvania.</p>
              <p>
                Since I was young I've always had an interest in coding. From the early days
                building websites using HTML to now, it's something I've always paid attention to.
                At the start of the pandemic I made a huge life decision to leave my full time
                career and switch paths to focus on coding. I recently received my certificate of
                Coding from the Uconn Full Stack Bootcamp.
              </p>
              <p>
                Outside of coding, I have a passion for music and cooking. I've been playing guitar
                and drums for almost all of my life, and cooking for just as long.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
