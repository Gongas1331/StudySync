import { useState } from 'react';
import { Typography, Button, Switch, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <Typography variant="h5">Account</Typography>
      <div>
        <Typography>Email</Typography>
        <Typography>carlos@gmail.com</Typography>
      </div>
      <div>
        <Typography>Password</Typography>
        <Button variant="contained" onClick={() => { }}>
          Change Password
        </Button>
        <RouterLink to="/logout">
          <Button variant="contained">
            Logout
          </Button>
        </RouterLink>
      </div>

      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography variant="h5">
          Notifications
        </Typography>
        <Box display="flex" alignItems="center">
          <Switch checked={isEnabled} onChange={toggleSwitch} />
          <FaBell size={24} color={isEnabled ? '#726eff' : '#37465b'} />
        </Box>
      </Box>

      <Typography variant="h5">Support and Help</Typography>
      <div>
        <Typography>FAQs</Typography>
        <Button variant="contained" onClick={() => window.open('http://link-to-your-faq', '_blank')}>
          Link
        </Button>
      </div>
      <div>
        <Typography>Support contact</Typography>
        <Button variant="contained" onClick={() => window.open('mailto:deti@ua.pt', '_blank')}>
          deti@ua.pt
        </Button>
      </div>

      <Typography variant="h5">Privacy and Security</Typography>
      <div>
        <Typography>Personal data management</Typography>
        <Button variant="contained" onClick={() => window.open('http://link-to-personal-data-management', '_blank')}>
          Link
        </Button>
      </div>
      <div>
        <Typography>Terms of service</Typography>
        <Button variant="contained" onClick={() => window.open('http://link-to-terms-of-service', '_blank')}>
          Link
        </Button>
      </div>
      <div>
        <Typography>Privacy policy</Typography>
        <Button variant="contained" onClick={() => window.open('http://link-to-privacy-policy', '_blank')}>
          Link
        </Button>
      </div>
    </>
  );
}