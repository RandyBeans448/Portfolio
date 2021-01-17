import React from "react";
import ParticlesContainer from "./Particles";

const ScrollToTop = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"})

    return (
        <div>
        <button onClick={scrollToTop} className="back-to-top" > ⮝  Back to the top  ⮝ </button>
        <div id="tsparticles" className="tsparticles">
          <ParticlesContainer />
        </div>
      </div>
    )
}

export default ScrollToTop