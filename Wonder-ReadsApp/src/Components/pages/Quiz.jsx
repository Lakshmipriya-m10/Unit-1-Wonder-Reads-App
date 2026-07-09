import React, { useState } from "react";
import '../design/quiz.css';

const Quiz = () => {

  const [selected1, setSelected1] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <div >
      <h1 className="card">Quiz</h1>

      <h3 className="card">
        1. What did Mia give to the cat?
      </h3>

      <div className="button-group">

        <button className="button" onClick={() => {
          setSelected1("Water");
          setShowResult(true);
        }}>
          Water
        </button>

        <button className="button" onClick={() => {
          setSelected1("Milk");
          setShowResult(true);
        }}>
          Milk
        </button>

        <button className="button" onClick={() => {
          setSelected1("Bread");
          setShowResult(true);
        }}>
          Bread
        </button>

        <button className="button" onClick={() => {
          setSelected1("Toy");
          setShowResult(true);
        }}>
          Toy
        </button>

        <div className="card">
        {showResult && (
          <p>
            {selected1 === "Milk" ? "✅ Correct" : "❌ Wrong"}
          </p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
