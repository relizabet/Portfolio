import React from 'react';
import Header from '../Header/Header';
import Headshot from "../../images/headshot.jpg";
import Ascent from "../../images/ascent.png";
import WB from "../../images/wbytes903.png";
import EightBit from "../../images/burger.png";
import PwGen from "../../images/pwgen903.png";
import Nav from "../Nav/Nav";


const Home: React.FC<{}> = () => {
    const headingOneAbout = "Rachel E. Campbell";
    const headingFourAbout = "Full Stack Web Developer";
    const headshot = Headshot;

    const headingOnePort = "Portfolio";
    const headingFourPort = "Selected Works";
    const ascent = Ascent;
    const wb = WB;
    const eightBit = EightBit;
    const pwgen = PwGen;

    const headingOneContact = "Contact Me";
    const headingFourContact = "Get In Touch";

    return (
        <>
          {/* <div className="justify" >
            <div className="logo">
              <div className="logo-div header-btn">
                <li className="logo-text link-style" >REC</li>
              </div>
            </div>
            <Nav />
          </div> */}
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
            </div>
            <div className="reset"  id="portfolio-link">
              <Header headingOne={headingOnePort} headingFour={headingFourPort} />
              <div className="wrapper">
                <div className="pad">
                  <div className="portfolio-grid">
                    <img src={ascent} alt="Ascent Sobriety" />
                    <div className="portfolio-style">
                    <h2 className="h-odd" id="portfolio">Ascent Sobriety</h2>
                    <p className="para-odd">
                      Ascent Sobriety Tool helps members track their daily mood & thoughts as well as various lengths of sobriety. In a time where more and more people are living sober lifestyles, this app caters to those who are seeking to track continuous time as well as discontinuous time. This application was built with Express, Sequelize, MySQL, CORS, Nodemailer, Passport, Express-Handlebars, Moment, ApexCharts, and Bootstrap.
                    </p>
                    <div className="btn-grid">
                      <button value="" className="form-submit btn-visit">
                        <a
                          href="https://relizabet.github.io/dry-coders/"
                          >Visit</a
                        >
                      </button>
                      <button value="" className="form-submit btn-code">
                        <a
                          href="https://ascent-sobriety.herokuapp.com/"
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
                          href="https://relizabet.github.io/Eat_Da_Burger/"
                          >Visit</a
                        >
                      </button>
                      <button value="" className="form-submit btn-code-even">
                        <a
                          href="https://github.com/relizabet/Eat_Da_Burger"
                          >Code</a
                        >
                      </button>
                    </div>
                  </div>
                  <img className="portfolio-even" src={eightBit} alt="" />
                </div>
              </div>
              <div className="pad"></div>
              <div className="pad">
                <div className="portfolio-grid">
                  <img src={pwgen} alt="" />
                  <div className="portfolio-style">
                    <h2 className="h-odd">Password Generator</h2>
                    <p className="para-odd">
                      For the Password Generator assignment we were asked to create a an
                      application that would provide a random password to a user based
                      on length, letter, number, and special character options that the
                      user needed. The application uses HTML, CSS, Javascript.
                    </p>
                    <div className="btn-grid">
                      <button value="" className="form-submit btn-visit">
                        <a
                          href="https://relizabet.github.io/Random_Password_Gen/"
                          >Visit</a
                        >
                      </button>
                      <button  value="" className="form-submit btn-code">
                        <a
                          href="https://github.com/relizabet/Random_Password_Gen"
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
                    <h2 className="h-even">Work Bytes</h2>
                    <p className="para-even">
                      In this project we were asked to work as a group to come up with
                      an original application concept based on API's of our own
                      choosing. After a bit of pivoting due to usibility issues with a
                      few API's that we initially chose, we landed on the idea of an
                      application that would allow you to choose a job based on the
                      restaurants located nearby. The application uses HTML, CSS,
                      jQuery, Javascript, Mapquest API, Muse API, Zomato API, and the
                      Materialize CSS framework.
                    </p>
                    <div className="btn-grid-even">
                      <button value="" className="form-submit btn-visit-even">
                        <a
                          href="https://relizabet.github.io/Work_Bytes/">Visit</a>
                      </button>
                      <button value="" className="form-submit btn-code-even">
                        <a
                          href="https://github.com/relizabet/Work_Bytes">Code</a>
                      </button>
                    </div>
                  </div>
                  <img className="portfolio-even" src={wb} alt="Work Bytes" />
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
          <div className="social-para">
            <h3>Twitter</h3>
            <p>
              Want to keep up with me on social media? Follow me on twitter.
            </p>
            <a href="https://twitter.com/rachelizacampb1" > 
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="pad"></div>
    </div>
    </div>
        </>
    );
}

export default Home;