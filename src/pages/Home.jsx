import React from 'react'
import Hero from '../components/Hero'
import Ventures from '../components/Ventures'
import About from '../components/About'
import Metrics from '../components/Metrics'
import CaseStudy from '../components/CaseStudy'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

const Home = () => {
  return (
   <>
   <Hero/>
   <About/>
   <Ventures/>
   <Projects/>
   <Metrics/>
   <CaseStudy/>
   <Services/>
   <Contact/>
   </>
  )
}

export default Home