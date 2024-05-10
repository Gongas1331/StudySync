import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Homepage() {
  const [loginStreak, setLoginStreak] = useState(0);
  const [redeemedRewards, setRedeemedRewards] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  useEffect(() => {
    // Show popup when the component mounts
    setShowPopup(true);
  }, []);

  // Function to handle login
  const handleLogin = () => {
    setShowPopup(true); // Show the popup again on subsequent logins
  };

  // Function to handle reward selection
  const handleRewardSelection = (reward) => {
    setSelectedReward(reward);
    setLoginStreak(loginStreak + 1);
    setRedeemedRewards([...redeemedRewards, reward]);
    setShowPopup(false);
  };

  // Function to get the reward for the current day
  const getRewardForDay = (day) => {
    // This is a placeholder function, you can customize it as needed
    return day * 10; // For example, 10 gems for day 1, 20 gems for day 2, and so on
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
