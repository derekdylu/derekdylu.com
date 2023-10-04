import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = () => {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <div 
      className={`flip-card ${isFlipped ? 'flipped' : ''} mt-4 mb-6`} 
      onClick={() => setFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="./home/profile.jpg" className="rounded-full" alt="profile" />
        </div>
        <div className="flip-card-back">
          <img src="./home/avatar.jpg" className="rounded-full" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default FlipCard