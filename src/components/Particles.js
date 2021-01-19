import React, { Component } from 'react';
import Particles from "react-tsparticles";

class ParticlesContainer extends Component {
  render() {
    return (
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 450,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              // direction: "",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 180000,
              },
              value: 200,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 10,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default ParticlesContainer;