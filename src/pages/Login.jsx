import React, {useState} from 'react';
import data from '../database.json';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


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
        <TextField variant='outlined' label="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </FormControl>
        <Button variant="outlined" color="light" onClick={handleLogin}>Login</Button>
        <Button variant="outlined" color="light" onClick={handleSignUp}>Sign Up</Button>
        <p>{message}</p>
      </div>
    </>
  );
}