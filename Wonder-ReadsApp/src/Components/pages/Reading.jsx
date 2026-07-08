import React from 'react';
import "../design/reading.css"

const Reading = () => {
  return (
    <div className='card-container'>
      <img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1783474816/r1_v51cl2.jpg" alt="Card Image" className='card-img'/>
      <h4 className='title'>Title: Reading Level 1 </h4>
      <h4 className='lexile'>Lexile: BR-200L</h4>
      <h4 className='grade'>Grade: 1</h4>
      <a className="card-btn"href="cardPage">Click Here To Read Story</a>
    </div>
  );
};

export default Reading;
