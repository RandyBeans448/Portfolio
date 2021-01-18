import React from "react";
import Div from "./Div";
const ScrollToTop = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"})

    return (
        <div>
        <button onClick={scrollToTop} className="back-to-top" > ⮝  Back to the top  ⮝ </button>
        <Div/>
      </div>
    )
}

export default ScrollToTop