import React, { Component } from "react";
import "./ScrollToTop"
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";

export class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 2500,
    });
  }

  backToTheTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    console.log(this.state.contactRef)
    return (
      <div ref={this.props.refProp} data-aos="fade">
        <h1 data-aos="fade-right" className="project-h1-contact">
          Contact &#9993;
        </h1>
        <form name="contact" action="/contact" method="POST" data-netlify="true" className="contact-div">
          <div className="contact-div-inner">
            <input type="hidden" name="form-name" value="contact"></input>
            <p className="contact-p">Name</p>
            <input
            required
            type="text"
              name="name"
              id="name"
              placeholder="Name..."
              className="contact-input"
            ></input>
            <p className="contact-p">Email</p>
            <input
            required
            type="email"
              name="email"
              id="email"
              placeholder="Email..."
              className="contact-input"
            ></input>
            <p className="contact-p">Subject</p>
            <input
              name="subject"
              id="subject"
              placeholder="Subject..."
              className="contact-input"
            ></input>
            <p className="contact-p">Message</p>
            <textarea
            required
              name="message"
              id="message"
              placeholder="Message"
              className="contact-textarea"
            ></textarea>
            <div data-netlify-recaptcha="true"/></div>
          <div>
          <button type ="submit" className="contact-button" >Submit</button>
          </div>
        </form>
    <ScrollToTop/>
      </div>
    );
  }
}

export default Contact;
