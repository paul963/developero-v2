import React from 'react'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <p>@<span id="year">{year}</span> Developero</p>
      </div>
    </footer>
  )
}

export default Footer