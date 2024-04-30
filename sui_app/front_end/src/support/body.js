import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './body.css';
import defaultImage from '../imgs/logo.svg';

const App = () => {

  const [selectedGame, setSelectedGame] = useState('home');

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };


return (
  <Router>
    <div>

    
      {selectedGame === 'home' && (
        <div className="game-container">

          <div className="game-thumbnail" onClick={() => handleGameClick('game1')}>
            <Link to="/game1" className="link-style">
            <img src={defaultImage} alt="Coming Soon"/>
            <p>Coming Soon</p>
            </Link>
          </div>

          <div className="game-thumbnail" onClick={() => handleGameClick('game2')}>
            <Link to="/home" className="link-style">
              <img src={defaultImage} alt="Coming Soon" className="spinning"/>
              <p>Coming Soon</p>
            </Link>
          </div>

      </div>
      )}
      {selectedGame === 'game1' && (
        <div>
          <h2>Game 1 Details</h2>
          {

          }
        </div>
      )}
      {selectedGame === 'game2' && (
        <div>
          <h2>Game 2 Details</h2>
          {
            
          }
        </div>
      )}


      
    </div>
    </Router>
  );
};

export default App;