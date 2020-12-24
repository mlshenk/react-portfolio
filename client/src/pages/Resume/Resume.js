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
            <img className="img-fluid" id="biopic" src="./images/kraken-headshot.jpg" alt="profilepic" />
          </div>
        </figure>
        
        <figure className="row justify-content-center iframe-figure-div">
          <iframe title="resume" className="resume-window embed-responsive-item" src="./assets/mike-shenk-resume2020.pdf" width="100%" height="800px"></iframe>
        </figure>
        <figure className="row justify-content-center">
          <a href="./assets/mike-shenk-resume2020.pdf" target="_blank" className="resume-link"><strong>Click to view:</strong> Mike's Resume</a>
        </figure>
        <a href="https://www.linkedin.com/in/michaelshenk415/">
          <img className="linkedin justify-content-center" src="./images/linkedinlogo.png" alt="linkedinlogo" target="_blank" />
        </a>
      </section>
    </>
  );
}

export default Resume;
