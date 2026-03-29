import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/#web", label: "Website" },
  { href: "/#infrastructure", label: "Infrastructură" },
  { href: "/#team", label: "Echipa" },
  { href: "/#portfolio", label: "Portfoliu" },
  { href: "/#about", label: "Despre" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const hash = href.replace("/", "");
    closeMenu();

    if (location.pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      {isMobile ? (
        <nav className={`nav-mobile ${isSticky ? "sticky" : ""}`}>
          <div className="nav-logo">
            <a href="/"><img src="../../../assets/developero-logo.webp" alt="Developero" /></a>
          </div>
          <button className={`hamburger ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-mobile-wrapper ${open ? "is-open" : ""}`}>
            <div className="nav-menu">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} onClick={(e) => handleNavClick(e, href)}>
                  {label}
                </a>
              ))}
            </div>
            <div className="nav-info">
              <a href="tel:+40777123123" className="contact-card-content">+40 777 123 123</a>
              <a href="mailto:hello@develope.ro " className="contact-card-content">hello@develope.ro</a>
            </div>
          </div>
        </nav>
      ) : (
        <nav className={`nav-desktop ${isSticky ? "sticky" : ""}`}>
          <div className="nav-logo">
            <a href="/"><img src="../../../assets/developero-logo.webp" alt="Developero" /></a>
          </div>
          <div className="nav-menu">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={(e) => handleNavClick(e, href)}>
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
