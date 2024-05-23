import { useState } from 'react';
import { Typography, Button, Switch, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import Header from '../components/Header';

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
    <Header pagename={'Settings'}></Header>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
          <Typography variant="h5" align="left">Account</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography>Email</Typography>
        <Typography>paulo@gmail.com</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography>Password</Typography>
          <Button variant="outlined" color="light" >
            Change Password
          </Button>
      </Box>
      <Box justifyContent="space-between" alignItems="center">
        <RouterLink to="/">
          <Button variant="outlined" color="red" >
            Logout
          </Button>
        </RouterLink>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography variant="h5" align="left">
          Notifications
        </Typography>
        <Box display="flex" alignItems="center">
          <Switch checked={isEnabled} onChange={toggleSwitch} />
          <FaBell size={24} color={isEnabled ? '#726eff' : '#37465b'} />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography variant="h5" align="left">Support and Help</Typography>
      </Box>
      {/* <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography>FAQs</Typography>
        <Button variant="contained" onClick={() => window.open('http://link-to-your-faq', '_blank')}>
          Link
        </Button>
      </Box> */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography>Contact support</Typography>
        <Button variant="outlined" color="light" onClick={() => window.open('mailto:deti@ua.pt', '_blank')}>
          deti@ua.pt
        </Button>
      </Box>
{/* 
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography variant="h5" align="left">Privacy and Security</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography>Personal data management</Typography>
        <Button variant="contained" onClick={() => window.open('http://link-to-personal-data-management', '_blank')}>
          Link
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography>Terms of service</Typography>
        <Button variant="contained" onClick={() => window.open('http://link-to-terms-of-service', '_blank')}>
          Link
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
        <Typography>Privacy policy</Typography>
        <Button variant="contained" onClick={() => window.open('http://link-to-privacy-policy', '_blank')}>
          Link
        </Button>
      </Box> */}
    </>
  );
}