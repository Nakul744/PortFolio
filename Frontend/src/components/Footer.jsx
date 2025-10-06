// src/components/Footer.jsx

import React from 'react';
// You'll need to install react-icons: npm install react-icons
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define your social links
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Nakul744", name: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/nakul-thote", name: "LinkedIn" },
    { icon: <FaEnvelope />, url: "mailto:nakulthote20@gmail.com", name: "Email" },
  ];

  return (
    // Use 'bg-light' for a light background. Change to 'bg-dark' if your site is dark-themed.
    <footer className="bg-light pt-5 pb-4 border-top">
      <div className="container">
        <div className="row">
          
          {/* Section 1: Branding/Pitch */}
          <div className="col-lg-5 text-center col-md-6 mb-4">
            <h5 className="  text-uppercase mb-3">Nakul Thote.</h5>
            <p className="small text-muted">
              Passionate developer specializing in MERN stack and clean code architecture. Let's build something great.
            </p>
          </div>
          <div className='col-2'></div>


          {/* Section 2: Social Media */}
          <div className="col-lg-5  col-md-12 mb-4">
            
            <h6 className="text-uppercase fw-bold mb-3">Connect With Me</h6>
            <div className="d-flex">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={link.name}
                  className="btn btn-outline-dark btn-sm me-2" // Bootstrap button for styling
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="mt-3 small text-muted">
                nakulthote20@gmail.com
            </p>
          </div>
        </div> {/* End of row */}

        {/* Bottom Bar: Copyright */}
        <div className="text-center border-top pt-3 mt-3">
          <p className="mb-0 small text-muted">
            &copy; {currentYear} Nakul Thote. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;