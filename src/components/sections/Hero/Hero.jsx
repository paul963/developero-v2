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
            Expertiza <span className="glow-text">Web</span> &amp; <span className="glow-text">Infrastructură IT</span><br />
            pentru afacerea ta
          </h1>
          <p className="text-center hero-animate" style={{ '--delay': '0.3s' }}>
            De la site-ul de prezentare până la infrastructura serverelor tale – construim, securizăm și monitorizăm tot.
          </p>
          <div className="action hero-animate" style={{ '--delay': '0.45s' }}>
            <a href="#web" className="btn-full">Servicii</a>
            <a href="#contact" className="btn-outline">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero