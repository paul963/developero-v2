import React from 'react'
import './Navbar-old.css'

const NavbarOld = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="logo">
          <a href="/" style={{ color: '#fff' }}>Developero</a>
        </div>
        <div className="menu">
          <a href="#services">Servicii</a>
          <a href="#process">Cum lucrăm</a>
          <a href="#about">Despre</a>
          <a href="#contact" className="menu-btn">Cere o ofertă</a>
        </div>
      </div>
    </nav>
  )
}

export default NavbarOld