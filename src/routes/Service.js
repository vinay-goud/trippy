import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/12.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Service() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImage={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip></Trip>
      <Footer></Footer>
    </div>
  );
}

export default Service;
