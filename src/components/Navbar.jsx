// import React from 'react';
import { Link } from 'react-router-dom';
import {FaTasks,FaBars,FaRegCalendarAlt,FaStore} from 'react-icons/fa';
import { MdLeaderboard } from "react-icons/md";
import '../App.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
    <Link to="/tasks"><button><FaTasks/></button></Link>
    <Link to="/calendar"><button><FaRegCalendarAlt/></button></Link>
    <Link to="/profile"><button><FaBars/></button></Link>
    <Link to="/store"><button><FaStore/></button></Link>
    <Link to="/leaderboard"><button><MdLeaderboard/></button></Link>
    </nav>
  );
}     