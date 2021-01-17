import React from "react";

const ScrollToTop = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"})

    return (
        <div>
        <button onClick={scrollToTop} className="back-to-top" > ⮝  Back to the top  ⮝ </button>
      </div>
    )
}

export default ScrollToTop