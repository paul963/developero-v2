import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="logo">DEVELOPERO</div>
          <div className="footer-menu">
            <p className="footer-menu-title">Link-uri utile</p>
            <p><a href="/termeni-conditii">Termeni și Condiții</a></p>
            <p><a href="/politica-confidentialitate">Politica de Confidențialitate</a></p>
            <p><a href="/politica-cookies"> Politica Cookies</a></p>
          </div>
          <div className="footer-menu">
            <p className="footer-menu-title">Contact</p>
            <p><a href="tel:+40777123123" className="contact-card-content">+40 777 123 123</a></p>
            <p><a href="mailto:hello@develope.ro " className="contact-card-content">hello@develope.ro</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            <p>
              © <span id="year">{year}</span> Developero
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
