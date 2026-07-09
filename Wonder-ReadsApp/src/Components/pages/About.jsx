import React from 'react';

const About = () => {
  return (
    <div>
      <video autoPlay muted loop className="bg-video">
        <source src="https://res.cloudinary.com/o7vbtffn/video/upload/v1783617687/jellyfish_vj9vmo.mp4" />
      </video>
      <h2 className="card" style={{ textAlign: "center", width: "100%" }}>About</h2>
      <p className="card">Wonder Reads is an interactive reading application designed to make reading fun, engaging, and accessible for children. The app provides a collection of age-appropriate stories organized by reading levels, helping young readers improve their vocabulary, comprehension, and confidence.</p>

<p className="card">Users can explore different stories with beautiful visuals, audio narration, and interactive features. Each story creates an immersive reading experience through animations, story backgrounds, page navigation, and engaging activities.</p>

<p className="card">The app also includes quizzes and progress tracking features to encourage active learning. Children can test their understanding, earn rewards, and build a consistent reading habit in an enjoyable way.</p>

<p className="card">Wonder Reads combines technology, storytelling, and creativity to inspire children to discover the joy of reading while developing essential literacy skills.</p>
    </div>
  )
}

export default About;
