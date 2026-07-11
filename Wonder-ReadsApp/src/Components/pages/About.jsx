import React from 'react';

const About = () => {
  return (
    <div>
      <video autoPlay muted loop className="bg-video">
        <source src="https://res.cloudinary.com/o7vbtffn/video/upload/v1783617687/jellyfish_vj9vmo.mp4" />
      </video>
      <h2 className="card" style={{ textAlign: "center", width: "100%" }}>About</h2>
      <p className="card">Wonder Reads is an interactive reading application designed to make reading fun, engaging, and accessible for children. The app provides a collection of age-appropriate stories organized by reading levels, helping young readers improve their vocabulary, comprehension, and confidence.</p>

<p className="card">The app allows users to browse reading levels, listen to stories, create their own stories, and enjoy interactive mini-games. Wonder Reads aims to make reading fun while encouraging creativity and confidence.</p>

<p className="card">
  Feature 
<ul>
  <li>Browse stories by reading level</li>
   <li>Listen to story narration</li>
    <li>Image carousel for each story</li>
     <li>Create and submit your own story</li>
      <li>Interactive mini-games</li>
       <li>Responsive design for desktop and mobile</li>
</ul>
</p>
<p className="card">Wonder Reads combines technology, storytelling, and creativity to inspire children to discover the joy of reading while developing essential literacy skills.</p>
    </div>
  )
}

export default About;
