import React, { useState } from 'react';
import './higher_or_lower.css'; // Ensure the CSS file is linked

const HigherLowerGame = () => {
  const [selectedNumber, setSelectedNumber] = useState(50);
  const [betAmount, setBetAmount] = useState('');
  const [guessDirection, setGuessDirection] = useState('lower'); // Set 'lower' as default

  const handleNumberChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  const handleBetAmountChange = (event) => {
    setBetAmount(event.target.value);
  };

  const makeGuess = (direction) => {
    setGuessDirection(direction);
  };

  const calculateProbability = () => {
    if (!guessDirection) return '0.00';
    const difference = guessDirection === 'higher' ? 100 - selectedNumber : selectedNumber - 1;
    return (difference / 99 * 100).toFixed(2);
  };

  // Calculate the color for the slider based on the guess direction
  const sliderStyle = {
    background: `linear-gradient(to right, 
                 ${guessDirection === 'lower' ? 'green' : 'red'} 0%, 
                 ${guessDirection === 'lower' ? 'green' : 'red'} ${selectedNumber}%, 
                 ${guessDirection === 'higher' ? 'green' : 'red'} ${selectedNumber}%, 
                 ${guessDirection === 'higher' ? 'green' : 'red'} 100%)`
  };

  return (
    <div className="higher-lower-container">
      <div className="button-group">
        <button 
          className={`guess-button ${guessDirection === 'lower' ? 'selected' : ''}`}
          onClick={() => makeGuess('lower')}
        >
          Lower
        </button>
        <button 
          className={`guess-button ${guessDirection === 'higher' ? 'selected' : ''}`}
          onClick={() => makeGuess('higher')}
        >
          Higher
        </button>
      </div>
      <div className="slider-container">
        <div className="current-value-box">{selectedNumber}</div> {/* User's current guess displayed in a box */}
        <input
          type="range"
          min="1"
          max="100"
          value={selectedNumber}
          onChange={handleNumberChange}
          style={sliderStyle}
        />
        <div className="range-labels">
          <span>1</span>
          <span>100</span>
        </div>
      </div>
      <input
        type="number"
        className="bet-amount"
        value={betAmount}
        onChange={handleBetAmountChange}
        placeholder="Enter your bet amount"
      />
      <div>Probability of winning: {calculateProbability()}%</div>
    </div>
  );
};

export default HigherLowerGame;
