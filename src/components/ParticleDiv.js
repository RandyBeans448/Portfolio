import React, { Component } from "react";
import ParticlesContainer from "./Particles";


export class ParticleDiv extends Component {
    
    render() {
      return (
          <div className="tsparticles">
            <ParticlesContainer />
          </div>
      );
    }
  }
  
  export default ParticleDiv;
  