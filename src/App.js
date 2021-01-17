import "./App.css";
import React from "react";

import ParticlesContainer from "./components/Particles";
import NavBar from "./components/NavBar";

export default () => (
  <div className="container">
    <NavBar />
    <div id="tsparticles" className="tsparticles">
          <ParticlesContainer />
        </div>
  </div>
);
