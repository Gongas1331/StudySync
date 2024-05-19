// import React from 'react';
import '../App.css';
import Header from '../components/Header';

export default function Leaderboard() {
  // Generate dummy data
  const users = Array.from({ length: 50 }, (_, i) => ({
    placement: i + 1,
    username: `User${i + 1}`,
    xp: 1000 - i * 10, // Decrease XP as placement increases
  }));
  users[7].username = "Paulo Noites"; //

  return (
    <div>
      <Header pagename={'Leaderboard'}></Header>
      <h3 style={{ display: 'flex', justifyContent: 'space-around' }}>
        <span>Season 4</span>
        <span>Gold</span>
        <span>27 days left</span>
      </h3>
      <h5 style={{ display: 'flex', justifyContent: 'space-around' }}>
        <span> Beginning of Promotion Zone</span>
      </h5>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {users.map((user) => (
          <li key={user.placement} style={{
            display: 'flex',
            justifyContent: 'space-between',
            border: user.username === 'Paulo Noites' ? '2px solid gold' : '1px solid white',
            borderRadius: '10px',
            padding: '10px',
            margin: '2% 2%',
            backgroundColor: user.username === 'Paulo Noites' ? '#726eff' : 'transparent',
            color: user.username === 'Paulo Noites' ? '#f9f9f9' : 'white'
          }}>
            <span>{user.placement}</span>
            <span>{user.username}</span>
            <span>{user.xp} XP</span>
          </li>
        ))}
      </ul>
      <h5 style={{ display: 'flex', justifyContent: 'space-around' }}>
        <span> End of Promotion Zone</span>
      </h5>
    </div>
  );
}