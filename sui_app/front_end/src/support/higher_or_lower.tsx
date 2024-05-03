import React, { useState } from 'react';
import './higher_or_lower.css'; // Ensure the CSS file is linked

const HigherLowerGame: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number>(50);
  const [betAmount, setBetAmount] = useState<string>('');
  const [guessDirection, setGuessDirection] = useState<'higher' | 'lower'>('lower'); // Set 'lower' as default

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedNumber(parseInt(event.target.value, 10));
  };

  const handleBetAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setBetAmount(event.target.value);
  };

  const makeGuess = (direction: 'higher' | 'lower'): void => {
    setGuessDirection(direction);
  };

  const calculateProbability = (): string => {
    if (!guessDirection) return '0.00';
    const difference = guessDirection === 'higher' ? 100 - selectedNumber : selectedNumber - 1;
    return ((difference / 99) * 100).toFixed(2);
  };

  // Correct the gradient to reflect the choice accurately
  const sliderStyle = {
    background: `linear-gradient(to right, 
                 ${guessDirection === 'higher' ? '#F44336' : '#4CAF50'} 0%, 
                 ${guessDirection === 'higher' ? '#F44336' : '#4CAF50'} ${selectedNumber}%, 
                 ${guessDirection === 'higher' ? '#4CAF50' : '#F44336'} ${selectedNumber}%, 
                 ${guessDirection === 'higher' ? '#4CAF50' : '#F44336'} 100%)`
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
      <div className="current-value-box">{selectedNumber}</div>
      <div className="slider-container">
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
    <div className="bet-input-group">
    <span className="bet-amount-label">Enter your bet amount:</span>
    <input type="number" className="bet-amount" value={betAmount} onChange={handleBetAmountChange} placeholder="Bet amount" />
    </div>
    <div className="probability-container">
      <div className="probability-box">{calculateProbability()}%</div>
      <span className="probability-text">Probability of winning</span>
    </div>

      
    </div>
  );
};

export default HigherLowerGame;
