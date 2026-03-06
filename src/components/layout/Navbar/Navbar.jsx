import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <div className="nav-wrapper">
      <button
        className={`hamburger ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${open ? 'is-open' : ''}`}>
        <a href="#web" onClick={closeMenu}>Website & E-Commerce</a>
        <a href="#infrastructure" onClick={closeMenu}>Infrastructură</a>
        <a href="#outsourcing" onClick={closeMenu}>Externalizare IT</a>
        <a href="#process" onClick={closeMenu}>Cum lucrăm</a>
        <a href="#about" onClick={closeMenu}>Despre</a>
        <a href="#contact" className="menu-btn" onClick={closeMenu}>Contact</a>
      </div>

      {open && <div className="menu-backdrop" onClick={closeMenu} />}
    </div>
  )
}

export default Navbar