import './App.css';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

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
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;

