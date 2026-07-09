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
import AllStories from './Components/pages/AllStories.jsx';
import Story1 from './Components/pages/Story1.jsx';
import Quiz from './Components/pages/Quiz.jsx';



function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reading" element={<ReadingCards />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/StoryForm" element={<StoryForm />} />
        <Route path="/MiniGames" element={<MiniGames />} />
        <Route path="/AllStories" element={<AllStories />} />
        <Route path="/Story1" element={<Story1 />} />
      </Routes>
       
      <Footer />
    
    </div>
  );
}

export default App;

