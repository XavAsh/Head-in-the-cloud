import "./App.css";
import React, { useState } from "react";

function App() {
  const [randomDie, setRandomDie] = useState(null);

  const handleRollDice = () => {
    const randomDie = Math.floor(Math.random() * 6) + 1;
    setRandomDie(randomDie);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="App-header-title">Head in the Clouds</h1>
        <p className="App-header-subtitle">
          Welcome to the Head in the Clouds project!
        </p>
        <div className="App-header-actions">
          <button
            className="App-header-actions-roll-dice-button"
            onClick={handleRollDice}
          >
            Roll Dice
          </button>
        </div>
        <div id="dice-result" className="App-header-dice-result">
          {randomDie !== null && `You rolled a ${randomDie}`}
        </div>
      </div>
    </div>
  );
}

export default App;
