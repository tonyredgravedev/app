import React, { useState } from 'react';
import './body.css'; // External CSS for styling

const Body = () => {
  const [selectedImage, setSelectedImage] = useState('defaultHome.jpg'); 
  return (
    <div className="body">
      
        <nav>
          <ul>
            <li><a href="#home" onClick={() => setSelectedImage('defaultHome.jpg')}>Home</a></li>
            <li><a href="#game1" onClick={() => setSelectedImage('game1.jpg')}>Game 1</a></li>
            <li><a href="#game2" onClick={() => setSelectedImage('game2.jpg')}>Game 2</a></li>
            <li><a href="#game3" onClick={() => setSelectedImage('game3.jpg')}>Game 3</a></li>
          </ul>
        </nav>
      <main>
        <img src={selectedImage} alt="Selected View" className="main-image"/>
      </main>

    </div>
  );
};

export default Body;