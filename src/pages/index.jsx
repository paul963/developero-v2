import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Web from '../components/sections/Web'
import Infrastructure from '../components/sections/Infrastructure'
import Outsourcing from '../components/sections/Outsourcing'
import HowWeWork from '../components/sections/HowWeWork'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Web />
        <Infrastructure />
        <Outsourcing />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
