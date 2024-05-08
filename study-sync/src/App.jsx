// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Tasks from './pages/Tasks';
import Leaderboard from './pages/Leaderboard';
import Calendar from './pages/Calendar';
import Store from './pages/Store';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/store' element={<Store />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      <Navbar />
      </Router>
    </>
  );
}

