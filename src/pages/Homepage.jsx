import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Homepage() {
  const [loginStreak, setLoginStreak] = useState(0);
  const [redeemedRewards, setRedeemedRewards] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleLogin = () => {
    setShowPopup(true);
  };

  const handleRewardSelection = (reward) => {
    setSelectedReward(reward);
    setLoginStreak(loginStreak + 1);
    setRedeemedRewards([...redeemedRewards, reward]);
    setShowPopup(false);
  };

  const getRewardForDay = (day) => {
    return day * 10; 
  };

  return (
    <div>
      <h1>StudySync</h1>
      <button onClick={handleLogin}>Login</button>
      <p>Login Streak: {loginStreak}</p>
      <p>Redeemed Rewards: {redeemedRewards.length}</p>

      {showPopup && (
        <div className="popup">
          <h2>Select your reward:</h2>
          {[1, 2, 3, 4, 5, 6, 7].map(day => (
            <button key={day} onClick={() => handleRewardSelection(day)}>
              {getRewardForDay(day)} Gems for Day {day}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
