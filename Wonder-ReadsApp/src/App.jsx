import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/pages/Home.jsx"
import About from "./Components/pages/About.jsx";
import Reading from "./Components/pages/Reading.jsx";
import StoryForm from "./Components/pages/StoryForm.jsx";
import MiniGames from "./Components/pages/MiniGames.jsx";

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reading" element={<Reading />} />
        <Route path="/StoryForm" element={<StoryForm />} />
        <Route path="/MiniGames" element={<MiniGames />} />
      </Routes>
      <h1>Hello!LaunchCode</h1>
    </div>
  );
}

export default App;
