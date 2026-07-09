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
import Level1 from './Components/pages/Level1.jsx';
import Level2 from './Components/pages/Level2.jsx';
import Story1 from './Components/pages/Story1.jsx';



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
        <Route path="/Level1" element={<Level1 />} />
        <Route path="/Level2" element={<Level2 />} />
        <Route path="/Story1" element={<Story1 />} />
      </Routes>
       
      <Footer />
    
    </div>
  );
}

export default App;

