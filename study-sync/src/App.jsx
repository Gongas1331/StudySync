// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Tasks from './pages/Tasks';
import Leaderboard from './pages/Leaderboard';
import Calendar from './pages/Calendar';
import Store from './pages/Store';
// import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import { ThemeProvider,createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#726eff',
      // light: '#37465b',
    },
    secondary: {
      main: '#37465b',
    },
    highlight: {
      main: '#08c6ab',
      light: '#5affe7',
    },
    background: {
      default: '#212b38',
    },
    light: {
      main: '#f0f0f0',
    },
    red: {
      main: '#f44336',
    },
    orange: {
      main: '#ff9800',
    },
    yellow: {
      main: '#ffeb3b',
    },
    green: {
      main: '#4caf50',
    },
    lightBlue: {
      main: '#03a9f4',
    },
    darkBlue: {
      main: '#303f9f',
    },
    purple: {
      main: '#9c27b0',
    },
    indigo: {
      main: '#3f51b5',
    },
    pink: {
      main: '#e91e63',
    },
    brown: {
      main: '#795548',
    },
    gray: {
      main: '#9e9e9e',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App-content">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/store' element={<Store />} />
            {/* <Route path='/profile' element={<Profile />} /> */}
            <Route path='/profile' element={<Settings />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </div>
        <Navbar />
      </Router>
    </ThemeProvider>
  );
}

