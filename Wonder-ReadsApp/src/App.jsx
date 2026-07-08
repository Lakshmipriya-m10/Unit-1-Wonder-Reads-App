import './App.css';
import Navbar from './Components/Navbar';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

import Home from "./Components/pages/Home.jsx";
import About from "./Components/pages/About.jsx";
import Reading from "./Components/pages/Reading.jsx";
import StoryForm from "./Components/pages/StoryForm.jsx";
import MiniGames from "./Components/pages/MiniGames.jsx";
import ReadingCards from './Components/pages/ReadingCard.jsx';


function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reading" element={<ReadingCards />} />
        <Route path="/StoryForm" element={<StoryForm />} />
        <Route path="/MiniGames" element={<MiniGames />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

