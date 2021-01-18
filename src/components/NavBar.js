import React, { Component } from "react";
import HomePage from "./HomePage";
import ProjectList from "./ProjectList";
import Div from "./Div";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";

export class NavBar extends Component {
constructor(props) {
  super(props)
  this.scrollDiv = React.createRef();
}
  componentDidMount() {
    AOS.init({
      duration: 2500,
    });
  }
  
  scrollToProjects = () => {window.scroll({top: 900, behavior: "smooth"}) };
  scrollToContact = () => {this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' })};

  render() {
    return (
      <div>
        <Div/>
      <div className="nav-bar-div">
        <ul data-aos="fade-left" className="nav-bar-ul">
          <li className="nav-bar-li">
            <button className="nav-buttons" onClick={this.scrollToProjects}>
              Projects
            </button>
          </li>
          <li className="nav-bar-li">
            <button className="nav-buttons" onClick={this.scrollToContact}>
              Contact
            </button>
          </li>
        </ul>
      </div>
      <HomePage/>
      <ProjectList/>
      <Contact refProp={this.scrollDiv}/>
      </div>
    );

  }
}

export default NavBar;
