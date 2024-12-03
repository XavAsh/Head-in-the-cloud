import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
      setIsNameSubmitted(true);
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem('name', name);
    setIsNameSubmitted(true);
  };

  const handleClearName = () => {
    localStorage.removeItem('name');
    setName('');
    setIsNameSubmitted(false);
  };

  const handleRollDice = () => {
    const randomDie = Math.floor(Math.random() * 6) + 1;
    alert(`You rolled a ${randomDie}`);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Head in the Clouds</h1>
        <p>
          Welcome to the Head in the Clouds project! 
          {isNameSubmitted ? (
            <span>
               Hello, {name}! <button onClick={handleClearName}>Clear Name</button>
            </span>
          ) : (
            ' Please enter your name below to get started.'
          )}
        </p>
        {!isNameSubmitted && (
          <>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </>
        )}
        {isNameSubmitted && (
          <>
            <button onClick={handleRollDice}>Roll Dice</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;