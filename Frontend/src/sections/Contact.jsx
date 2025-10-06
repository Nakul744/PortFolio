// src/components/Contact.jsx

import React from "react";
import "./Contact.css";

// 🚨 Access the environment variable here
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT; 

function Contact() {
  // Check if the endpoint is available (good for debugging)
  if (!FORMSPREE_ENDPOINT) {
    console.error("VITE_FORMSPREE_ENDPOINT is not set!");
    return <section id="contact" className="py-5 text-center">
      <div className="container pt-5">
        <p className="text-danger fw-bold">Contact form error: Configuration missing.</p>
      </div>
    </section>;
  }

  return (
    <section id="contact" className="py-5 text-center">
      <div className="container pt-5">
        <h2 className="fw-bold text-primary mb-4">Contact Me</h2>
        {/* ... (rest of the header text) ... */}

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form
              // 🚨 USE THE JAVASCRIPT VARIABLE HERE
              action={FORMSPREE_ENDPOINT} 
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
                  name="_replyto" 
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