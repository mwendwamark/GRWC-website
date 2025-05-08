import React, { useRef } from "react";
import "./HomeContact.css";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomeContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wmvkm1d", "template_yu5ltqs", form.current, {
        publicKey: "dpxx1mCJz_BtrNyGF",
      })
      .then(
        () => {
          toast.success("Message Sent");
        },
        (error) => {
          toast.error("Failed...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <ToastContainer />
      <section className="contact-us-section section section container">
        <header className="history-headers container">
          <h2 className="small-header" data-aos="fade-down" data-aos-duration="800">CONTACT US</h2>
          <h1 className="big-header" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">GET IN TOUCH</h1>
        </header>
        <div className="contact-us-contents">
          <form ref={form} onSubmit={sendEmail} data-aos="fade-right" data-aos-duration="1000">
            <h1 data-aos="fade-up" data-aos-delay="300">Send us a message</h1>
            <div className="name-field" data-aos="fade-up" data-aos-delay="400">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                required
                name="name"
              />
            </div>

            <div className="contact-field" data-aos="fade-up" data-aos-delay="500">
              <label htmlFor="contact">Phone Number</label>
              <input
                type="text"
                id="contact"
                placeholder="0710203040"
                required
                name="contact"
              />
            </div>

            <div className="email-field" data-aos="fade-up" data-aos-delay="600">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="john@gmail.com"
                required
                name="email"
              />
            </div>

            <div className="subject-field" data-aos="fade-up" data-aos-delay="700">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Prayer Item"
                required
                name="subject"
              />
            </div>

            <div className="content-field" data-aos="fade-up" data-aos-delay="800">
              <label htmlFor="content">Content</label>
              <textarea
                type="textarea"
                id="content"
                placeholder="Prayer for ..."
                required
                name="content"
              ></textarea>
            </div>

            <button type="submit" data-aos="zoom-in" data-aos-delay="900">
              Send Message <FiSend />
            </button>
          </form>
          <div className="map-section" data-aos="fade-left" data-aos-duration="1200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8990225418943!2d36.9192241!3d-1.2299784999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1572fdbd17e9%3A0x928ea601b7b9255d!2sRivival%20Wave%20Church!5e0!3m2!1sen!2ske!4v1733331807916!5m2!1sen!2ske"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="location"
              data-aos="zoom-in" 
              data-aos-delay="300"
            ></iframe>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContact;
