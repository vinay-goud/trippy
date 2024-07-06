import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
        <Hero
        cName="hero-mid"
        heroImage="https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contact"
        btnClass="hide"
        /> 
        <ContactForm></ContactForm>
        <Footer></Footer>
    </div>
  )
}

export default Contact
