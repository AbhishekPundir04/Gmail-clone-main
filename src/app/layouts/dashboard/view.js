import { AddBox, ArrowDropDown, Search } from "@mui/icons-material";
import { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Grid,
  IconButton,
  ListItem,
  Toolbar,
  Drawer,
  List,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { firstMenu } from "../../../utils/sidemenu";
import "./style.scss";

const View = ({ children = <></> }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <CssBaseline />

      <AppBar
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          color: "black",
          paddingLeft: "0px",
        }}
      >
        <Grid container sx={{ padding: "4px" }}>
          <Grid item xs={2}>
            <div className="header-first">
              <div className="icon-button-div">
                <IconButton>
                  <MenuIcon></MenuIcon>
                </IconButton>
              </div>
              {/* <img
                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
                alt="gmail-logo"
                className="gmail-header-img"
              /> */}
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="main-search-div">
              <div className="search-child-div">
                <IconButton>
                  <Search />
                </IconButton>
                <input placeholder="Search in mail" />
                <IconButton></IconButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="avatar-div">
              <Avatar
                onClick={handleAvatarClick}
                alt="User"
                src="user-avatar.jpg"
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleAvatarClose}
                onClick={handleAvatarClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </div>
          </Grid>
        </Grid>
      </AppBar>
      {/* <List>
        {firstMenu.map((item)=>{
          return (<ListItem>
            <span style={{ fontSize: '24px', marginRight: '10px',marginTop:"2px" }}>{item.icons}</span>
            <Typography>
              {item.title}
            </Typography>
          </ListItem>)
        })}
      </List> */}

      <Box>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default View;
