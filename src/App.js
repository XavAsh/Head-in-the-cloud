import "./App.css";
import React, { useState } from "react";

function App() {
  const [randomDie, setRandomDie] = useState(null);

  const elements = [
    "Algorithms",
    "Brand Style Guide",
    "Conversion Funnels:",
    "Cybersecurity",
    "Editorial ",
    "Green IT and Eco Design",
    "HTML/CSS",
    "Relational Databases",
    "Soft Skills",
    "Traffic Acquisition",
    "Using the Internet",
    "Wireframes",
  ];

  const difficulties = ["Easy", "Medium", "Hard", "Mystery"];

  const difficultyColors = {
    Easy: "green",
    Medium: "orange",
    Hard: "red",
    Mystery: "purple",
  };

  const difficultyPoints = {
    Easy: "5",
    Medium: "10",
    Hard: "15",
    Mystery: "2x current",
  };

  const handleRollDice = () => {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    const randomDifficulty =
      difficulties[Math.floor(Math.random() * difficulties.length)];
    setRandomDie({ element: randomElement, difficulty: randomDifficulty });
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="App-header-title">Head in the Clouds</h1>
        <p className="App-header-subtitle">
          Welcome to the Head in the Clouds game!
        </p>
        <div className="App-header-actions">
          <button
            className="App-header-actions-roll-dice-button"
            onClick={handleRollDice}
          >
            Randomize category / difficulty
          </button>
        </div>
        <div id="dice-result" className="App-header-dice-result">
          {randomDie !== null && (
            <p>
              Category: {randomDie.element} -{" "}
              <span
                style={{
                  color: difficultyColors[randomDie.difficulty],
                  textShadow:
                    randomDie.difficulty === "Mystery"
                      ? "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px purple, 0 0 30px purple, 0 0 40px purple, 0 0 55px purple, 0 0 75px purple"
                      : "none",
                }}
              >
                {randomDie.difficulty} -{" "}
                {difficultyPoints[randomDie.difficulty]} points
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
