import React from 'react';
import Header from '../Header/Header';
import Headshot from "../../images/headshot.jpg";

const Home: React.FC<{}> = () => {
    const headingOne = "Rachel E. Campbell";
    const headingFour = "Full Stack Web Developer";
    const headshot = Headshot;

    return (
        <>
            <Header headingOne={headingOne} headingFour={headingFour}/>
    <div className="wrapper">
      <div className="pad" id="about">
        <h2 className="h-odd">About Me</h2>
        <div className="about-grid" id="about">
          <img src={headshot} id="headshot" alt="Rachel Campbell" />
          <div className="portfolio-style">
            <p className="para-odd">
                Hello! My name is Rachel. I am a studying Front End Web Development at
                the University of New Hampshire. I am a Full Stack Web Developer leveraging a background of 5+ in Customer Service and Fine Arts. Proficient in modern HTML, CSS, and Javascript along with many libraries and frameworks. Excellent problem solver who thrives in a team environment. Strengths in sticking with difficult problems, design, and communication.
            </p>
          </div>
        </div>
      </div>
      <div className="pad"></div>
      <div className="pad">
        <h2>Experience</h2>
        <p>
          I have experience in the following: Bootstrap, MaterializeUI, Sass, jQuery, TypeScript, Express, Node.js, Sequelize, MongoDB, Mongoose, React, JSX, Agile Development, Test Driven Development, Git, Postman, RESTful APIs, Heroku, and AWS.
        </p>
      </div>
      <div className="pad"></div>
      <div className="pad">
        <h2>Resume</h2>
        <p>
          To view and download my resume click<a
            href="Assets/dif.pdf"
            target="_blank"
            >here</a
          >.
        </p>
      </div>
      <div className="pad">
        <p></p>
      </div>
      </div>
        </>
    );
}

export default Home;