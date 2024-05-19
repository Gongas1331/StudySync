import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Typography, IconButton, Toolbar, Box } from "@mui/material";


// CurrencyBar Component
export default function CurrencyBar({ streakfreeze, coins }) {

  return (
    <AppBar position="static" color="transparent" elevation={0}>
    <Link to="/store">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box display="flex" alignItems="center">
            <IconButton edge="start" color="lightBlue" aria-label="menu" sx={{ mr: 1 }}>
              <WhatshotIcon />
            </IconButton>
            <Typography variant="h6" color="white" component="div">
              {streakfreeze}
            </Typography>
          </Box>
            <Box display="flex" alignItems="center">
              <Typography variant="h6" color="white" component="div">
                {coins}
              </Typography>
              <IconButton edge="start" color="yellow" aria-label="menu" sx={{ ml: 1 }}>
                <MonetizationOnIcon />
              </IconButton>
            </Box>
        </Box>
      </Toolbar>
          </Link>
    </AppBar>
  );
}

CurrencyBar.propTypes = {
  streakfreeze: PropTypes.number.isRequired,
  coins: PropTypes.number.isRequired,
};