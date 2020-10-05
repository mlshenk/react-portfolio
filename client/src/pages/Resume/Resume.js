import React from 'react';
import Hero from "../../components/Hero/hero"
import './resume.css';

function Resume() {
  return (
    <>
      <Hero text="Resume" />

      <section className="container">
        <figure className="row justify-content-center">
          <div className="col-sm-4 col-xs-8">
            <img className="img-fluid" id="biopic" src="./images/linkedin-headshot2020.jpg" alt="profilepic" />
          </div>
        </figure>
        <figure className="row justify-content-center iframe-figure-div">
          <iframe title="resume" className="resume-window embed-responsive-item" src="./assets/mls-resume-react092520.pdf" width="100%" height="800px"></iframe>
        </figure>
        <figure className="row justify-content-center">
          <a href="./assets/mike-shenk-tech-resume2020.pdf" target="_blank" className="resume-link"><strong>Click to view:</strong> Mike's Resume</a>
        </figure><p>Click the link below to see more detail about my career on my LinkedIn page!</p>
        <a href="https://www.linkedin.com/in/michaelshenk415/">
          <img className="sm-logos" src="./images/linkedinlogo.png" alt="linkedinlogo" target="_blank" />
        </a>
      </section>
    </>
  );
}

export default Resume;
