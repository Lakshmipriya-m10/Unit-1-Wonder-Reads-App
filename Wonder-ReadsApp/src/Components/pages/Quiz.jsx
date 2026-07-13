import React, { useState } from "react";
import '../design/quiz.css';

const Quiz = () => {

  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
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

    let stars = 0;

    if (selected1 === "Milk") {
      stars++;
    }

    if (selected2 === "Cat") {
      stars++;
    }

    if (selected3 === "Happy") {
      stars++;
    }


    if (stars > 0) {
      setReward(`Correct! You earned ⭐ ${stars} Star${stars > 1 ? "s" : ""}`);
    } else {
      setReward("❌ No reward. Try again!");
    }

  };

  const handleRestart = () => {
    setSelected1("");
    setSelected2("");
    setSelected3("");
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
            onChange={(e)=>setSelected1(e.target.value)}
          />
          <label>Water</label>
        </div>


        <div>
          <input
            type="radio"
            value="Milk"
            checked={selected1 === "Milk"}
            onChange={(e)=>setSelected1(e.target.value)}
          />
          <label> Milk</label>
        </div>


        <div>
          <input
            type="radio"
            value="Bread"
            checked={selected1 === "Bread"}
            onChange={(e)=>setSelected1(e.target.value)}
          />
          <label> Bread</label>
        </div>


        <div>
          <input
            type="radio"
            value="Toy"
            checked={selected1 === "Toy"}
            onChange={(e)=>setSelected1(e.target.value)}
          />
          <label> Toy</label>
        </div>

      </div>

      <h3 className="card">
        2. What animal does Mia see in her yard?
      </h3>

      <div className="card">
       <div>
          <input
            type="radio"
            value="Dog"
            checked={selected2 === "Dog"}
            onChange={(e)=>setSelected2(e.target.value)}
          />
          <label>Dog</label>
        </div>


        <div>
          <input
            type="radio"
            value="Cat"
            checked={selected2 === "Cat"}
            onChange={(e)=>setSelected2(e.target.value)}
          />
          <label> Cat</label>
        </div>


        <div>
          <input
            type="radio"
            value="Bird"
            checked={selected2 === "Bird"}
            onChange={(e)=>setSelected2(e.target.value)}
          />
          <label> Bird</label>
        </div>

        
        <div>
          <input
            type="radio"
            value="Rabbit"
            checked={selected2 === "Rabbit"}
            onChange={(e)=>setSelected2(e.target.value)}
          />
          <label>Rabbit</label>
        </div>
 </div>

         <h3 className="card">
        3. How do Mia and the cat feel at the end of the story?
      </h3>


      <div className="card">

        <div>
          <input
            type="radio"
            value="Sad"
            checked={selected3 === "Sad"}
            onChange={(e)=>setSelected3(e.target.value)}
          />
          <label> Sad</label>
        </div>


        <div>
          <input
            type="radio"
            value="Angry"
            checked={selected3 === "Angry"}
            onChange={(e)=>setSelected3(e.target.value)}
          />
          <label>Angry</label>
        </div>


        <div>
          <input
            type="radio"
            value="Happy"
            checked={selected3 === "Happy"}
            onChange={(e)=>setSelected3(e.target.value)}
          />
          <label>Happy</label>
        </div>

           <div>
          <input
            type="radio"
            value="Scared"
            checked={selected3 === "Scared"}
            onChange={(e)=>setSelected3(e.target.value)}
          />
          <label>Scared</label>
        </div>


      </div>


      {showResult && (
        <div className="card">

          <p>
            Question 1:
            {selected1 === "Milk" ? " ✅ Correct" : " ❌ Wrong"}
          </p>

          <p>
            Question 2:
            {selected2 === "Cat" ? " ✅ Correct" : " ❌ Wrong"}
          </p>

           <p>
            Question 3:
            {selected3 === "Happy" ? " ✅ Correct" : " ❌ Wrong"}
          </p>

        </div>
      )}


      {reward && (
        <div className="card" style={{color:"yellow"}}>
          <h4>{reward}</h4>
        </div>
      )}

     

      <section>

        <button
          className="button"
          style={{
            marginLeft:"50px",
            background:"#f4d35e"
          }}
          onClick={handleRestart}
        >
          Restart
        </button>



        <button
          className="button"
          style={{
            marginLeft:"50px",
            background:"#234b91"
          }}
          onClick={handleReward}
        >
          Reward
        </button>



        <button
          className="button"
          style={{
            marginLeft:"50px",
            background:"#a53da2"
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