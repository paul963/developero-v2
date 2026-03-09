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
  const navigate = useNavigate();
  const location = useLocation();

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
        <nav className="nav-wrapper-mobile">
          <button className={`hamburger ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-mobile ${open ? "is-open" : ""}`}>
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={(e) => handleNavClick(e, href)}>
                {label}
              </a>
            ))}
          </div>
        </nav>
      ) : (
        <nav className="nav-desktop">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={(e) => handleNavClick(e, href)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navbar;
