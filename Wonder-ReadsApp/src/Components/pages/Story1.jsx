import React, { useState } from "react";
import stories from "../data/stories";

const Story1 = () => {
  const [selectedStory, setSelectedStory] = useState("");
  const [storyData, setStoryData] = useState(null);

  const handleStoryChange = (e) => {
    const storyId = e.target.value;
    setSelectedStory(storyId);

    const story = stories.find((s) => s.id === storyId);
    setStoryData(story);
  };

  const readStory = () => {
    if (!storyData) return;
     const cleanText = storyData.text.replace(/[.,!?;:]/g, "");

    const speech = new SpeechSynthesisUtterance(storyData.text);
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
    <div className="story-page">
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
        <div className="story-content">
          <h2>{storyData.title}</h2>

          <p>{storyData.text}</p>

          <button onClick={readStory}>
            🔊 Read Story
          </button>

          <button onClick={stopReading}>
            Stop
          </button>

          <button onClick={pauseReading}>
            Pause
          </button>

           <button onClick={resumeReading}>
            Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default Story1;