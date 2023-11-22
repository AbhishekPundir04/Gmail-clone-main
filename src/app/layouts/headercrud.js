import {
    AppBar,
    Avatar,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem,
    TextField,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import "./header.scss";
  
  const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <Grid container spacing={2} className="header-main-grid">
        <Grid
          item
          xs={3}
          className="header-frist-grid"
          x={{
            display: { xs: "block", sm: "block", md: "block" },
            position: "fixed",
          }}
        >
          <div className="header-first">
            <IconButton>
              {/* <ReorderIcon
            ></ReorderIcon> */}
            </IconButton>
           
          </div>
        </Grid>
        <Grid item xs={9} className="second-header-grid"></Grid>
      </Grid>
    );
  };
  
  export default Header;
  