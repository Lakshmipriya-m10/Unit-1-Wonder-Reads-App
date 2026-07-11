import React, { useState } from "react";
import '../design/quiz.css';

const Quiz = () => {

  const [selected1, setSelected1] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reward, setReward] = useState("");

  const handleSubmit = () => {
    setShowResult(true);
    setIsSubmitted(true);
  };


  const handleReward = () => {

    if (!isSubmitted) {
      alert("Please Submit quiz before checking reward.");
      return;
    }

    if (selected1 === "Milk") {
      setReward("Correct! You earned ⭐ 1 Star");
    } else {
      setReward("❌ No reward. Try again!");
    }
  };


  const handleRestart = () => {
    setSelected1("");
    setShowResult(false);
    setIsSubmitted(false);
    setReward("");
  };


  return (
    <div>

      <h1 className="card">Quiz</h1>

      <h3 className="card">
        1. What did Mia give to the cat?
      </h3>


      <div className="card">

        <div>
          <input
            type="radio"
            value="Water"
            checked={selected1 === "Water"}
            onChange={(e) => setSelected1(e.target.value)}
          />
          <label> Water</label>
        </div>


        <div>
          <input
            type="radio"
            value="Milk"
            checked={selected1 === "Milk"}
            onChange={(e) => setSelected1(e.target.value)}
          />
          <label> Milk</label>
        </div>


        <div>
          <input
            type="radio"
            value="Bread"
            checked={selected1 === "Bread"}
            onChange={(e) => setSelected1(e.target.value)}
          />
          <label> Bread</label>
        </div>


        <div>
          <input
            type="radio"
            value="Toy"
            checked={selected1 === "Toy"}
            onChange={(e) => setSelected1(e.target.value)}
          />
          <label> Toy</label>
        </div>

      </div>



      {showResult && (
        <div className="card">
          <p>
            {selected1 === "Milk" ? "✅ Correct" : "❌ Wrong"}
          </p>
        </div>
      )}



      {reward && (
        <div className="card" style={{ color: "yellow" }}>
          <h4>{reward}</h4>
        </div>
      )}



      <section>

        <button
          className="button"
          style={{
            marginLeft: "50px",
            background: "#f4d35e",
          }}
          onClick={handleRestart}
        >
          Restart
        </button>

        <button
          className="button"
          style={{
            marginLeft: "50px",
            background: "#234b91",
          }}
          onClick={handleReward}
        >
          Reward 
        </button>



        <button
          className="button"
          style={{
            marginLeft: "50px",
            background: "#a53da2",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>


      </section>

    </div>
  );
};

export default Quiz;