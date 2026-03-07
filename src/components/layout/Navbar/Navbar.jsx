import React, { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { href: '#web', label: 'Website' },
  { href: '#infrastructure', label: 'Infrastructură' },
  // { href: '#process', label: 'Cum lucrăm' },
  { href: '#team', label: 'Echipa' },
  { href: '#portfolio', label: 'Portfoliu' },
  // { href: '#about', label: 'Despre' },
  { href: '#about', label: 'Despre' },
  { href: '#contact', label: 'Contact' },
]

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
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={closeMenu}>{label}</a>
            ))}
          </div>
        </nav>
      ) : (
        <nav className="nav-desktop">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      )}
    </>
  )
}

export default Navbar