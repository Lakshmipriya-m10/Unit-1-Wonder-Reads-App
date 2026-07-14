import React from 'react';
import "../design/reading.css";

const Reading = ({ image, title, lexile, grade, link }) => {

  if (!title) return null;
  return (
    <div className='card-container'>
      <img src={image} alt={title} className="card-img" />
      <h4 className="title">Title:{title}</h4>
      <h4 className="lexile">Lexile:{lexile}</h4>
      <h4 className="grade">Grade:{grade}</h4>
      <a className="card-btn" href={link}>
        Click Here To Read Story
      </a>
    </div>
  );
};

export default Reading;
