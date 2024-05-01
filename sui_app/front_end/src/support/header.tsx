import React, { useState } from 'react';
import './header.css'; // External CSS for styling
import logo from '../imgs/logo.svg';


const Header = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <header>
      <nav>
        <ul>
          
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li onMouseEnter={() => setActiveItem('games')}
              onMouseLeave={() => setActiveItem(null)}>
            Games
            <ul className="dropdown">
              <li><a href="#game1" 
                     className={activeItem === 'game1' ? 'active' : ''}
                     onClick={() => setActiveItem('game1')}>Game 1</a></li>
              <li><a href="#game2"
                     className={activeItem === 'game2' ? 'active' : ''}
                     onClick={() => setActiveItem('game2')}>Game 2</a></li>
              <li><a href="#game3"
                     className={activeItem === 'game3' ? 'active' : ''}
                     onClick={() => setActiveItem('game3')}>Game 3</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </ul>
      </nav>
      
    </header>
  );
};


export default Header;
