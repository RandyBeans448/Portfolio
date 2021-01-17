import React, { Component } from "react";
import ParticleDiv from "./ParticleDiv"
import AOS from "aos";
import "aos/dist/aos.css";

export class HomePage extends Component {

  componentDidMount() {
    AOS.init({
      duration: 2500,
    });
  }
  
  render() {
    return (
      <div>
        <div>
          <div className="home-page-div">
            <p data-aos="fade-right" className="home-page-p">
              Hello, my name is
            </p>
            <h1 data-aos="fade-right" className="home-page-h1">
              Dominic Bishop
            </h1>
            <p data-aos="fade-right" className="home-page-p2">
              I design, build and create for the web.
            </p>
          </div>
        </div>
        {/* <ParticleDiv/> */}
      </div>
    );
  }
}

export default HomePage;
