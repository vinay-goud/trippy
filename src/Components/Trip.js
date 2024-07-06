import TripData from "./TripData"
import "./TripStyles.css"
import React from 'react'

function Trip() {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You Can cover Unique Destinations using Google Maps</p>
        <div className="tripcard"> 
        <TripData  image="https://media.istockphoto.com/id/1473643398/photo/i-love-ooty-sign.jpg?s=612x612&w=0&k=20&c=_-dZC3JpmOYXmshTZ12l021d4ySOPTSWAhLd7TFb7xY="
        heading="Trip to Ooty"
        text="Embarking on a trip to Ooty is like entering a picturesque dreamland nestled amidst the Nilgiri Hills of Tamil Nadu. As my journey began, winding roads meandered through lush green tea estates, offering glimpses of the tranquil countryside. The cool, crisp air infused with the scent of eucalyptus and pine trees instantly invigorated my senses."
        
        ></TripData>
        <TripData  image="https://images.unsplash.com/photo-1631714712922-eaa39e4452fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FybmF0YWthfGVufDB8fDB8fHww"
        heading="Trip to Gokarna"
        text="Embarking on a trip to Gokarna is like stepping into a serene coastal paradise where time seems to slow down, and worries melt away with the gentle sea breeze. As I journeyed to this quaint town nestled along the Arabian Sea in Karnataka, I was immediately captivated by its untouched beauty and laid-back vibe."
        
        ></TripData>
        <TripData  image="https://media.istockphoto.com/id/1370262771/photo/red-fort-delhi.jpg?s=2048x2048&w=is&k=20&c=2f05sfmADtge2zl7XvuqWna3PrzUfHbgwz_T_1v4Vso="
        heading="Trip to Delhi"
        text="My journey began with a visit to the iconic Red Fort, a UNESCO World Heritage Site, where I marveled at its imposing red sandstone walls and intricate Mughal architecture. From there, I wandered through the narrow lanes of Old Delhi, where centuries-old monuments like Jama Masjid and Chandni Chowk offered a glimpse into the city's storied past."
        
        ></TripData>


        </div>
    </div>
  )
}

export default Trip
