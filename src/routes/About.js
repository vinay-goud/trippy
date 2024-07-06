import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AboutImg from "../assets/2.jpg"
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'

function About() {
  return (
    <div>
      <Navbar></Navbar>
        <Hero
        cName="hero-mid"
        heroImage={AboutImg}
        title="About"
        btnClass="hide"
        /> 
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  )
}

export default About
