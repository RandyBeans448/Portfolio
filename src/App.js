import "./App.css";
import React from "react";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";

export default () => (
  <div className="container">
    <NavBar />
    <HomePage />
    <ProjectList />
    <Contact />
  </div>
);
