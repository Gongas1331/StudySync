import { Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import '../App.css';

export default function Logout() {
  return (
    <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }
    }>
      <Typography variant="h4" gutterBottom>
        Thank you for completing the usability test!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your feedback is greatly appreciated.
      </Typography>
      <Button variant="contained" component={RouterLink} to="/">
        Back to Start
      </Button>
    </div>
  );
}