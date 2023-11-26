import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../district-officer/style.scss";
import SearchIcon from "@mui/icons-material/Search";

const ManageBdoHeader = ({ handleChangeSearch }) => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <h3
          style={{
            marginBottom: "20px",
            paddingLeft: "20px",
            marginTop: "20px",
          }}
        >
         Add BDO
        </h3>
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
          onClick={() => navigate("/manage-bdo/add-bdo")}
        >
          {"Add BDO"}
        </Button>
      </div>
    </>
  );
};

export default ManageBdoHeader;
