import React from 'react';
import Typed from 'react-typed';

function Intro() {
    return (
        <div className="intro container d-flex flex-column">
          <h1 className="intro-title">Hi, my name is</h1>
          <h1 className="intro-name">Dave Oliverio.</h1>
          <span className="intro-text-slider">
            <Typed
              strings={[
                "Full Stack Web Developer"
              ]}
              typeSpeed={60}
            //   backSpeed={30}
            //   backDelay={1100}
            // //   loop
            />
          </span>
          <div className="mt-auto arrow">
            <div className="row text-center">
              <hr className="col my-auto"></hr>
            </div>
          </div>
        </div>
      )
}

export default Intro;