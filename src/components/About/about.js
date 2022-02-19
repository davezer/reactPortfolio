import React from 'react';

function About() {
    return(
        <>
        <section id="about" className="about">
            <h2 className="title">
            Hello, I'm David!
            </h2>
            <div className="inner container">
                <div className="row">
                    <div className="about-description col-lg-6 col-md-12">
                        <p>
                            I'm a Full Stack Developer based out of New Haven, CT. 
                        </p>
                        <p>
                            Since I was young I've always had an interest in coding. From the early days building websites using HTML to now, it's something I've always paid attention to. <br/>
                            At the start of the pandemic I made a huge life decision to leave my full time career and switch paths to focus on coding. I'm currently enrolled at the Uconn Full Stack Bootcamp.
                        </p>
                        <p>
                            Outside of coding, I have a passion for music and cooking. I've been playing guitar and drums for almost all of my life, and cooking for just as long. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}


export default About;