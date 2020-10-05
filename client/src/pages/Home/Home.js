import React from 'react';
import Hero from "./../../components/Hero/hero"
import './home.css';

function Home() {
  return (
    <>
    <Hero text="Mike Shenk"/>
    <section className="container">
      <figure className="row justify-content-center">
        <div className="col-sm-4 col-xs-8">
          <img className="img-fluid" id="profile-pic" src="./images/linkedin-headshot2020.jpg" alt="profilepic"/>
        </div>
      </figure>
      <article className="bio row justify-content-sm-center">  
        <p className="col-sm-10"><span className="firstcharacter">Hello!</span> Thank you for checking out my portfolio! <br></br><br></br>
        I am a Full Stack Developer in Seattle, WA, and a graduate of the University of Washington full-time coding bootcamp, where I honed my skills building front-end and back-end applications. The course has allowed me to explore my creativity, expand my technical skills, and expand my professional portfolio. My experience as a collegiate varsity rower at UC Berkeley and my professional background in management at Enterprise, Regus, and Conner Homes have helped me thrive under pressure in team environments, while maintaining sharp focus on details and end-goals. Our first team in the bootcamp won two of four class awards for our group project, Project MixMe, because we were consistently focused, diligent, and selfless. My academic, athletic, and professional success to date can be attributed to adaptability and coachability, as well as my passion for creation and solving problems. 
        <br></br>
        <br></br>
        With this full-stack web development certificate, I have honed my skills in JavaScript, React.js, MongoDB, and MySQL/Sequelize. I also have experience building full CRUD and MERN applications that are mobile-responsive and intuitive. I look forward to combining these traits with my technical training to provide innovative user-friendly products, develop efficient user experiences, and help my future company drive growth.
        </p>
      </article>
    </section>
    </>
  );
}

export default Home;
