import React from 'react';
import './body.css';
import defaultImage from '../imgs/logo.svg';

const App = () => {
  return (
    <div className="app">
      <main className="game-container">


        <div className="game-thumbnail" onClick={() => console.log("Navigate to Game 1")}>
          <img src={defaultImage} alt="Default Game" />
          <p>Game 1</p>
        </div>

        <div className="game-thumbnail" onClick={() => console.log("Navigate to Game 1")}>
          <img src={defaultImage} alt="Default Game" />
          <p>Game 1</p>
        </div>

        <div className="game-thumbnail" onClick={() => console.log("Navigate to Game 1")}>
          <img src={defaultImage} alt="Default Game" />
          <p>Game 1</p>
        </div>

        <div className="game-thumbnail" onClick={() => console.log("Navigate to Game 1")}>
          <img src={defaultImage} alt="Default Game" />
          <p>Game 1</p>
        </div>
        <div className="game-thumbnail" onClick={() => console.log("Navigate to Game 1")}>
          <img src={defaultImage} alt="Default Game" />
          <p>Game 1</p>
        </div>
        
      </main>
    </div>
  );
};

export default App;
