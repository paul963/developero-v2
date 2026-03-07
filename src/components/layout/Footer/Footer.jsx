import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="logo">DEVELOPERO</div>
          <div className="footer-contact">
            <div className="contact-card">
              <p className="contact-card-title">Telefon</p>
              <a href="tel:+40777123123" className="contact-card-content">+40 777 123 123</a>
            </div>
            <div className="contact-card">
              <p className="contact-card-title">Email</p>
              <a href="mailto:hello@develope.ro " className="contact-card-content">hello@develope.ro </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            <p>
              @<span id="year">{year}</span> Developero
            </p>
          </div>
          <div className="footer-links">
            <a href="#"> Termeni și condiții</a>
            <a href="#"> Politica Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
