import { Avatar, Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import NameImg from "../../../assets/images/Base.png";

const Notficationdropdown = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box className="main_notification_bx">
        <div className="heading_bx">
          <h2>Notifications</h2>
          <p>
            You have <span style={{ color: "#aa7d54" }}>04 unread </span>
            notifications
          </p>
        </div>
        <div className="block">
          <h4>Today</h4>
          <div className="item_bx" onClick={() => navigate("/")}>
            <div className="left_item">
              <Avatar
                alt="Remy Sharp"
                src={NameImg}
                sx={{ width: 60, height: 60 }}
              />
            </div>
            <div className="right_item">
              <p>
                <span>अमित कुमार</span> गाय गोद लेना चाहते हैं
              </p>
              <span>6hrs ago</span>
            </div>
          </div>
        </div>
        <div className="block">
          <h4>Yesterday</h4>
          <div className="item_bx" onClick={() => navigate("/")}>
            <div className="left_item">
              <Avatar
                alt="Remy Sharp"
                src={NameImg}
                sx={{ width: 60, height: 60 }}
              />
            </div>
            <div className="right_item">
              <p>
                <span>अमित कुमार</span> गाय गोद लेना चाहते हैं
              </p>
              {/* <Button autoFocus size="small" color="info" variant="contained">
              विवरण देखें
            </Button> */}
              <span> 11:42 PM</span>
            </div>
          </div>
        </div>
        <div className="block">
          <h4>08-03-2022</h4>
          <div className="item_bx" onClick={() => navigate("/")}>
            <div className="left_item">
              <Avatar
                alt="Remy Sharp"
                src={NameImg}
                sx={{ width: 60, height: 60 }}
              />
            </div>
            <div className="right_item">
              <p>
                <span>अमित कुमार</span> गाय गोद लेना चाहते हैं
              </p>
              {/* <Button autoFocus size="small" color="info" variant="contained">
              विवरण देखें
            </Button> */}
              <span>11:42 PM</span>
            </div>
          </div>
          <div className="item_bx" onClick={() => navigate("/")}>
            <div className="left_item">
              <Avatar
                alt="Remy Sharp"
                src={NameImg}
                sx={{ width: 60, height: 60 }}
              />
            </div>
            <div className="right_item">
              <p>
                <span>अमित कुमार</span> गाय गोद लेना चाहते हैं
              </p>
              {/* <Button autoFocus size="small" color="info" variant="contained">
              विवरण देखें
            </Button> */}
              <span>11:42 PM</span>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Notficationdropdown;
