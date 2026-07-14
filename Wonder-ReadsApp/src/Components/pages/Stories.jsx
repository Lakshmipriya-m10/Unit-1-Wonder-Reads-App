import React, { useState, useEffect } from "react";
import stories from "../data/stories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Story = () => {
  const [selectedStory, setSelectedStory] = useState("");
  const [storyData, setStoryData] = useState(null);

  // Stop current audio when story changes
useEffect(() => {
  window.speechSynthesis.cancel();
}, [selectedStory]);

  const handleStoryChange = (event) => {
    const storyId = event.target.value;
    setSelectedStory(storyId);

    const story = stories.find((story) => story.id === storyId);
    setStoryData(story);
  };

  const readStory = () => {
    if (!storyData) return;
    // Create a new speech object using the cleaned story text.
   // SpeechSynthesisUtterance converts text into spoken audio using the browser's TTS (Text-to-Speech) API.
    const cleanText = storyData.text.replace(/[,!?;:]/g, "");

    const speech = new SpeechSynthesisUtterance(cleanText);
    speech.rate = 0.5;
    speech.pitch = 1;    
    speech.lang = "en-US";

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
  };

  const pauseReading = () => {
    window.speechSynthesis.pause();
  };
  const resumeReading = () => {
    window.speechSynthesis.resume();
  };
  return (
    <div style={{
      backgroundImage: "url('https://res.cloudinary.com/o7vbtffn/image/upload/v1783625039/book2_bxweas.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh"
    }}>
      <h2>Select a Story</h2>

      <select value={selectedStory} onChange={handleStoryChange}>
        <option value="">Select a Story</option>

        {stories.map((story) => (
          <option key={story.id} value={story.id}>
            {story.title}
          </option>
        ))}
      </select>

      {storyData && (
        <div >
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation
            slidesPerView={1}
          >
            {storyData.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={storyData.title}
                  width="100%"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <h2>{storyData.title}</h2>
          <p>{storyData.text}</p>
          <div className="button-group">
            <button className="button" onClick={readStory}>
              🔊 Read Story
            </button>

            <button className="button" onClick={stopReading}>
              Stop
            </button>

            <button className="button" onClick={pauseReading}>
              Pause
            </button>

            <button className="button" onClick={resumeReading}>
              Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;                                                  