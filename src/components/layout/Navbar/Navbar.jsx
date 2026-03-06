import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <>
      {isMobile ? (
        <nav className="nav-wrapper-mobile">
          <button
            className={`hamburger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-mobile ${open ? 'is-open' : ''}`}>
            <a href="#web" onClick={closeMenu}>Website & E-Commerce</a>
            <a href="#infrastructure" onClick={closeMenu}>Infrastructură</a>
            <a href="#process" onClick={closeMenu}>Cum lucrăm</a>
            <a href="#about" onClick={closeMenu}>Despre</a>
            <a href="#contact" className="menu-btn" onClick={closeMenu}>Contact</a>
          </div>
        </nav>
      ) : (
        <nav className="nav-desktop">
          <a href="#web">Website & E-Commerce</a>
          <a href="#infrastructure">Infrastructură</a>
          <a href="#process">Cum lucrăm</a>
          <a href="#about">Despre</a>
          <a href="#contact" className="menu-btn">Contact</a>
        </nav>
      )}
    </>
  )
}

export default Navbar