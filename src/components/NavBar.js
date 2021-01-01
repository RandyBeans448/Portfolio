import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export class NavBar extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2500,
    });
  }
  scrollToProjects = () => {
    window.scroll({
      top: 900,
      behavior: "smooth",
    });
  };

  scrollToContact = () => {
    window.scroll({
      top: 4300,
      behavior: "smooth",
    });
  };

  render() {
    return (
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
    );
  }
}

export default NavBar;
