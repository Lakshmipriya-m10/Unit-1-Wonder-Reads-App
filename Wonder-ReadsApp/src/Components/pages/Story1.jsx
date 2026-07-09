import React, { useState } from "react";
import stories from "../data/stories";

const Story1 = () => {
    const [selectedStory, setSelectedStory] = useState("");
    const [storyData, setStoryData] = useState(null);

    const handleStoryChange = (e) => {
        const story = e.target.value;
        setSelectedStory(story);

        // fetch selected story data
        setStoryData(stories[story]);
    };

    return (
        <div>
            <select
                value={selectedStory}
                onChange={handleStoryChange}
            >
                
                <option value="">Select a Story</option>
                <option value="mia-cat">Mia and the Cat</option>
                <option value="magic-forest">A Girl in the Magic Forest</option>
                <option value="little-bird">The Little Bird</option>
                <option value="rainy-day">The Rainy School Day</option>
                <option value="garden-surprise">The Garden Surprise</option>
            </select>


            {storyData && (
                <div>
                    <h2>{storyData.title}</h2>
                    <p>{storyData.text}</p>
              
                    
                </div>
            )}

        </div>
    );
};

export default Story1;