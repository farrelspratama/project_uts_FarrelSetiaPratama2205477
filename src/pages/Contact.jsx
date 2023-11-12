import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dsa66gp",
        "template_m1ao0ln",
        form.current,
        "6b80Xs6hhT_0vp9ls"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <h1>Get In Touch With Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />

          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />

          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
