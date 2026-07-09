import React from 'react';
import '../design/home.css';
//import waterfalls from "../../assets/waterfalls.mp4";
const Home = () => {
  return (

    <div className="home-page">
      <video autoPlay muted loop className="bg-video">
        <source src="https://res.cloudinary.com/o7vbtffn/video/upload/v1783615682/waterfalls_xh0ctz.mp4" />
      </video>
      <h1 className='greeting'>Welcome to Wonder Reads-App</h1><br></br>
      <p className='message'><strong>Explore Magical Stories And Books!</strong></p>
    </div>
  )
}

export default Home;
