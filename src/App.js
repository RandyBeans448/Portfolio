import "./App.css";
import React from "react";
import ParticlesContainer from "./components/Particles";
import NavBar from "./components/NavBar";
import Particles from "react-tsparticles";


export default () => (
  <div className="container">
    <NavBar />
    <ParticlesContainer/>
  </div>
  
);
