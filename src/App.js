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
        <h1>Head in the Clouds</h1>
        <p>Welcome to the Head in the Clouds project!</p>
        <>
          <button onClick={handleRollDice}>Roll Dice</button>
        </>
        <div id="dice-result">
          {randomDie !== null && `You rolled a ${randomDie}`}
        </div>
      </div>
    </div>
  );
}

export default App;
