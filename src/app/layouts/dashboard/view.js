import { AddBox, ArrowDropDown, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.scss";

const View = () => {
  return (
    <Box>
      <CssBaseline />
      <AppBar
        sx={{
          // width: { md: `calc(100% - ${"300px"}px)` },
          // ml: { sm: `${"200px"}px` },
          // height: { sm: "75px", md: "92px" },
          backgroundColor: "#fff",
          boxShadow: "none",
          color: "black",
        }}
      >
        <Grid container sx={{ padding: "4px" }}>
          <Grid item xs={2.5}>
            <div className="header-first">
              <div className="icon-button-div">
                <IconButton>
                  <MenuIcon></MenuIcon>
                </IconButton>
              </div>
              <img
                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
                alt="gmail-logo"
                className="gmail-header-img"
              />
            </div>
          </Grid>
          <Grid item xs={4.5}>
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
            <div className="main-profile-div">
              <div className="profile-child-div">
                
              </div>
            </div>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default View;
