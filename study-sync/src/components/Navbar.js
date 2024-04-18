import React, { useState, useEffect } from 'react';
import leaderboardIcon from '../images/leaderboard.png';
import todoIcon from '../images/todo.png';
import homeIcon from '../images/avatar.png';
import calendarIcon from '../images/calendar.png';
import shopIcon from '../images/shop.png';
import '../styles/Navbar.css';

const NavBar = () => {
  const [progress, setProgress] = useState(0);

  // Simulate progress increase over time
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 5 : 100));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-item">
        <img src={leaderboardIcon} alt="Leaderboard" />
      </div>
      <div className="nav-item">
        <img src={todoIcon} alt="ToDo" />
      </div>
      <div className="nav-item center">
        <div className="circle-progress">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <img src={homeIcon} alt="Home" className="home-button" />
      </div>
      <div className="nav-item">
        <img src={calendarIcon} alt="Calendar" className="calendar-button" />
      </div>
      <div className="nav-item">
        <img src={shopIcon} alt="Shop" className="shop-button" />
      </div>
    </nav>
  );
};

export default NavBar;
