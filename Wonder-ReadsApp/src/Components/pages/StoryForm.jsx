import React, { useState } from "react";
import '../design/storyform.css'

const CreateStory = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    story: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    alert("Story submitted successfully!");

    setFormData({
      name: "",
      email: "",
      contact: "",
      story: ""
    });
  };


  return (
    <div className="story-form-container">

      <h1>Create Your Story</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <label>Contact Number</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter contact number"
          required
        />
        <label>Write Your Story</label>
        <textarea
          name="story"
          value={formData.story}
          onChange={handleChange}
          placeholder="Write your story here..."
          rows="8"
          maxLength={500}
          required
        />
        <p className="char-count">
            Characters: {formData.story.length}/500
        </p>
        <button type="submit">
          Submit Story
        </button>
      </form>
    </div>
  );
};

export default CreateStory;

