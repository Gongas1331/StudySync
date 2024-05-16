import { useState } from 'react';
import '../App.css';
import { Tabs, Tab, Box, Toolbar, Typography, AppBar } from '@mui/material';

export default function Store() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100vw' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Store
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Frames" />
          <Tab label="Icons" />
          <Tab label="Themes" />
          <Tab label="Titles" />
        </Tabs>
      </Box>
      {value === 0 && <Box><p>This is the Frames tab.</p></Box>}
      {value === 1 && <Box><p>This is the Icons tab.</p></Box>}
      {value === 2 && <Box><p>This is the Themes tab.</p></Box>}
      {value === 3 && <Box><p>This is the Titles tab.</p></Box>}
    </Box>
  );
}