// import React from 'react';
import {FaTasks,FaBars,FaRegCalendarAlt} from 'react-icons/fa';
import {GoProject} from 'react-icons/go';
import '../App.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <button><FaTasks/></button>
      <button><GoProject/></button>
      <button><FaBars/></button>
      <button><FaRegCalendarAlt/></button>
      <button><FaBars/></button>
    </nav>
  );
}