import Reading from "../pages/Reading.jsx";
import React from 'react';
import readingLevels from "../data/readingData.js";

const ReadingCards = () => {
  return (
    <div className="reading-container">
      {readingLevels.map((item, index) => (
        <Reading
          key={index}
          image={item.image}
          title={item.title}
          lexile={item.lexile}
          grade={item.grade}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default ReadingCards;