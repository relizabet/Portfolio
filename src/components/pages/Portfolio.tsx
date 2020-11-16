import React from 'react';
import Header from "../Header/Header";

const Portfolio: React.FC<{}> = () => {
    const headingOne = "Portfolio";
    const headingFour = "Selected Works";


    return (
      <div className="reset">
      <Header headingOne={headingOne} headingFour={headingFour} />
        <div className="wrapper">
        <div className="pad">
          <div className="portfolio-grid" id="about">
            <img src="../../images/ascent.png" alt="Ascent Sobriety" />
            <div className="portfolio-style">
              <h2 className="h-odd">Ascent Sobriety</h2>
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
            <img className="portfolio-even" src="../../images/burger.png" alt="" />
          </div>
        </div>
        <div className="pad"></div>
        <div className="pad">
          <div className="portfolio-grid">
            <img src="../../images/pwgen903.png" alt="" />
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
            <img className="portfolio-even" src="../../images/wbytes903.png" alt="Work Bytes" />
          </div>
        </div>
        <div className="pad"></div>
        </div>
        </div>
    );
}

export default Portfolio;