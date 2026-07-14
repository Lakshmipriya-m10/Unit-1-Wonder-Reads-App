import React, { useState } from "react";
import '../design/quiz.css';
import Button from '../pages/Button';
import storyQuiz from "../data/storyquiz.js";

const Quiz = () => {

  const [selectedStory, setSelectedStory] = useState("");
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [reward, setReward] = useState("");

  const [loading, setLoading] = useState(false);

  // Get selected story data
  const currentStory = storyQuiz.find(
    (story) => story.id === Number(selectedStory)
  );

  const handleStoryChange = (event) => {

    const storyId = event.target.value;
    setLoading(true);
    setSelectedStory(storyId);
    setAnswers({});
    setShowResult(false);
    setReward("");
    setIsSubmitted(false);

    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer
    });

  };

  const handleSubmit = () => {

    setShowResult(true);
    setIsSubmitted(true);

  };

  const handleReward = () => {
    if (!isSubmitted) {

      setShowDialog(true);
      return;

    }

    let stars = 0;

    currentStory.questions.forEach((question, index) => {

      if (answers[index] === question.correctAnswer) {
        stars++;
      }
    });

    if (stars > 0) {
      setReward(
        `Correct! You earned ⭐ ${stars} Star${stars > 1 ? "s" : ""}`
      );

    } else {

      setReward("❌ No reward. Try again!");
    }
  };

  const handleRestart = () => {

    setSelectedStory("");
    setAnswers({});
    setShowResult(false);
    setIsSubmitted(false);
    setReward("");
    setShowDialog(false);

  };

  return (
    <div>
      <div className="card">
        <label>
          Select Story:
        </label>
        <select
          value={selectedStory}
          onChange={handleStoryChange}
        >
          <option value="">
            -- Choose a Story --
          </option>
          {storyQuiz.map((story) => (
            <option
              key={story.id}
              value={story.id}
            >
              {story.title}
            </option>
          ))}
        </select>
      </div>
      {/* Spinner Loading */}
      {loading && (
        <div className="loading-container">
        <div className="book-spinner">
            📖
        </div>
         <p className="card">Loading story...</p>
       </div>
      )}
      {!loading && currentStory && (
        <>
          <h1 className="card">
            Quiz - {currentStory.title}
          </h1>
          {currentStory.questions.map((question, index) => (
            <div key={index}>
              <h3 className="card">
                {index + 1}. {question.question}
              </h3>
              <div className="card">
                {question.answers.map((answer) => (
                  <div key={answer}>
                    <input
                      type="radio"
                      value={answer}
                      checked={
                      answers[index] === answer
                      }
                      onChange={() =>
                        handleAnswerChange(
                          index,
                          answer
                        )
                      }
                    />
                    <label>
                      {answer}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {showResult && (
            <div className="card">
              {currentStory.questions.map(
                (question, index) => (
                  <p key={index}>
                    Question {index + 1}:
                    {
                      answers[index] === question.correctAnswer
                        ? " ✅ Correct"
                        : " ❌ Wrong"
                    }
                  </p>
                )
              )}
            </div>
          )}
          {reward && (
            <div
              className="card"
              style={{ color: "yellow" }}
            >
              <h4>
                {reward}
              </h4>
            </div>
          )}
          <section>
            <Button
              onClick={handleRestart}
              background="#f4d35e"
            >
              Restart
            </Button>
            <Button
              onClick={handleReward}
              background="#234b91"
            >
              Reward
            </Button>
            <Button
              onClick={handleSubmit}
              background="#a53da2"
            >
              Submit
            </Button>
        </section>
       </>
      )}
      {showDialog && (
        <dialog open className="quiz-dialog">
          <p>
            Please submit the quiz before checking the reward.
          </p>

          <Button
            onClick={() => setShowDialog(false)}
            background="#234b91"
          >
           Close
          </Button>
        </dialog>
      )}
    </div>
  );
};

export default Quiz;