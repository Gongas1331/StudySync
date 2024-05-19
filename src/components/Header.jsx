import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header({pagename}) {
  Header.propTypes = {
    pagename: PropTypes.string.isRequired,
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          {pagename}
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="settings">
          <RouterLink to="/settings">
            <SettingsIcon color='light' />
          </RouterLink>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}