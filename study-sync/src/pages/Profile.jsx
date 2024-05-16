import * as React from 'react';
import { AppBar, Box, Button, Toolbar, IconButton, Typography, Paper, LinearProgress, Avatar, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link as RouterLink } from 'react-router-dom';
import { FaBook, FaBriefcase, FaUsers, FaBroom, FaRunning, FaLightbulb } from 'react-icons/fa';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';


const LargeAvatar = styled(Avatar)({
  width: '50vw',
  height: '50vw',
});

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: '#f9f9f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function Profile() {
  const xp = 70;
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Profile
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="settings">
            <RouterLink to="/settings">
              <SettingsIcon color='light' />
            </RouterLink>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box display="flex" justifyContent="center" sx={{ marginTop: '2%', marginBottom: '0%' }}>
        <LargeAvatar alt="User Name" src="./src/assets/paulo_noites_gold.png" />
      </Box>
      <Box display="flex" justifyContent="center" sx={{ marginTop: '0%', marginBottom: '5%' }}>
        <Typography variant="h5">Paulo Noites</Typography>
      </Box>
      <Box display="flex" justifyContent="center" sx={{ marginBottom: '1%' }}>
        <Paper elevation={3} sx={{ padding: '0.5%', marginTop: '-4%', zIndex: '2', width: '20%', borderRadius: '15px', textAlign: 'center', color: 'primary.main', borderColor: 'primary.main', border: 2, bgcolor: 'light.main' }}>
          <Typography variant="h6">Lvl 15</Typography>
        </Paper>
      </Box>
      <LinearProgress variant="determinate" value={xp} sx={{ height: '2em', width: '80%', margin: 'auto', marginTop: '-5%', borderRadius: '80px', borderColor: 'primary.main', border: 2, bgcolor: 'light.main' }} />
      <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '2%' }}>{xp}/100 XP</Typography>


      <Typography align='left' marginTop={'2%'} marginLeft={'1em'} variant="h5">Stats</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
        <Card sx={{ width: '45%', margin: '2%', backgroundColor: 'transparent', color: 'white', borderColor: 'white', border: 1, borderRadius: '20px' }}>
          <CardContent>
            <Typography variant="h6">Total Logins</Typography>
            <Typography variant="body1">{142}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '45%', margin: '2%', backgroundColor: 'transparent', color: 'white', borderColor: 'white', border: 1, borderRadius: '20px' }}>
          <CardContent>
            <Typography variant="h6">Total XP</Typography>
            <Typography variant="body1">{1560}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '45%', margin: '2%', backgroundColor: 'transparent', color: 'white', borderColor: 'white', border: 1, borderRadius: '20px' }}>
          <CardContent>
            <Typography variant="h6">Highest Rank</Typography>
            <Typography variant="body1">{'Gold'}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '45%', margin: '2%', backgroundColor: 'transparent', color: 'white', borderColor: 'white', border: 1, borderRadius: '20px' }}>
          <CardContent>
            <Typography variant="h6">Highest Streak</Typography>
            <Typography variant="body1">{67}</Typography>
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" marginTop={'2%'} alignItems="center" justifyContent="space-between">
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="brown.main">Bronze</Typography>
              <Typography color="silver">Silver</Typography>
              <Typography color="gold">Gold</Typography>
              <Typography color="lightBlue.main">Diamond</Typography>
              <Typography color="red.main">Legendary</Typography>
            </React.Fragment>
          }
          open={open}
          disableHoverListener
        >
          <Typography align='left' marginLeft={'1em'} variant="h5">Achievements</Typography>
        </HtmlTooltip>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Button onClick={handleTooltipOpen}>Rankings</Button>
        </ClickAwayListener>
      </Box>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          flexDirection: 'row',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        <Card sx={{ minWidth: 275, margin: 2, backgroundColor: 'transparent', color: 'gold', borderColor: 'gold', border: 1, borderRadius: '20px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FaBook size={32} />
              <Typography variant="body2" sx={{ ml: 1 }}>Study</Typography>
              <Typography variant="body2" sx={{ ml: 'auto' }}>50 tasks to next rank</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, margin: 2, backgroundColor: 'transparent', color: 'white', borderColor: 'white', border: 1, borderRadius: '20px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FaBriefcase size={32} />
              <Typography variant="body2" sx={{ ml: 1 }}>Work</Typography>
              <Typography variant="body2" sx={{ ml: 'auto' }}>15 tasks to next rank</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, margin: 2, backgroundColor: 'transparent', color: 'brown.main', borderColor: 'brown.main', border: 1, borderRadius: '20px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FaUsers size={32} />
              <Typography variant="body2" sx={{ ml: 1 }}>Social</Typography>
              <Typography variant="body2" sx={{ ml: 'auto' }}>8 tasks to next rank</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, margin: 2, backgroundColor: 'transparent', color: 'lightBlue.main', borderColor: 'lightBlue.main', border: 1, borderRadius: '20px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FaBroom size={32} />
              <Typography variant="body2" sx={{ ml: 1 }}>Chores</Typography>
              <Typography variant="body2" sx={{ ml: 'auto' }}>103 tasks to next rank</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, margin: 2, backgroundColor: 'transparent', color: 'gold', borderColor: 'gold', border: 1, borderRadius: '20px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FaRunning size={32} />
              <Typography variant="body2" sx={{ ml: 1 }}>Fitness</Typography>
              <Typography variant="body2" sx={{ ml: 'auto' }}>32 tasks to next rank</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, margin: 2, backgroundColor: 'transparent', color: 'silver', borderColor: 'silver', border: 1, borderRadius: '20px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FaLightbulb size={32} />
              <Typography variant="body2" sx={{ ml: 1 }}>Self-Improvement</Typography>
              <Typography variant="body2" sx={{ ml: 'auto' }}>18 tasks to next rank</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}