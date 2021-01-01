import React, { Component } from "react";
import AOS from "aos";
// import { db } from "./FireBase";
import "aos/dist/aos.css";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    AOS.init({
      duration: 2500,
    });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value,
    });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { name, email, message } = this.state;
  //   db.collection("contacts")
  //     .add({
  //       name: name,
  //       email: email,
  //       message: message,
  //     })
  //     .then(() => {
  //       console.log("Message sent");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  render() {
    return (
      <div data-aos="fade">
        <h1 data-aos="fade-right" className="project-h1-title">
          Contact &#9993;
        </h1>
        <form onChange={this.handleSubmit} className="contact-div">
          <div className="contact-div-inner">
            <p className="contact-p">Name</p>
            <input
              onChange={this.handleChange}
              id="name"
              placeholder="Name..."
              className="contact-input"
            ></input>
            <p className="contact-p">Email</p>
            <input
              onChange={this.handleChange}
              id="email"
              placeholder="Email..."
              className="contact-input"
            ></input>
            <p className="contact-p">Message</p>
            <textarea
              onChange={this.handleChange}
              id="message"
              placeholder="Message"
              className="contact-textarea"
            ></textarea>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
