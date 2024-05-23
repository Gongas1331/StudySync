import { useState } from 'react';
import data from '../database.json';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === '' || password === '') {
      setMessage('Both fields must be filled');
      return;
    }
  
    const user = data.users.find(user => user.username === username && user.password === password);
    if (user) {
      setMessage('Login successful');
      navigate('/home');
    } else {
      setMessage('Invalid username or password');
    }
  };
  
  const handleSignUp = () => {
    if (username === '' || password === '') {
      setMessage('Both fields must be filled');
      return;
    }
  
    data.users.push({ username, password });
    setMessage('Sign up successful');
    navigate('/home');
    // Note: This won't persist the new user to the JSON file
  };

  return (
    <>
      <img className="logo" src="src\assets\icons8-study-96.png" alt="StudySync logo" />
      <h1>StudySync</h1>
      <div id="login">
        <TextField label="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <TextField type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button variant="outlined" color="light" onClick={handleLogin}>Login</Button>
        <Button variant="outlined" color="light" onClick={handleSignUp}>Sign Up</Button>
        <p>{message}</p>
      </div>
    </>
  );
}