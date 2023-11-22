import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import SearchIcon from "@mui/icons-material/Search";

const ManageDistrictOfficerHeader = ({ handleChangeSearch }) => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        {/* <span>Manage District Officer</span> */}
      </div>
      <div className="searchBx">
        <OutlinedInput
          id="search"
          type={"search"}
          onChange={handleChangeSearch}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Search"
          maxWidth
        />
        <Button
          variant="contained"
          onClick={() => navigate("/district-officer/add-district-officer")}
        >
          {"Add  District Officer"}
        </Button>
      </div>
    </>
  );
};

export default ManageDistrictOfficerHeader;
