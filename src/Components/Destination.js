import React from 'react'
import "./DestinationStyles.css"
import DestinationData from './DestinationData'

function Destination() {
  return (
    <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give the oppurtunity to see a lot, within a timeframe </p> 
        <DestinationData 
        className="first-des"
        heading="Kerala-One of the paradises"
        text="Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography, have made Kerala one of the most popular tourist destinations in the world.Branded as 'God's Own Country,' it attracts millions with its beaches, backwaters, hill stations, and wildlife sanctuaries. The state's tourism agenda prioritizes sustainable practices, emphasizing local culture and environmental conservation. With initiatives like the Grand Kerala Shopping Festival and a focus on MICE tourism in Kochi, Kerala continues to enchant visitors with its diverse offerings and commitment to responsible tourism."
        img1="https://images.unsplash.com/photo-1589983846997-04788035bc83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D"
        img2="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fHww"
        ></DestinationData>
        <DestinationData 
        className="first-des-reverse"

        heading="Vizag"
        text="Visakhapatnam, often referred to as Vizag, is considered one of the best tourist destinations for several reasons. Firstly, its rich historical significance dating back to ancient times, evident in its archaeological sites and remnants of various dynasties, makes it a fascinating place for history enthusiasts. Secondly, its picturesque beaches, such as RK Beach and Yarada Beach, offer serene environments for relaxation and water activities. Additionally, Visakhapatnam boasts breathtaking natural landscapes, including the scenic Araku Valley and the Eastern Ghats, which attract nature lovers and adventurers alike. The city's vibrant cultural scene, with festivals like Visakha Utsav showcasing local arts, crafts, and cuisine, offers visitors a taste of Andhra Pradesh's vibrant heritage. Furthermore, the city's modern amenities, including its status as a major naval base, educational hub, and industrial center, provide a unique blend of traditional charm and contemporary allure."
        img1="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpemFnfGVufDB8fDB8fHww"
        img2="https://images.unsplash.com/photo-1624708733684-da7cd4f90982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dml6YWd8ZW58MHx8MHx8fDA%3D"
        ></DestinationData>
    </div>
  )
}

export default Destination
