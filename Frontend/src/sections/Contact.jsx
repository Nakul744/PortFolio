// src/components/Contact.jsx

import React from "react";
import "./Contact.css";

function Contact() {
  // ⚠️ Note: No state or custom handleSubmit function is needed. 
  // The form uses native HTML action/method for direct submission to Formspree.

  return (
    <section id="contact" className="py-5 text-center">
      <div className="container pt-5">
        <h2 className="fw-bold text-primary mb-4">Contact Me</h2>
        <p className="text-muted mb-5">
          I’d love to connect! Whether you have a question, a project idea, or
          just want to say hi — feel free to reach out.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form
              // 🚨 This is your Formspree endpoint. The data will be sent here, 
              // and Formspree will forward it to your registered email.
              action="https://formspree.io/f/mblzkbld" 
              method="POST"
              className="p-4 rounded shadow-sm bg-white text-start"
            >
              
              {/* Name Input */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name" 
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="_replyto" // Using '_replyto' allows you to reply directly to the sender's email.
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn btn-primary px-4"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;