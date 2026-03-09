import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero">
          <div className="supra-title hero-animate" style={{ '--delay': '0s' }}>
            Web Development &amp; Infrastructură IT
          </div>
          <h1 className="text-center hero-animate" style={{ '--delay': '0.15s' }}>
            Your Stack, <span className="glow-text">Our Problem</span>
          </h1>
          <p className="text-center hero-animate" style={{ '--delay': '0.3s' }}>
            De la website-uri la infrastructură IT – construim, securizăm, monitorizăm.
          </p>
          <div className="action hero-animate" style={{ '--delay': '0.45s' }}>
            <a href="#web" className="btn-full">Vezi servicii</a>
            <a href="#contact" className="btn-outline">Cere oferta</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero