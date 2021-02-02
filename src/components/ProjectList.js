import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export class ProjectList extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    AOS.init({
      duration: 2500,
    });
    
  }
  render() {
    return (
      <div>
        <h1 id="project-list" data-aos="fade-right" className="project-h1-title">
          Projects
        </h1>
        <div className="projects-page">
          <div data-aos="fade" className="project-list-item">
            <h2 className="project-one-title">Full stack app</h2>
            <p className="project-one-text">
              Using React to create a client-side app for my existing school
              database REST API. This full stack JavaScript application will
              allow users to view a list of courses and the detail for a
              specific course, sign up to create an account or sign in with an
              existing account, and create, update, or delete courses. Follow the
               Github link for the log in details.
            </p>
            <p> Built with: </p>
            <ul className="project-tech-ul">
              <li className="project-tech-li"> React </li>
              <li className="project-tech-li"> SQLite </li>
              <li className="project-tech-li"> Sequelize </li>
            </ul>
            <div className="live-div">
              <a
                className="live-link"
                href={
                  "https://quizzical-haibt-ebe8ac.netlify.app/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Live view
              </a>
            </div>
            <div className="github-image">
              <a
                className="github-link"
                href={
                  "https://github.com/RandyBeans448/Project-10-Full-stack-app"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div data-aos="fade" className="project-list-item">
            <h2 className="project-one-title">REST API</h2>
            <p className="project-one-text">
              Using the popular Express web application framework and a SQL
              database to create a REST API that lets users create, list,
              update, and delete items from a school database.
            </p>
            <p> Built with: </p>
            <ul className="project-tech-ul">
              <li className="project-tech-li"> SQLite </li>
              <li className="project-tech-li"> Sequelize </li>
              <li className="project-tech-li"> Node.js </li>
              <li className="project-tech-li"> Express </li>
            </ul>
              <div className="live-div">
                <a className="live-link" href={"https://mern-api-backend.herokuapp.com/"} target="_blank" rel="noopener noreferrer">Live view</a>
              </div>
            <div className="github-image">
              <a
                className="github-link"
                href={"https://github.com/RandyBeans448/Project-9-REST-API"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div data-aos="fade" className="project-list-item">
            <h2 className="project-one-title">SQL Library</h2>
            <p className="project-one-text">
              Working with databases — storing, retrieving, updating and
              deleting information — is an important software developer skill.
              In this project, I have create a library application for listing
              books that makes the use of CRUD operations. This has been
              executed using JavaScript, Node.js, Express, Pug, and the SQL ORM
              Sequelize.
            </p>
            <p> Built with: </p>
            <ul className="project-tech-ul">
              <li className="project-tech-li"> SQLite </li>
              <li className="project-tech-li"> Sequelize </li>
              <li className="project-tech-li"> Node.js </li>
              <li className="project-tech-li"> Express </li>
            </ul>
            <div className="live-div">
              <a
                className="live-link"
                href={"https://project-8-host.herokuapp.com/books"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live view
              </a>
            </div>
            <div className="github-image">
              <a
                className="github-link"
                href={"https://github.com/RandyBeans448/Project-8-SQL-Library"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div data-aos="fade" className="project-list-item">
            <h2 className="project-one-title">React gallery</h2>
            <p className="project-one-text">
              Using the React JavaScript library to create a gallery app. The
              user will be able to make a API call to Flickr relating to query
              that has been submitted using the search bar.
            </p>
            <p> Built with: </p>
            <ul className="project-tech-ul">
              <li className="project-tech-li"> React </li>
            </ul>
            <div className="live-div">
              <a
                className="live-link"
                href={"https://silly-swartz-be5958.netlify.app/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live view
              </a>
            </div>
            <div className="github-image">
              <a
                className="github-link"
                href={
                  "https://github.com/RandyBeans448/Project-7-React-Gallery-App"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div data-aos="fade" className="project-list-item">
            <h2 className="project-one-title">First express and node app</h2>
            <p className="project-one-text">
              For my first Node.js project I have build a simple portfolio site.
              I have used Node.js in conjunction with Express and Pug templates
              to execute this.
            </p>
            <p> Built with: </p>
            <ul className="project-tech-ul">
              <li className="project-tech-li"> Node.js </li>
              <li className="project-tech-li"> Express </li>
            </ul>
            <div className="live-div">
              <a
                className="live-link"
                href={"https://host-app-6.herokuapp.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live view
              </a>
            </div>
            <div className="github-image">
              <a
                className="github-link"
                href={
                  "https://github.com/RandyBeans448/Project-6-First-express-and-node-app"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div data-aos="fade" className="project-list-item">
            <h2 className="project-one-title">Public API Requests</h2>
            <p className="project-one-text">
              Using the JavaScript fetch API method, I have create an employee
              directory by communicating with a third-party API to display the
              employee's details to the DOM.
            </p>
            <p> Built with: </p>
            <ul className="project-tech-ul">
              <li className="project-tech-li"> JavaScript </li>
            </ul>
            <div className="live-div">
              <a
                className="live-link"
                href={
                  "https://randybeans448.github.io/Project-5-Public-API-Requests/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Live view
              </a>
            </div>
            <div className="github-image">
              <a
                className="github-link"
                href={
                  "https://github.com/RandyBeans448/Project-5-Public-API-Requests"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div data-aos="fade" className="project-list-item">
            <h2 className="project-one-title">OOP Game Show App</h2>
            <p className="project-one-text">
              A browser-based, word guessing game: "Phrase Hunter." Using
              JavaScript and OOP (Object-Oriented Programming) to select a
              random, hidden phrase. A player tries to guess the phrase by
              selecting individual letters from an onscreen keyboard.
            </p>
            <p> Built with: </p>
            <ul className="project-tech-ul">
              <li className="project-tech-li"> JavaScript </li>
            </ul>
            <div className="live-div">
              <a
                className="live-link"
                href={
                  "https://randybeans448.github.io/Project-4-OOP-Phrase-Hunter./"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Live view
              </a>
            </div>
            <div className="github-image">
              <a
                className="github-link"
                href={
                  "https://github.com/RandyBeans448/Project-4-OOP-Phrase-Hunter."
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div data-aos="fade" className="project-list-item">
            <h2 className="project-one-title">Interactive Form</h2>
            <p className="project-one-text">
              A simple interactive form that uses Javascript and Regex to
              validate users information when filling out the inputs. The user
              is then notified depending on the validity of the information
              given.
            </p>
            <p> Built with: </p>
            <ul className="project-tech-ul">
              <li className="project-tech-li"> JavaScript </li>
            </ul>
            <div className="live-div">
              <a
                className="live-link"
                href={
                  "https://randybeans448.github.io/Project-3-Interactive-Form/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Live view
              </a>
            </div>
            <div className="github-image">
              <a
                className="github-link"
                href={
                  "https://github.com/RandyBeans448/Project-3-Interactive-Form"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div data-aos="fade" className="project-list-item">
            <h2 className="project-one-title">List pagination and filtering</h2>
            <p className="project-one-text">
              A small web app that uses Javascript to condense the list of users
              into groups of ten to display to the DOM. The user can then cycle
              through each page to see the next ten students in the list.
            </p>
            <p> Built with: </p>
            <ul className="project-tech-ul">
              <li className="project-tech-li"> JavaScript </li>
            </ul>
            <div className="live-div">
              <a
                className="live-link"
                href={
                  "https://randybeans448.github.io/Project-2-List-pagination-and-filtering/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Live view
              </a>
            </div>
            <div className="github-image">
              <a
                className="github-link"
                href={
                  "https://github.com/RandyBeans448/Project-2-List-pagination-and-filtering"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div data-aos="fade" className="project-list-item">
            <h2 className="project-one-title">Random Quote Generator</h2>
            <p className="project-one-text">
              My first ever web application! Using JavaScript Objects to display
              a random Quote and its accompanying data to the user.
            </p>
            <p> Built with: </p>
            <ul className="project-tech-ul">
              <li className="project-tech-li"> JavaScript </li>
            </ul>
            <div className="live-div">
              <a
                className="live-link"
                href={
                  "https://randybeans448.github.io/Project-1-Random-Quote-Generator/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Live view
              </a>
            </div>
            <div className="github-image">
              <a
                className="github-link"
                href={
                  "https://github.com/RandyBeans448/Project-1-Random-Quote-Generator"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}

export default ProjectList;
