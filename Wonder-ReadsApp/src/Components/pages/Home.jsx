import React from 'react';
import '../design/home.css';
//import waterfalls from "../../assets/waterfalls.mp4";
const Home = () => {
  return (

    <div className="home-page">
      <video autoPlay muted loop className="bg-video">
        <source src="../src/assets/waterfalls.mp4" type="video/mp4" />
      </video>
      <h1>Welcome to Wonder Reads-App</h1>
      <p><strong>Explore Magical Stories And Books!</strong></p>
    </div>
  )
}

export default Home;
