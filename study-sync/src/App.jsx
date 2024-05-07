// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Tasks from './pages/Tasks';
import Calendar from './pages/Calendar';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Tasks />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
      <Navbar />
    </>
  );
}

