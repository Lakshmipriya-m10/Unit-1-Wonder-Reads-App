import './App.css';
import Navbar from './Components/pages/Navbar.jsx';
import Footer from './Components/pages/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/pages/Home.jsx";
import About from "./Components/pages/About.jsx";
import Reading from "./Components/pages/Reading.jsx";
import StoryForm from "./Components/pages/StoryForm.jsx";
import MiniGames from "./Components/pages/MiniGames.jsx";
import ReadingCards from './Components/pages/ReadingCard.jsx';
import AllStories from './Components/pages/AllStories.jsx';
import Stories from './Components/pages/Stories.jsx'
import Quiz from './Components/pages/Quiz.jsx';
import MemoryFlip from './Components/pages/MemoryFlip.jsx';
import ButterflyGame from './Components/pages/ButterflyGame.jsx';
import FruitSlice from './Components/pages/FruitSlice.jsx';

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Reading" element={<ReadingCards />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/StoryForm" element={<StoryForm />} />
          <Route path="/MiniGames" element={<MiniGames />} />
          <Route path="/AllStories" element={<AllStories />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/MemoryFlip" element={<MemoryFlip />} />
          <Route path="/ButterflyGame" element={<ButterflyGame />} />
          <Route path="/FruitSlice" element={<FruitSlice />} />
          
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;

