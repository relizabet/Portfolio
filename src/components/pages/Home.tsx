import React from 'react';
import Header from '../Header/Header';
import Headshot from "../../images/headshot.jpg";
import Ascent from "../../images/ascent.png";
import Tracker from "../../images/tracker.png";
import EightBit from "../../images/burger.png";
import VedgeIn from "../../images/vedge-in.png";
import Nav from "../Nav/Nav";
import Experience from "../Experience/Experience"


const Home: React.FC<{}> = () => {
    const headingOneAbout = "Rachel E. Campbell";
    const headingFourAbout = "Full Stack Web Developer";
    const headshot = Headshot;

    const headingOnePort = "Portfolio";
    const headingFourPort = "Selected Works";
    const ascent = Ascent;
    const tracker = Tracker;
    const eightBit = EightBit;
    const vedge = VedgeIn;

    const headingOneContact = "Contact Me";
    const headingFourContact = "Get In Touch";

    return (
        <>
          <Nav />
          <div id="about">
          <Header headingOne={headingOneAbout} headingFour={headingFourAbout}/>
            <div className="wrapper" >
              <div className="pad">
                <h2 className="h-odd">About Me</h2>
                <div className="about-grid">
                    <img src={headshot} id="headshot" alt="Rachel Campbell" />
                  <div className="portfolio-style">
                    <p className="para-odd">
                      Full Stack Web Developer leveraging a background of more than five years in Customer Service, Digital Design, and Fine Arts. Proficient in modern HTML, CSS, and Javascript.
                    </p>
                    <p className="para-odd">
                      Excellent problem solver who thrives in a team environment. Strengths in sticking with difficult problems, design, and communication.
                    </p>
                    <p className="para-odd">
                      Download a copy of my resume <a href="https://tinyurl.com/relizabeth-resume">here</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pad"></div>
              <div className="pad">
                <h2>Skills</h2>
                <Experience />
              </div>
              </div>
              <div className="pad"></div>
            </div>
            <div className="reset"  id="portfolio-link">
              <Header headingOne={headingOnePort} headingFour={headingFourPort} />
              <div className="wrapper">
                <div className="pad">
                  <div className="portfolio-grid">
                    <a href="https://ascent-sobriety.herokuapp.com/">
                      <img src={ascent} alt="Ascent Sobriety" />
                    </a>
                    <div className="portfolio-style">
                    <h2 className="h-odd" id="portfolio">Ascent Sobriety</h2>
                    <p className="para-odd">
                      Ascent Sobriety Tool helps members track their daily mood & thoughts as well as various lengths of sobriety. In a time where more and more people are living sober lifestyles, this app caters to those who are seeking to track continuous time as well as discontinuous time. This application was built with Express, Sequelize, MySQL, CORS, Nodemailer, Passport, Express-Handlebars, Moment, ApexCharts, and Bootstrap.
                    </p>
                    <div className="btn-grid">
                      <button value="" className="form-submit btn-visit">
                        <a
                          href="https://ascent-sobriety.herokuapp.com/"
                          >Visit</a
                        >
                      </button>
                      <button value="" className="form-submit btn-code">
                        <a
                        href="https://github.com/keiththarp/Ascent-Sobriety-Tool"
                          
                          >Code</a
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pad"></div>
              <div className="pad">
                <div className="portfolio-grid">
                  <div className="portfolio-style">
                    <h2 className="h-even">Eat Da Burger</h2>
                    <p className="para-even">
                      An 8-Bit styled Burger Restaurant where users can order, eat, and delete burgers of their choosing. Built with Node.js, Express, Express-Handlebars, and MySQL.
                    </p>
                    <div className="btn-grid-even">
                      <button value="" className="form-submit btn-visit-even">
                        <a
                          href="https://sleepy-reaches-07786.herokuapp.com/"
                          >Visit</a
                        >
                      </button>
                      <button value="" className="form-submit btn-code-even">
                        <a
                          href="https://github.com/relizabet/Eat-Da-Burger"
                          >Code</a
                        >
                      </button>
                    </div>
                  </div>
                  <a className="portfolio-even" href="https://relizabet.github.io/Eat_Da_Burger/">
                    <img className="portfolio-even" src={eightBit} alt="" />
                  </a>
                </div>
              </div>
              <div className="pad"></div>
              <div className="pad">
                <div className="portfolio-grid">
                  <a href="https://vedge-in.herokuapp.com/">
                    <img src={vedge} alt="" />
                  </a>
                  <div className="portfolio-style">
                    <h2 className="h-odd">Vedge-In</h2>
                    <p className="para-odd">
                      Broaden your veggie horizons with the Vedge-In Challenge! Vedge-In is an application designed to help users eat healthier by encouraging them to increase the amount and diversity of vegetables in their diet. Log your veggie intake, challenge your friends, and watch you and your community get stronger and healthier!
                    </p>
                    <div className="btn-grid">
                      <button value="" className="form-submit btn-visit">
                        <a
                          href="https://vedge-in.herokuapp.com/"
                          >Visit</a
                        >
                      </button>
                      <button  value="" className="form-submit btn-code">
                        <a
                          href="https://github.com/relizabet/veg-out"
                          >Code</a
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pad"></div>
              <div className="pad">
                <div className="portfolio-grid">
                  <div className="portfolio-style">
                    <h2 className="h-even">Fitness Tracker</h2>
                    <p className="para-even">
                      This application is a workout tracker that allows users to track current workouts and view them as a data set to track progress over time. Built with node.js, MongoDb, and Mongoose.
                    </p>
                    <div className="btn-grid-even">
                      <button value="" className="form-submit btn-visit-even">
                        <a
                          href="https://hidden-coast-17443.herokuapp.com/">Visit</a>
                      </button>
                      <button value="" className="form-submit btn-code-even">
                        <a
                          href="https://github.com/relizabet/Workout_Tracker">Code</a>
                      </button>
                    </div>
                  </div>
                  <a className="portfolio-even" href="https://hidden-coast-17443.herokuapp.com/">
                    <img className="portfolio-even" src={tracker} alt="Workout Tracker" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="contact">
          <Header headingOne={headingOneContact} headingFour={headingFourContact} />
            <div className="wrapper">
      <div className="pad">
        <div className="social-media">
          <div className="social-para">
            <h3>Github</h3>
            <p>
              See my past projects, and anything that I am currently working on.
            </p>
            <a href="https://github.com/relizabet"
              > <i className="fa fa-github" aria-hidden="true"> </i></a>
          </div>
          <div className="social-para">
            <h3>LinkedIn</h3>
            <p>
              Visit my LinkedIn profile to see my work history and job
              experience.
            </p>
            <a
              href="https://www.linkedin.com/in/rachel-elizabeth-campbell-2273a8137/"
            > 
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
          {/* <div className="social-para">
            <h3></h3>
            <p>
            </p>
            <a href="" > 
              <i className="fa fa-" aria-hidden="true"></i>
            </a>
          </div> */}
        </div>
      </div>
      <div className="pad"></div>
    </div>
    </div>
        </>
    );
}

export default Home;