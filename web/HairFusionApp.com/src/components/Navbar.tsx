import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/material/Icon";

const Navbar: React.FC = () => {
  return (
    <AppBar
      
      style={{ backgroundColor: "#388e3c", width: "100%" }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Hairstyle Recommendations
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="help">
          <HelpOutlineIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
