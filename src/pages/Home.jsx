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
   <div className="border-t border-gray-100"><About/></div>
   <div className="border-t border-gray-100"><Ventures/></div>
   <div className="border-t border-gray-100"><Projects/></div>
   <div className="border-t border-gray-100"><Metrics/></div>
   <div className="border-t border-gray-100"><CaseStudy/></div>
   <div className="border-t border-gray-100"><Services/></div>
   <div className="border-t border-gray-100"><Contact/></div>
   </>
  )
}

export default Home