
import React, { useState } from 'react';
import './nav.css'
import logo from './logop.png';
import perfil from './avatar.png';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Tooltip from '@mui/material/Tooltip';
import { Dialog, DialogContent, DialogActions, Button, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    grey: {
      900: '#212121',
    },
  },
});

function Nav() {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleLogout = () => {
    setOpenLogoutDialog(false);
    // Aquí puedes agregar la lógica para cerrar sesión
  };

  return (
    <ThemeProvider theme={theme}>
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">ZYPHY</span>
        </div>
        <div className="right-section">
          <Tooltip title="Logout" placement="bottom">
            <button className='i' onClick={handleOpenLogoutDialog}>
              <LogoutOutlinedIcon />
            </button>
          </Tooltip>
          <Tooltip title="Perfil" placement="bottom">
            <img src={perfil} className='profile-picture' alt="Perfil" />
          </Tooltip>
        </div>

        {/* Diálogo para confirmar logout */}
        <Dialog open={openLogoutDialog} onClose={handleCloseLogoutDialog} classes={{ paper: 'custom-dialog-paper' }} sx={{ backgroundColor: "#fff" }}>
          <DialogContent className="custom-dialog-title" sx={{ backgroundColor: "#fff" }}>Log Out?</DialogContent>
          <DialogContent className="custom-dialog-content" sx={{ backgroundColor: "#fff" }}>
            Are you sure you want to log out?
          </DialogContent>
          <DialogActions className="custom-dialog-actions" sx={{ backgroundColor: "#fff" }}>
            <Button onClick={handleCloseLogoutDialog} sx={{ backgroundColor: "#939393" }}>
              Cancel
            </Button>
            <Button onClick={handleLogout}sx={{ backgroundColor: "#fca94b" }}>
              Log Out
            </Button>
          </DialogActions>
        </Dialog>
      </nav>
    </ThemeProvider>
  );
}

export default Nav;
