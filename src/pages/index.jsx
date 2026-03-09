import React from 'react'
import Hero from '../components/sections/Hero'
import Web from '../components/sections/Web'
import Infrastructure from '../components/sections/Infrastructure'
import HowWeWork from '../components/sections/HowWeWork'
import Portfolio from '../components/sections/Portfolio'
import Team from '../components/sections/Team'
import Contact from '../components/sections/Contact'

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Web />
      <Infrastructure />
      <Team />
      <Portfolio />
      <HowWeWork />
      <Contact />
    </>
  )
}

export default IndexPage
