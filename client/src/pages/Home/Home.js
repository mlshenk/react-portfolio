import React from 'react';
import Hero from "../../components/Hero/hero"
import './home.css';

function Home() {
  return (
    <>
    <Hero text="Mike Shenk"/>
    <section className="container">
      <figure className="row justify-content-center">
        <div className="col-sm-4 col-xs-8">
          <img className="img-fluid" id="profile-pic" src="./images/linkedin-headshot.jpg" alt="profilepic"/>
        </div>
      </figure>
      <article className="bio row justify-content-sm-center">  
        <p className="col-sm-10"><span className="firstcharacter">I am</span>a Full-Stack Developer in Seattle, WA, and a graduate of the University of Washington full-time coding bootcamp, where I honed my skills building front-end and back-end applications. The course has allowed me to explore my creativity, build my technical skills, and build my professional portfolio. My experience as a collegiate varsity rower at UC Berkeley and my professional background in management at Enterprise, Regus, and Conner Homes have helped me thrive under pressure in team environments, while maintaining sharp focus on details and end-goals. Our first team in the bootcamp won two of four class awards for our group project, Project MixMe, because we were consistently focused, diligent, and selfless. My academic, athletic, and professional success to date can be attributed to adaptability and coachability, as well as my passion for creation and solving problems. 
        <br></br>
        With this full-stack web development certificate, I have honed my skills in JavaScript, React.js, MongoDB, and MySQL/Sequelize. I also have experience building full CRUD and MERN applications that are mobile-responsive and intuitive. I look forward to combining these traits with my technical training to provide innovative user-friendly products, develop efficient user experiences, and help my future company drive growth.
        <br></br>
        {/* Full Stack Developer leveraging over five years of management experience to successfully provide clients with effective and innovative products. With a full-stack development certificate from the University of Washington, I am well-learned in JavaScript, React.js, mySQL, and MongoDB, among other skills. Holding a bachelor's degree with a leadership focus, I have successfully managed communications for the non-profit Vision Rescue and have had a progressive medical management career with CityMD.  */}
        <br/><br/>

        {/* At Vision Rescue, I successfully established a new on-field reporting system that helped me create regular newsletters, presentations, and web content for global distribution to current and prospective partners. In my progressive medical management experience at CityMD, I was able to not only facilitate incredible Press Ganey scores at my clinics but cultivate a loyal patient and staff base who were committed through a company transition. My experience has molded me to be inventive, understanding and end-user mindful. */}
        </p>
      </article>
    </section>
    </>
  );
}

export default Home;
